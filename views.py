# Django REST Framework API视图
# 处理所有前端请求

import os
import mimetypes
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.middleware.csrf import get_token
from django.http import JsonResponse, FileResponse, Http404
from django.shortcuts import get_object_or_404

from .models import (
    UserProfile, Project, Note, Literature,
    Todo, Schedule, Favorite, UserPreference,
    ProjectDocument, NoteFile, WorkbenchFile
)
from .serializers import (
    UserSerializer, UserProfileSerializer, ProjectSerializer, NoteSerializer,
    LiteratureSerializer, TodoSerializer, ScheduleSerializer,
    FavoriteSerializer, UserPreferenceSerializer,
    ProjectDocumentSerializer, NoteFileSerializer, WorkbenchFileSerializer,
    LoginSerializer, RegisterSerializer, ChangePasswordSerializer
)


# ============ 认证相关视图 ============

@api_view(['GET'])
def get_csrf_token(request):
    """获取CSRF Token"""
    return Response({'csrfToken': get_token(request)})


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_view(request):
    """用户登录"""
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        if user:
            login(request, user)
            return Response({
                'success': True,
                'user': UserSerializer(user).data,
                'message': '登录成功'
            })
        return Response({
            'success': False,
            'message': '用户名或密码错误'
        }, status=status.HTTP_401_UNAUTHORIZED)
    return Response({
        'success': False,
        'message': '请求数据无效'
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout_view(request):
    """用户登出"""
    logout(request)
    return Response({'success': True, 'message': '已退出登录'})


@api_view(['GET'])
def current_user(request):
    """获取当前用户信息"""
    if request.user.is_authenticated:
        try:
            profile = request.user.profile
            user_data = UserSerializer(request.user).data
            profile_data = UserProfileSerializer(profile).data
            return Response({
                'isLoggedIn': True,
                'user': {**user_data, **profile_data}
            })
        except UserProfile.DoesNotExist:
            return Response({
                'isLoggedIn': True,
                'user': UserSerializer(request.user).data
            })
    return Response({'isLoggedIn': False, 'user': None})


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_view(request):
    """用户注册"""
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        login(request, user)
        return Response({
            'success': True,
            'user': UserSerializer(user).data,
            'message': '注册成功'
        }, status=status.HTTP_201_CREATED)
    # 格式化错误信息
    errors = serializer.errors
    error_msgs = []
    for field, msgs in errors.items():
        if isinstance(msgs, list):
            error_msgs.extend(msgs)
        else:
            error_msgs.append(str(msgs))
    return Response({
        'success': False,
        'message': error_msgs[0] if error_msgs else '注册失败',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def change_password(request):
    """修改密码"""
    serializer = ChangePasswordSerializer(data=request.data)
    if serializer.is_valid():
        user = request.user
        if not user.check_password(serializer.validated_data['old_password']):
            return Response({
                'success': False,
                'message': '原密码错误'
            }, status=status.HTTP_400_BAD_REQUEST)
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        login(request, user)
        return Response({'success': True, 'message': '密码修改成功'})
    return Response({
        'success': False,
        'message': '请求数据无效'
    }, status=status.HTTP_400_BAD_REQUEST)


# ============ 用户信息视图 ============

class UserProfileViewSet(viewsets.ModelViewSet):
    """用户信息管理"""
    serializer_class = UserProfileSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return UserProfile.objects.none()
        return UserProfile.objects.filter(user=self.request.user)

    def get_object(self):
        return self.get_queryset().first()
    
    def update(self, request, *args, **kwargs):
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        serializer = self.get_serializer(profile, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# ============ 科研项目视图 ============

class ProjectViewSet(viewsets.ModelViewSet):
    """科研项目管理"""
    serializer_class = ProjectSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Project.objects.none()
        return Project.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=True, methods=['post'])
    def add_document(self, request, pk=None):
        """添加文档"""
        project = self.get_object()
        serializer = ProjectDocumentSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(project=project)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['delete'])
    def remove_document(self, request, pk=None):
        """删除文档"""
        project = self.get_object()
        doc_id = request.data.get('doc_id')
        try:
            doc = ProjectDocument.objects.get(id=doc_id, project=project)
            doc.file.delete()
            doc.delete()
            return Response({'success': True})
        except ProjectDocument.DoesNotExist:
            return Response({'success': False, 'message': '文档不存在'})


# ============ 灵感便签视图 ============

class NoteViewSet(viewsets.ModelViewSet):
    """灵感便签管理"""
    serializer_class = NoteSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Note.objects.none()
        queryset = Note.objects.filter(user=self.request.user)
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(content__icontains=search)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=True, methods=['post'])
    def add_file(self, request, pk=None):
        """添加附件"""
        note = self.get_object()
        serializer = NoteFileSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(note=note)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['delete'])
    def remove_file(self, request, pk=None):
        """删除附件"""
        note = self.get_object()
        file_id = request.data.get('file_id')
        try:
            note_file = NoteFile.objects.get(id=file_id, note=note)
            note_file.file.delete()
            note_file.delete()
            return Response({'success': True})
        except NoteFile.DoesNotExist:
            return Response({'success': False, 'message': '文件不存在'})


# ============ 文献资料视图 ============

class LiteratureViewSet(viewsets.ModelViewSet):
    """文献资料管理"""
    serializer_class = LiteratureSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Literature.objects.none()
        queryset = Literature.objects.filter(user=self.request.user)
        category = self.request.query_params.get('category', None)
        search = self.request.query_params.get('search', None)

        if category and category != 'all':
            queryset = queryset.filter(category=category)
        if search:
            queryset = queryset.filter(title__icontains=search) | queryset.filter(author__icontains=search)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# ============ 待办事项视图 ============

class TodoViewSet(viewsets.ModelViewSet):
    """待办事项管理"""
    serializer_class = TodoSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Todo.objects.none()
        queryset = Todo.objects.filter(user=self.request.user)
        completed = self.request.query_params.get('completed', None)
        if completed is not None:
            queryset = queryset.filter(completed=completed.lower() == 'true')
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['post'])
    def toggle(self, request):
        """切换完成状态"""
        todo_id = request.data.get('id')
        try:
            todo = Todo.objects.get(id=todo_id, user=request.user)
            todo.completed = not todo.completed
            todo.save()
            return Response({'success': True, 'completed': todo.completed})
        except Todo.DoesNotExist:
            return Response({'success': False, 'message': '待办不存在'})


