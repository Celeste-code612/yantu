/**
 * 前端API调用模块
 * 封装所有与后端的HTTP请求
 * 
 * 使用方式：
 * import api from './api.js';
 * 
 * // 登录
 * const result = await api.auth.login(username, password);
 * 
 * // 获取收藏
 * const favorites = await api.favorites.getAll();
 */

const API_BASE_URL = '/api';  // Django后端地址

class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * 从 Cookie 读取 CSRF Token
     */
    getCsrfToken() {
        const name = 'csrftoken=';
        const cookies = document.cookie.split(';');
        for (let c of cookies) {
            c = c.trim();
            if (c.startsWith(name)) {
                return c.substring(name.length);
            }
        }
        return '';
    }

    /**
     * 确保 CSRF Cookie 存在（首次访问时主动获取）
     */
    async ensureCsrf() {
        const token = this.getCsrfToken();
        if (!token) {
            await fetch(`${this.baseUrl}/auth/csrf/`, { credentials: 'include' });
        }
    }

    /**
     * 通用请求方法
     */
    async _request(method, endpoint, body = null, extraHeaders = {}) {
        await this.ensureCsrf();
        const csrfToken = this.getCsrfToken();
        const headers = {
            'X-CSRFToken': csrfToken,
            ...extraHeaders
        };

        const options = {
            method,
            headers,
            credentials: 'include'
        };

        if (body !== null) {
            options.body = body;
        }

        const response = await fetch(`${this.baseUrl}${endpoint}`, options);
        return response.json();
    }

    /**
     * 通用GET请求
     */
    async get(endpoint, params = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = `${endpoint}${queryString ? '?' + queryString : ''}`;
        return this._request('GET', url, null, { 'Content-Type': 'application/json' });
    }

    /**
     * 通用POST请求
     */
    async post(endpoint, data = {}) {
        return this._request('POST', endpoint, JSON.stringify(data), { 'Content-Type': 'application/json' });
    }

    /**
     * 通用PUT请求
     */
    async put(endpoint, data = {}) {
        return this._request('PUT', endpoint, JSON.stringify(data), { 'Content-Type': 'application/json' });
    }

    /**
     * 通用DELETE请求
     */
    async delete(endpoint, data = {}) {
        return this._request('DELETE', endpoint, JSON.stringify(data), { 'Content-Type': 'application/json' });
    }

    /**
     * 文件上传
     */
    async uploadFile(endpoint, file, extraData = {}) {
        await this.ensureCsrf();
        const csrfToken = this.getCsrfToken();
        const formData = new FormData();
        formData.append('file', file);
        
        for (const [key, value] of Object.entries(extraData)) {
            formData.append(key, value);
        }
        
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'X-CSRFToken': csrfToken,
            },
            credentials: 'include',
            body: formData
        });
        
        return response.json();
    }
}

// 创建API实例
const api = new ApiClient(API_BASE_URL);

// ============ 认证模块 ============
api.auth = {
    /**
     * 用户登录
     * @param {string} username - 用户名
     * @param {string} password - 密码
     * @returns {Promise<{success: boolean, user?: object, message?: string}>}
     */
    async login(username, password) {
        return api.post('/auth/login/', { username, password });
    },

    /**
     * 用户注册
     * @param {string} username - 用户名
     * @param {string} email - 邮箱
     * @param {string} password - 密码
     * @param {string} passwordConfirm - 确认密码
     */
    async register(username, email, password, passwordConfirm) {
        return api.post('/auth/register/', { username, email, password, password_confirm: passwordConfirm });
    },

    /**
     * 用户登出
     */
    async logout() {
        return api.post('/auth/logout/');
    },

    /**
     * 快速自动登录（基于用户名，用于 localStorage 同步）
     */
    async autoLogin(username) {
        return api.post('/auth/auto-login/', { username });
    },

    /**
     * 获取当前用户信息
     */
    async getCurrentUser() {
        return api.get('/auth/current/');
    },

    /**
     * 修改密码
     */
    async changePassword(oldPassword, newPassword, newPasswordConfirm) {
        return api.post('/auth/change-password/', {
            old_password: oldPassword,
            new_password: newPassword,
            new_password_confirm: newPasswordConfirm
        });
    }
};

// ============ 用户信息模块 ============
api.profile = {
    /**
     * 获取用户信息
     */
    async get() {
        return api.get('/profile/');
    },

    /**
     * 更新用户信息
     * @param {object} data - { school, college, major, grade, grade_detail }
     */
    async update(data) {
        return api.put('/profile/', data);
    }
};

