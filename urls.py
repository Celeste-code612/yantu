"""
URL configuration for research_archive project.
研RUC科研管理平台主路由
"""

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import RedirectView, TemplateView
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.static import serve
import os

# 装饰 TemplateView 确保 CSRF cookie 被设置
def csrf_template_view(template_name):
    view = TemplateView.as_view(template_name=template_name)
    return ensure_csrf_cookie(view)

urlpatterns = [
    # Django管理后台
    path('admin/', admin.site.urls),

    # API接口
    path('api/', include('backend.api_urls')),

    # 前端页面 (使用 ensure_csrf_cookie 确保 CSRF cookie 可用)
    path('', ensure_csrf_cookie(RedirectView.as_view(url='/index.html', permanent=False))),
    path('index.html', csrf_template_view('index.html')),
    path('workspace.html', csrf_template_view('workspace.html')),
    path('treasure.html', csrf_template_view('treasure.html')),
    path('favorites.html', csrf_template_view('favorites.html')),
    path('competition.html', csrf_template_view('competition.html')),
    path('功能介绍.html', csrf_template_view('功能介绍.html')),
    path('关于我们.html', csrf_template_view('关于我们.html')),
]

# 开发环境提供静态文件和媒体文件
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0] if settings.STATICFILES_DIRS else settings.STATIC_ROOT)

# 提供项目根目录下的静态文件（如 competition_data.js, chat-widget.js, *.png 等）
# 这些文件不在 /static/ 下，但被 HTML 页面直接引用
urlpatterns += [
    re_path(r'^(?P<path>[\w\-\/.]+\.(?:js|css|png|jpg|jpeg|gif|svg|ico|pdf|woff2?|ttf|eot))$',
        serve, {'document_root': str(settings.BASE_DIR)}),
]

