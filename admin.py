from django.contrib import admin
from .models import (
    UserProfile, Project, Note, Literature,
    Todo, Schedule, Favorite, UserPreference,
    ProjectDocument, NoteFile, WorkbenchFile
)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'school', 'college', 'major', 'grade']
    search_fields = ['user__username', 'school']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'user', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['name', 'desc']

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ['content', 'user', 'created_at']
    search_fields = ['content']

@admin.register(Literature)
class LiteratureAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'category', 'user']
    list_filter = ['category', 'year']
    search_fields = ['title', 'author']

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['content', 'user', 'completed', 'deadline']
    list_filter = ['completed']
    search_fields = ['content']

@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ['name', 'user', 'created_at']
    search_fields = ['name', 'description']

@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'user', 'favorited_at']
    list_filter = ['category']
    search_fields = ['title']

@admin.register(UserPreference)
class UserPreferenceAdmin(admin.ModelAdmin):
    list_display = ['user', 'view_mode', 'last_category']

admin.site.register(ProjectDocument)
admin.site.register(NoteFile)

@admin.register(WorkbenchFile)
class WorkbenchFileAdmin(admin.ModelAdmin):
    list_display = ['id', 'original_name', 'file_type', 'file_size', 'user', 'uploaded_at']
    list_filter = ['file_type', 'uploaded_at']
    search_fields = ['original_name', 'name']
    readonly_fields = ['id', 'file_size', 'content_type']
