# Django 项目配置文件
# 请在虚拟环境中运行: pip install django djangorestframework django-cors-headers pillow

# 项目名称
PROJECT_NAME = "research_archive"

# 数据库配置 (默认使用SQLite)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# REST Framework配置
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

# CORS配置 (允许前端访问)
CORS_ALLOW_ALL_ORIGINS = True  # 生产环境应设置为False并配置白名单

# 文件上传配置
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# 登录配置
LOGIN_URL = '/api/auth/login/'
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

# 会话配置
SESSION_ENGINE = 'django.contrib.sessions.backends.db'
SESSION_COOKIE_AGE = 60 * 60 * 24 * 7  # 7天
