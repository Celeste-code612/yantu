# Django模型定义
# 存储所有需要持久化的数据

from django.db import models
from django.contrib.auth.models import User
import uuid


class UserProfile(models.Model):
    """用户扩展信息"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    school = models.CharField(max_length=100, verbose_name='学校', default='')
    college = models.CharField(max_length=100, verbose_name='学院', default='')
    major = models.CharField(max_length=100, verbose_name='专业', default='')
    grade = models.CharField(max_length=20, verbose_name='年级', default='')
    grade_detail = models.CharField(max_length=20, verbose_name='年级详情', default='')
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True, verbose_name='头像')
    
    class Meta:
        verbose_name = '用户信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f"{self.user.username} - {self.school}"


class Project(models.Model):
    """科研项目"""
    STATUS_CHOICES = [
        ('ongoing', '进行中'),
        ('completed', '已完成'),
        ('suspended', '已暂停'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    name = models.CharField(max_length=200, verbose_name='项目名称')
    desc = models.TextField(verbose_name='项目描述', blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing', verbose_name='状态')
    documents = models.JSONField(default=list, verbose_name='文档列表')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    
    class Meta:
        verbose_name = '科研项目'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class Note(models.Model):
    """灵感便签"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')
    content = models.TextField(verbose_name='便签内容')
    files = models.JSONField(default=list, verbose_name='附件列表')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    
    class Meta:
        verbose_name = '灵感便签'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return self.content[:50]


class Literature(models.Model):
    """文献资料"""
    CATEGORY_CHOICES = [
        ('machine-learning', '机器学习'),
        ('computer-vision', '计算机视觉'),
        ('natural-language', '自然语言处理'),
        ('optimization', '优化算法'),
        ('other', '其他'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='literatures')
    title = models.CharField(max_length=300, verbose_name='文献标题')
    author = models.CharField(max_length=200, verbose_name='作者')
    year = models.CharField(max_length=10, verbose_name='年份', blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='other', verbose_name='分类')
    tags = models.JSONField(default=list, verbose_name='标签')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    
    class Meta:
        verbose_name = '文献资料'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Todo(models.Model):
    """待办事项"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos')
    content = models.TextField(verbose_name='待办内容')
    start_time = models.DateTimeField(null=True, blank=True, verbose_name='开始时间')
    deadline = models.DateTimeField(null=True, blank=True, verbose_name='截止时间')
    completed = models.BooleanField(default=False, verbose_name='是否完成')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    
    class Meta:
        verbose_name = '待办事项'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return self.content[:50]


class Schedule(models.Model):
    """赛程规划"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='schedules')
    name = models.CharField(max_length=200, verbose_name='赛事名称')
    grades = models.JSONField(default=list, verbose_name='适用年级')
    description = models.TextField(verbose_name='赛事描述', blank=True)
    timeline_note = models.TextField(verbose_name='时间线备注', blank=True)
    stages = models.JSONField(default=list, verbose_name='赛程阶段')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    
    class Meta:
        verbose_name = '赛程规划'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class Favorite(models.Model):
    """收藏内容"""
    CATEGORY_CHOICES = [
        ('treasure', '科研宝藏库'),
        ('competition', '学科竞赛'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name='来源分类')
    title = models.CharField(max_length=200, verbose_name='标题')
    description = models.TextField(verbose_name='描述', blank=True)
    meta = models.JSONField(default=dict, verbose_name='元数据')
    tags = models.JSONField(default=list, verbose_name='标签')
    source_url = models.CharField(max_length=500, blank=True, verbose_name='来源链接')
    favorited_at = models.DateTimeField(auto_now_add=True, verbose_name='收藏时间')
    
    class Meta:
        verbose_name = '收藏'
        verbose_name_plural = verbose_name
        ordering = ['-favorited_at']
        unique_together = ['user', 'title']  # 防止重复收藏

    def __str__(self):
        return f"{self.user.username} - {self.title}"


class UserPreference(models.Model):
    """用户偏好设置"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='preference')
    view_mode = models.CharField(max_length=20, default='grid', verbose_name='视图模式')
    last_category = models.CharField(max_length=50, default='all', verbose_name='上次分类')
    
    class Meta:
        verbose_name = '用户偏好'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f"{self.user.username}的偏好设置"


class ProjectDocument(models.Model):
    """项目文档（用于存储实际文件）"""
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='documents_files')
    name = models.CharField(max_length=200, verbose_name='文档名称')
    doc_type = models.CharField(max_length=50, verbose_name='文档类型')
    version = models.CharField(max_length=20, verbose_name='版本号')
    file = models.FileField(upload_to='documents/%Y/%m/', verbose_name='文件')
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='上传时间')
    
    class Meta:
        verbose_name = '项目文档'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f"{self.project.name} - {self.name}"


class NoteFile(models.Model):
    """便签附件（用于存储实际图片/文件）"""
    note = models.ForeignKey(Note, on_delete=models.CASCADE, related_name='files_data')
    name = models.CharField(max_length=200, verbose_name='文件名')
    file_type = models.CharField(max_length=50, verbose_name='文件类型')
    file = models.FileField(upload_to='notes/%Y/%m/', verbose_name='文件')
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='上传时间')
    
    class Meta:
        verbose_name = '便签附件'
        verbose_name_plural = verbose_name

    def __str__(self):
        return f"{self.note.content[:30]} - {self.name}"


class WorkbenchFile(models.Model):
    """工作台通用文件存储（不依赖特定项目/便签）"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='workbench_files', null=True, blank=True)
    name = models.CharField(max_length=300, verbose_name='文件名')
    original_name = models.CharField(max_length=300, verbose_name='原始文件名')
    file = models.FileField(upload_to='workbench/%Y/%m/', verbose_name='文件')
    file_size = models.BigIntegerField(default=0, verbose_name='文件大小(bytes)')
    content_type = models.CharField(max_length=100, default='', verbose_name='MIME类型')
    file_type = models.CharField(max_length=20, default='file', verbose_name='文件分类(image/pdf/doc/other)')
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='上传时间')

    class Meta:
        verbose_name = '工作台文件'
        verbose_name_plural = verbose_name
        ordering = ['-uploaded_at']

    def __str__(self):
        return f"{self.user.username} - {self.original_name}"

    def save(self, *args, **kwargs):
        if not self.name:
            self.name = self.original_name
        if self.file and not self.file_size:
            self.file_size = self.file.size
        if self.file and not self.content_type:
            import mimetypes
            ct, _ = mimetypes.guess_type(self.original_name)
            self.content_type = ct or 'application/octet-stream'
        # 根据 MIME 类型分类
        if self.content_type.startswith('image/'):
            self.file_type = 'image'
        elif self.content_type == 'application/pdf':
            self.file_type = 'pdf'
        elif 'word' in self.content_type or 'document' in self.content_type:
            self.file_type = 'doc'
        else:
            self.file_type = 'other'
        super().save(*args, **kwargs)
