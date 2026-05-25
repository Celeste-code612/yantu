"""
API 路由配置
所有 REST API 端点注册
"""
from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

# 注册所有 ViewSet
router.register(r'profile', views.UserProfileViewSet, basename='profile')
router.register(r'projects', views.ProjectViewSet, basename='project')
router.register(r'notes', views.NoteViewSet, basename='note')
router.register(r'literature', views.LiteratureViewSet, basename='literature')
router.register(r'todos', views.TodoViewSet, basename='todo')
router.register(r'schedules', views.ScheduleViewSet, basename='schedule')
router.register(r'favorites', views.FavoriteViewSet, basename='favorite')
router.register(r'preferences', views.UserPreferenceViewSet, basename='preference')
router.register(r'files', views.WorkbenchFileViewSet, basename='workbench-file')

urlpatterns = [
    # 认证相关
    path('auth/csrf/', views.get_csrf_token, name='csrf-token'),
    path('auth/login/', views.login_view, name='login'),
    path('auth/auto-login/', views.auto_login, name='auto-login'),
    path('auth/logout/', views.logout_view, name='logout'),
    path('auth/current/', views.current_user, name='current-user'),
    path('auth/register/', views.register_view, name='register'),
    path('auth/change-password/', views.change_password, name='change-password'),

    # 仪表盘
    path('dashboard/', views.dashboard_data, name='dashboard'),

    # 文件上传（通用接口）
    path('upload/<str:model_type>/<str:model_id>/', views.upload_file, name='upload-file'),

    # 文件预览/下载
    path('files/preview/<str:model_type>/<uuid:file_id>/', views.preview_file, name='preview-file'),
    path('files/download/<str:model_type>/<uuid:file_id>/', views.download_file, name='download-file'),

    # AI 代理（隐藏 API Key）
    path('ai/chat/', views.ai_chat_proxy, name='ai-chat-proxy'),
]

# 合并 Router 生成的 URL
urlpatterns += router.urls