# ============ 赛程规划视图 ============

class ScheduleViewSet(viewsets.ModelViewSet):
    """赛程规划管理"""
    serializer_class = ScheduleSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Schedule.objects.none()
        return Schedule.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# ============ 收藏视图 ============

class FavoriteViewSet(viewsets.ModelViewSet):
    """收藏管理"""
    serializer_class = FavoriteSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Favorite.objects.none()
        queryset = Favorite.objects.filter(user=self.request.user)
        category = self.request.query_params.get('category', None)
        if category and category != 'all':
            queryset = queryset.filter(category=category)
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    @action(detail=False, methods=['get'])
    def check(self, request):
        """检查是否已收藏"""
        title = request.query_params.get('title', None)
        if title:
            exists = Favorite.objects.filter(user=request.user, title=title).exists()
            return Response({'isFavorited': exists})
        return Response({'isFavorited': False})


# ============ 用户偏好视图 ============

class UserPreferenceViewSet(viewsets.ModelViewSet):
    """用户偏好管理"""
    serializer_class = UserPreferenceSerializer
    
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return UserPreference.objects.none()
        return UserPreference.objects.filter(user=self.request.user)
    
    def get_object(self):
        pref, _ = UserPreference.objects.get_or_create(user=self.request.user)
        return pref
    
    def update(self, request, *args, **kwargs):
        pref, _ = UserPreference.objects.get_or_create(user=request.user)
        serializer = self.get_serializer(pref, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# ============ 工作台文件管理 ============

class WorkbenchFileViewSet(viewsets.ModelViewSet):
    """工作台通用文件管理（上传/查看/下载/删除）"""
    serializer_class = WorkbenchFileSerializer

    def get_queryset(self):
        user = self.request.user if self.request.user.is_authenticated else None
        return WorkbenchFile.objects.filter(user=user)

    def perform_create(self, serializer):
        file = self.request.FILES.get('file')
        name = self.request.POST.get('name', '')
        if not name and file:
            name = file.name
        user = self.request.user if self.request.user.is_authenticated else None
        serializer.save(
            user=user,
            original_name=file.name if file else name,
            name=name or (file.name if file else 'file')
        )


# ============ 仪表盘数据视图 ============

@api_view(['GET'])
def dashboard_data(request):
    """获取仪表盘汇总数据"""
    if not request.user.is_authenticated:
        return Response({'error': '请先登录'}, status=status.HTTP_401_UNAUTHORIZED)
    
    user = request.user
    return Response({
        'projects_count': Project.objects.filter(user=user).count(),
        'notes_count': Note.objects.filter(user=user).count(),
        'literature_count': Literature.objects.filter(user=user).count(),
        'todos_pending': Todo.objects.filter(user=user, completed=False).count(),
        'favorites_count': Favorite.objects.filter(user=user).count(),
        'schedules_count': Schedule.objects.filter(user=user).count(),
    })


# ============ 快速自动登录（基于localStorage用户名） ============

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def auto_login(request):
    """基于用户名快速登录或创建用户"""
    username = request.data.get('username', '').strip()
    if not username:
        return Response({'success': False, 'message': '用户名不能为空'}, status=status.HTTP_400_BAD_REQUEST)

    user, created = User.objects.get_or_create(username=username)
    if created:
        user.set_unusable_password()
        user.save()
        UserProfile.objects.get_or_create(user=user)
        UserPreference.objects.get_or_create(user=user)

    login(request, user)
    return Response({
        'success': True,
        'user': UserSerializer(user).data,
        'created': created
    })


# ============ 文件上传视图 ============

@api_view(['POST'])
def upload_file(request, model_type, model_id):
    """通用文件上传"""
    file = request.FILES.get('file')
    if not file:
        return Response({'success': False, 'message': '未选择文件'}, status=status.HTTP_400_BAD_REQUEST)
    
    # 根据类型保存到对应模型
    if model_type == 'project':
        try:
            project = Project.objects.get(id=model_id, user=request.user)
            doc = ProjectDocument.objects.create(
                project=project,
                name=file.name,
                doc_type=request.POST.get('doc_type', 'other'),
                version=request.POST.get('version', 'V1.0'),
                file=file
            )
            return Response({
                'success': True,
                'id': str(doc.id),
                'name': doc.name,
                'url': request.build_absolute_uri(doc.file.url)
            })
        except Project.DoesNotExist:
            return Response({'success': False, 'message': '项目不存在'})
    
    elif model_type == 'note':
        try:
            note = Note.objects.get(id=model_id, user=request.user)
            note_file = NoteFile.objects.create(
                note=note,
                name=file.name,
                file_type=file.content_type,
                file=file
            )
            return Response({
                'success': True,
                'id': str(note_file.id),
                'name': note_file.name,
                'url': request.build_absolute_uri(note_file.file.url)
            })
        except Note.DoesNotExist:
            return Response({'success': False, 'message': '便签不存在'})
    
    return Response({'success': False, 'message': '未知类型'})


# ============ 文件预览和下载视图 ============

def _get_file_object(model_type, file_id):
    """根据类型和ID获取文件对象"""
    if model_type == 'project':
        return get_object_or_404(ProjectDocument, id=file_id)
    elif model_type == 'note':
        return get_object_or_404(NoteFile, id=file_id)
    elif model_type == 'workbench':
        return get_object_or_404(WorkbenchFile, id=file_id)
    raise Http404('未知文件类型')


@api_view(['GET'])
def preview_file(request, model_type, file_id):
    """预览文件（图片直接在浏览器打开，其他类型返回文件流）"""
    file_obj = _get_file_object(model_type, file_id)
    file_path = file_obj.file.path

    if not os.path.exists(file_path):
        raise Http404('文件不存在')

    # 获取 MIME 类型
    content_type, _ = mimetypes.guess_type(file_obj.file.name)
    if not content_type:
        content_type = 'application/octet-stream'

    # 图片类型直接返回，浏览器会自动预览
    is_image = content_type.startswith('image/')
    is_pdf = content_type == 'application/pdf'

    response = FileResponse(
        open(file_path, 'rb'),
        content_type=content_type,
        as_attachment=False  # 图片和PDF内联显示
    )

    if is_image or is_pdf:
        response['Content-Disposition'] = f'inline; filename="{file_obj.name}"'
    else:
        # 其他文件类型也尝试内联显示
        response['Content-Disposition'] = f'inline; filename="{file_obj.name}"'

    return response


@api_view(['GET'])
def download_file(request, model_type, file_id):
    """下载文件"""
    file_obj = _get_file_object(model_type, file_id)
    file_path = file_obj.file.path

    if not os.path.exists(file_path):
        raise Http404('文件不存在')

    content_type, _ = mimetypes.guess_type(file_obj.file.name)
    if not content_type:
        content_type = 'application/octet-stream'

    response = FileResponse(
        open(file_path, 'rb'),
        content_type=content_type,
        as_attachment=True,
        filename=file_obj.name
    )
    response['Content-Disposition'] = f'attachment; filename="{file_obj.name}"'

    return response


# ============ AI 代理视图（隐藏 API Key） ============
import requests as http_requests

DEEPSEEK_API_KEY = 'sk-c516be6d67f84b7b9a1b26dd4ea33a5b'
DEEPSEEK_MODEL = 'deepseek-v4-flash'
DEEPSEEK_URL = 'https://api.deepseek.com/v1/chat/completions'


@api_view(['POST'])
def ai_chat_proxy(request):
    """AI 聊天代理 - 前端不暴露 API Key"""
    messages = request.data.get('messages', [])
    temperature = request.data.get('temperature', 0.7)
    max_tokens = request.data.get('max_tokens', 2048)
    model = request.data.get('model', DEEPSEEK_MODEL)

    if not messages:
        return Response({'error': '缺少 messages 参数'}, status=400)

    try:
        resp = http_requests.post(
            DEEPSEEK_URL,
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {DEEPSEEK_API_KEY}',
            },
            json={
                'model': model,
                'messages': messages,
                'temperature': temperature,
                'max_tokens': max_tokens,
            },
            timeout=60,
        )
        return Response(resp.json(), status=resp.status_code)
    except http_requests.RequestException as e:
        return Response({'error': f'AI 服务请求失败: {str(e)}'}, status=502)