// ============ 科研项目模块 ============
api.projects = {
    /**
     * 获取所有项目
     * @param {string} status - 筛选状态 (ongoing/completed/all)
     */
    async getAll(status = 'all') {
        const params = status !== 'all' ? { status } : {};
        return api.get('/projects/', params);
    },

    /**
     * 获取单个项目
     */
    async get(id) {
        return api.get(`/projects/${id}/`);
    },

    /**
     * 创建项目
     */
    async create(data) {
        return api.post('/projects/', data);
    },

    /**
     * 更新项目
     */
    async update(id, data) {
        return api.put(`/projects/${id}/`, data);
    },

    /**
     * 删除项目
     */
    async delete(id) {
        return api.delete(`/projects/${id}/`);
    },

    /**
     * 上传项目文档
     */
    async uploadDocument(projectId, file, docType = 'other', version = 'V1.0') {
        return api.uploadFile(`/projects/${projectId}/add_document/`, file, {
            doc_type: docType,
            version: version
        });
    }
};

// ============ 灵感便签模块 ============
api.notes = {
    /**
     * 获取所有便签
     * @param {string} search - 搜索关键词
     */
    async getAll(search = '') {
        const params = search ? { search } : {};
        return api.get('/notes/', params);
    },

    /**
     * 获取单个便签
     */
    async get(id) {
        return api.get(`/notes/${id}/`);
    },

    /**
     * 创建便签
     */
    async create(data) {
        return api.post('/notes/', data);
    },

    /**
     * 更新便签
     */
    async update(id, data) {
        return api.put(`/notes/${id}/`, data);
    },

    /**
     * 删除便签
     */
    async delete(id) {
        return api.delete(`/notes/${id}/`);
    },

    /**
     * 上传便签附件
     */
    async uploadFile(noteId, file) {
        return api.uploadFile(`/notes/${noteId}/add_file/`, file);
    }
};

// ============ 文献资料模块 ============
api.literature = {
    /**
     * 获取所有文献
     * @param {string} category - 分类
     * @param {string} search - 搜索关键词
     */
    async getAll(category = 'all', search = '') {
        const params = {};
        if (category !== 'all') params.category = category;
        if (search) params.search = search;
        return api.get('/literature/', params);
    },

    /**
     * 获取单个文献
     */
    async get(id) {
        return api.get(`/literature/${id}/`);
    },

    /**
     * 创建文献
     */
    async create(data) {
        return api.post('/literature/', data);
    },

    /**
     * 更新文献
     */
    async update(id, data) {
        return api.put(`/literature/${id}/`, data);
    },

    /**
     * 删除文献
     */
    async delete(id) {
        return api.delete(`/literature/${id}/`);
    }
};

// ============ 待办事项模块 ============
api.todos = {
    /**
     * 获取所有待办
     * @param {boolean} completed - 筛选完成状态
     */
    async getAll(completed = null) {
        const params = completed !== null ? { completed } : {};
        return api.get('/todos/', params);
    },

    /**
     * 创建待办
     */
    async create(data) {
        return api.post('/todos/', data);
    },

    /**
     * 更新待办
     */
    async update(id, data) {
        return api.put(`/todos/${id}/`, data);
    },

    /**
     * 删除待办
     */
    async delete(id) {
        return api.delete(`/todos/${id}/`);
    },

    /**
     * 切换完成状态
     */
    async toggle(id) {
        return api.post('/todos/toggle/', { id });
    }
};

// ============ 赛程规划模块 ============
api.schedules = {
    /**
     * 获取所有赛程
     */
    async getAll() {
        return api.get('/schedules/');
    },

    /**
     * 创建赛程
     */
    async create(data) {
        return api.post('/schedules/', data);
    },

    /**
     * 更新赛程
     */
    async update(id, data) {
        return api.put(`/schedules/${id}/`, data);
    },

    /**
     * 删除赛程
     */
    async delete(id) {
        return api.delete(`/schedules/${id}/`);
    }
};

// ============ 收藏模块 ============
api.favorites = {
    /**
     * 获取所有收藏
     * @param {string} category - 分类 (treasure/competition/all)
     */
    async getAll(category = 'all') {
        const params = category !== 'all' ? { category } : {};
        return api.get('/favorites/', params);
    },

    /**
     * 添加收藏
     */
    async add(data) {
        return api.post('/favorites/', data);
    },

    /**
     * 删除收藏
     */
    async remove(id) {
        return api.delete(`/favorites/${id}/`);
    },

    /**
     * 检查是否已收藏
     */
    async check(title) {
        return api.get('/favorites/check/', { title });
    }
};

// ============ 用户偏好模块 ============
api.preferences = {
    /**
     * 获取偏好设置
     */
    async get() {
        return api.get('/preferences/');
    },

    /**
     * 更新偏好设置
     */
    async update(data) {
        return api.put('/preferences/', data);
    }
};

// ============ 仪表盘模块 ============
api.dashboard = {
    /**
     * 获取仪表盘数据
     */
    async getData() {
        return api.get('/dashboard/');
    }
};

// ============ 文件上传模块 ============
api.upload = {
    /**
     * 上传文件到项目
     */
    async toProject(projectId, file, docType, version) {
        return api.uploadFile(`/upload/project/${projectId}/`, file, {
            doc_type: docType,
            version: version
        });
    },

    /**
     * 上传文件到便签
     */
    async toNote(noteId, file) {
        return api.uploadFile(`/upload/note/${noteId}/`, file);
    }
};

// 导出API实例
export default api;
