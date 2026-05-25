# Django REST Framework 序列化器
# 将Python对象转换为JSON格式

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    UserProfile, Project, Note, Literature, 
    Todo, Schedule, Favorite, UserPreference,
    ProjectDocument, NoteFile, WorkbenchFile
)


class UserSerializer(serializers.ModelSerializer):
    """用户基本信息"""
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']


class UserProfileSerializer(serializers.ModelSerializer):
    """用户扩展信息"""
    username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = UserProfile
        fields = ['username', 'school', 'college', 'major', 'grade', 'grade_detail', 'avatar']


class ProjectSerializer(serializers.ModelSerializer):
    """科研项目"""
    class Meta:
        model = Project
        fields = ['id', 'name', 'desc', 'status', 'documents', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class NoteSerializer(serializers.ModelSerializer):
    """灵感便签"""
    class Meta:
        model = Note
        fields = ['id', 'content', 'files', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class LiteratureSerializer(serializers.ModelSerializer):
    """文献资料"""
    class Meta:
        model = Literature
        fields = ['id', 'title', 'author', 'year', 'category', 'tags', 'created_at']
        read_only_fields = ['id', 'created_at']


class TodoSerializer(serializers.ModelSerializer):
    """待办事项"""
    class Meta:
        model = Todo
        fields = ['id', 'content', 'start_time', 'deadline', 'completed', 'created_at']
        read_only_fields = ['id', 'created_at']


class ScheduleSerializer(serializers.ModelSerializer):
    """赛程规划"""
    class Meta:
        model = Schedule
        fields = ['id', 'name', 'grades', 'description', 'timeline_note', 'stages', 'created_at']
        read_only_fields = ['id', 'created_at']


class FavoriteSerializer(serializers.ModelSerializer):
    """收藏内容"""
    class Meta:
        model = Favorite
        fields = ['id', 'category', 'title', 'description', 'meta', 'tags', 'source_url', 'favorited_at']
        read_only_fields = ['id', 'favorited_at']


class UserPreferenceSerializer(serializers.ModelSerializer):
    """用户偏好"""
    class Meta:
        model = UserPreference
        fields = ['view_mode', 'last_category']


class ProjectDocumentSerializer(serializers.ModelSerializer):
    """项目文档"""
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = ProjectDocument
        fields = ['id', 'name', 'doc_type', 'version', 'file', 'url', 'uploaded_at']
        read_only_fields = ['id', 'uploaded_at']
    
    def get_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(obj.file.url)
        return None


class NoteFileSerializer(serializers.ModelSerializer):
    """便签附件"""
    url = serializers.SerializerMethodField()
    
    class Meta:
        model = NoteFile
        fields = ['id', 'name', 'file_type', 'file', 'url', 'uploaded_at']
        read_only_fields = ['id', 'uploaded_at']
    
    def get_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(obj.file.url)
        return None


# ============ 登录相关序列化器 ============

class LoginSerializer(serializers.Serializer):
    """登录请求"""
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=128, write_only=True)


class RegisterSerializer(serializers.ModelSerializer):
    """注册请求"""
    password = serializers.CharField(max_length=128, write_only=True, min_length=6)
    password_confirm = serializers.CharField(max_length=128, write_only=True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm']
        extra_kwargs = {
            'email': {'required': False, 'allow_blank': True}
        }
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError('该用户名已被注册，请使用其他用户名')
        return value
    
    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({'password_confirm': '两次密码不一致'})
        if len(data['password']) < 6:
            raise serializers.ValidationError({'password': '密码至少需要6个字符'})
        return data
    
    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        # 创建用户扩展信息和偏好设置
        UserProfile.objects.create(user=user)
        UserPreference.objects.create(user=user)
        return user


class ChangePasswordSerializer(serializers.Serializer):
    """修改密码"""
    old_password = serializers.CharField(max_length=128)
    new_password = serializers.CharField(max_length=128)
    new_password_confirm = serializers.CharField(max_length=128)
    
    def validate(self, data):
        if data['new_password'] != data['new_password_confirm']:
            raise serializers.ValidationError({'new_password_confirm': '两次密码不一致'})
        return data


class WorkbenchFileSerializer(serializers.ModelSerializer):
    """工作台文件"""
    url = serializers.SerializerMethodField()
    preview_url = serializers.SerializerMethodField()
    download_url = serializers.SerializerMethodField()
    file = serializers.FileField(write_only=True)

    class Meta:
        model = WorkbenchFile
        fields = ['id', 'name', 'original_name', 'file', 'file_size', 'content_type',
                   'file_type', 'url', 'preview_url', 'download_url', 'uploaded_at']
        read_only_fields = ['id', 'original_name', 'file_size', 'content_type', 'file_type', 'uploaded_at']
        extra_kwargs = {
            'name': {'required': False},
        }

    def get_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(obj.file.url)
        return None

    def get_preview_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(f'/api/files/preview/workbench/{obj.id}/')
        return None

    def get_download_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(f'/api/files/download/workbench/{obj.id}/')
        return None
