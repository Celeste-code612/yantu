// ========== AI 对话助手 - 通用浮动聊天组件 ==========
// 页面通过 window.CHAT_CONTEXT 注入数据和配置：
//   window.CHAT_CONTEXT = { title, welcome, prompts, dataLabel, data };
// 不设置则为通用问答模式（可回答一切）

(function() {
    'use strict';

    var CONFIG = {
        apiEndpoint: '/api/ai/chat/',
        model: 'deepseek-v4-flash'
    };

    // ── 注入 CSS ──
    var css = '\
.chat-bubble-btn{position:fixed;bottom:28px;right:28px;z-index:9999;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(79,70,229,0.4);display:flex;align-items:center;justify-content:center;font-size:26px;transition:all .3s cubic-bezier(0.4,0,0.2,1);animation:chatPulse 2s infinite;}\
.chat-bubble-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(79,70,229,0.55);animation:none;}\
.chat-bubble-btn.active{background:linear-gradient(135deg,#ef4444,#f87171);animation:none;}\
@keyframes chatPulse{0%,100%{box-shadow:0 4px 20px rgba(79,70,229,0.4)}50%{box-shadow:0 4px 32px rgba(79,70,229,0.7)}}\
.chat-badge{position:absolute;top:-4px;right:-4px;width:20px;height:20px;border-radius:50%;background:#ef4444;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;}\
.chat-panel{position:fixed;bottom:100px;right:28px;z-index:9999;width:400px;height:560px;max-height:calc(100vh - 140px);background:#fff;border-radius:12px;box-shadow:0 12px 48px rgba(0,0,0,0.15);border:1px solid #e2e8f0;display:flex;flex-direction:column;transform-origin:bottom right;transition:all .3s cubic-bezier(0.4,0,0.2,1);}\
.chat-panel.hidden{opacity:0;transform:scale(0.9) translateY(20px);pointer-events:none;}\
.chat-header{padding:16px 20px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}\
.chat-header-left{display:flex;align-items:center;gap:10px;}\
.chat-avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#818cf8);display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;}\
.chat-header-title{font-weight:600;font-size:15px;color:#2c3e50;}\
.chat-header-sub{font-size:11px;color:#9ca3af;}\
.chat-header-actions{display:flex;gap:6px;}\
.chat-hdr-btn{width:30px;height:30px;border-radius:50%;border:none;background:transparent;cursor:pointer;font-size:14px;color:#9ca3af;transition:all .2s;display:flex;align-items:center;justify-content:center;}\
.chat-hdr-btn:hover{background:#e8f0f5;color:#2c3e50;}\
.chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;scroll-behavior:smooth;}\
.chat-messages::-webkit-scrollbar{width:4px;}\
.chat-messages::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:2px;}\
.chat-msg{display:flex;gap:10px;max-width:88%;animation:chatMsgIn .3s ease;}\
@keyframes chatMsgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}\
.chat-msg.user{align-self:flex-end;flex-direction:row-reverse;}\
.chat-msg.assistant{align-self:flex-start;}\
.chat-msg-avatar{width:30px;height:30px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;}\
.chat-msg.user .chat-msg-avatar{background:#64748b;color:#fff;}\
.chat-msg.assistant .chat-msg-avatar{background:#e0e7ff;color:#4f46e5;}\
.chat-msg-bubble{padding:10px 14px;border-radius:16px;font-size:13px;line-height:1.6;color:#2c3e50;word-break:break-word;}\
.chat-msg.user .chat-msg-bubble{background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;border-bottom-right-radius:4px;}\
.chat-msg.assistant .chat-msg-bubble{background:#e8f0f5;border-bottom-left-radius:4px;}\
.chat-msg-bubble p{margin:0 0 6px 0;}\
.chat-msg-bubble p:last-child{margin-bottom:0;}\
.chat-msg-bubble ul,.chat-msg-bubble ol{margin:6px 0;padding-left:18px;}\
.chat-msg-bubble li{margin-bottom:3px;}\
.chat-msg-bubble strong{color:#2d5a7b;}\
.chat-msg.user .chat-msg-bubble strong{color:#fef08a;}\
.chat-msg-bubble code{font-family:monospace;font-size:11px;padding:1px 5px;background:rgba(0,0,0,0.08);border-radius:3px;}\
.chat-msg.user .chat-msg-bubble code{background:rgba(255,255,255,0.2);}\
.quick-card{display:block;margin:6px 0;padding:8px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:6px;cursor:pointer;transition:all .2s;font-size:12px;}\
.chat-msg.user .quick-card{background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.2);color:#fff;}\
.quick-card:hover{border-color:#4f46e5;background:#f8faff;}\
.chat-msg.user .quick-card:hover{border-color:rgba(255,255,255,0.5);background:rgba(255,255,255,0.18);}\
.quick-card-name{font-weight:600;}\
.quick-card-meta{font-size:11px;color:#9ca3af;}\
.chat-msg.user .quick-card-meta{color:rgba(255,255,255,0.7);}\
.chat-typing{display:flex;align-items:center;gap:6px;padding:4px 14px;align-self:flex-start;}\
.chat-typing-dot{width:7px;height:7px;border-radius:50%;background:#9ca3af;animation:chatTypingBounce 1.4s infinite;}\
.chat-typing-dot:nth-child(2){animation-delay:0.2s;}\
.chat-typing-dot:nth-child(3){animation-delay:0.4s;}\
@keyframes chatTypingBounce{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-6px);opacity:1}}\
.chat-input-area{padding:12px 16px;border-top:1px solid #e2e8f0;display:flex;gap:8px;align-items:flex-end;flex-shrink:0;}\
.chat-input{flex:1;resize:none;padding:10px 14px;border:1px solid #e2e8f0;border-radius:20px;font-size:13px;line-height:1.4;outline:none;max-height:100px;transition:all .2s;background:#f8fafc;font-family:inherit;}\
.chat-input:focus{border-color:#6366f1;box-shadow:0 0 0 2px rgba(99,102,241,0.1);}\
.chat-send-btn{width:38px;height:38px;border-radius:50%;border:none;background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;cursor:pointer;font-size:16px;flex-shrink:0;transition:all .2s;display:flex;align-items:center;justify-content:center;}\
.chat-send-btn:hover{opacity:0.9;transform:scale(1.05);}\
.chat-send-btn:disabled{opacity:0.4;cursor:not-allowed;transform:none;}\
.chat-welcome{text-align:center;padding:20px 8px;color:#9ca3af;}\
.chat-welcome-icon{font-size:40px;margin-bottom:10px;}\
.chat-welcome-text{font-size:13px;margin-bottom:12px;}\
.chat-quick-prompts{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;}\
.chat-quick-prompt{padding:6px 12px;font-size:11px;border-radius:16px;border:1px solid #e2e8f0;background:#fff;cursor:pointer;transition:all .2s;color:#6b7c8a;white-space:nowrap;}\
.chat-quick-prompt:hover{border-color:#6366f1;color:#4f46e5;background:#f5f3ff;}\
@media(max-width:480px){.chat-panel{width:calc(100vw - 24px);right:12px;bottom:90px;height:480px;}.chat-bubble-btn{bottom:16px;right:16px;}}\
';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // ── 注入 HTML ──
    var html = '\
<button class="chat-bubble-btn" id="chatBubbleBtn" title="AI助手">💬<span class="chat-badge" id="chatUnreadBadge" style="display:none;"></span></button>\
<div class="chat-panel hidden" id="chatPanel">\
    <div class="chat-header">\
        <div class="chat-header-left">\
            <div class="chat-avatar">🤖</div>\
            <div>\
                <div class="chat-header-title" id="chatTitle">AI 助手</div>\
                <div class="chat-header-sub">DeepSeek · 在线</div>\
            </div>\
        </div>\
        <div class="chat-header-actions">\
            <button class="chat-hdr-btn" id="chatClearBtn" title="清空对话">🗑</button>\
            <button class="chat-hdr-btn" id="chatCloseBtn" title="关闭">✕</button>\
        </div>\
    </div>\
    <div class="chat-messages" id="chatMessages">\
        <div class="chat-welcome" id="chatWelcome"></div>\
    </div>\
    <div class="chat-input-area">\
        <textarea class="chat-input" id="chatInput" rows="1" placeholder="输入你的问题..."></textarea>\
        <button class="chat-send-btn" id="chatSendBtn" title="发送">➤</button>\
    </div>\
</div>';
    var div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);

    // ── 读取页面上下文 ──
    var ctx = window.CHAT_CONTEXT || {};
    var pageTitle = ctx.title || 'AI 助手';
    var welcomeText = ctx.welcome || '你好！我是 AI 科研助手，<br>可以帮你解答各种问题。<br>直接告诉我你的需求吧～';
    var quickPrompts = ctx.prompts || [];
    var dataLabel = ctx.dataLabel || '';
    var injectedData = ctx.data || null;

    // ── 更新 UI ──
    document.getElementById('chatTitle').textContent = pageTitle;
    var welcomeEl = document.getElementById('chatWelcome');
    welcomeEl.innerHTML = '<div class="chat-welcome-icon">🤖</div><div class="chat-welcome-text">' + welcomeText + '</div><div class="chat-quick-prompts">' + quickPrompts.map(function(p) { return '<span class="chat-quick-prompt">' + p + '</span>'; }).join('') + '</div>';

    // ── 构建系统提示词 ──
    function buildSystemPrompt() {
        var base = '你是"' + pageTitle + '"，运行在"科研工作台"平台中。\n\n';

        // 如果有数据注入，把数据放进去让 AI 能精确推荐
        if (injectedData && injectedData.length > 0) {
            base += '## 你可用的' + dataLabel + '数据（从页面实时加载）\n\n';
            base += '以下是系统中所有' + dataLabel + '的列表（JSON格式）：\n\n';
            base += JSON.stringify(injectedData);
            base += '\n\n';
        }

        base += '## 你的职责\n';
        if (injectedData && injectedData.length > 0) {
            base += '1. 根据用户需求，从上述' + dataLabel + '列表中智能匹配推荐，必须给出具体的' + dataLabel + '名称\n';
            base += '2. 帮助用户按维度筛选和对比' + dataLabel + '\n';
            base += '3. 回答关于' + dataLabel + '的各种问题\n';
        } else {
            base += '1. 根据用户需求提供帮助和建议\n';
            base += '2. 回答科研、学习、技术等各方面问题\n';
        }
        base += '\n## 回复要求\n';
        base += '- 推荐时用编号列表，具体名称用**加粗**\n';
        base += '- 每个推荐简要说明理由\n';
        base += '- 用户需求不明确时主动追问\n';
        base += '- 回复简洁有实质内容\n\n';
        base += '当前日期: 2026年5月18日';
        return base;
    }

    var CHAT_SYSTEM_PROMPT = buildSystemPrompt();

    // ── 状态 ──
    var isChatOpen = false;
    var isChatLoading = false;
    var chatHistory = [];

    // ── Toast ──
    function toast(msg) {
        var t = document.getElementById('chatToast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'chatToast';
            t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#2d5a7b;color:#fff;padding:10px 18px;border-radius:40px;font-size:13px;z-index:99999;opacity:0;transform:translateY(10px);transition:all .2s;pointer-events:none;';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        t.style.transform = 'translateY(0)';
        clearTimeout(t._timeout);
        t._timeout = setTimeout(function() { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; }, 2000);
    }

    // ── 事件绑定 ──
    document.getElementById('chatBubbleBtn').addEventListener('click', toggleChat);
    document.getElementById('chatCloseBtn').addEventListener('click', toggleChat);
    document.getElementById('chatClearBtn').addEventListener('click', clearChat);
    document.getElementById('chatSendBtn').addEventListener('click', sendMessage);
    document.getElementById('chatInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    document.getElementById('chatInput').addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });
    welcomeEl.addEventListener('click', function(e) {
        if (e.target.classList.contains('chat-quick-prompt')) {
            document.getElementById('chatInput').value = e.target.textContent.trim();
            sendMessage();
        }
    });

    // ── 核心函数 ──
    function toggleChat() {
        isChatOpen = !isChatOpen;
        var panel = document.getElementById('chatPanel');
        var btn = document.getElementById('chatBubbleBtn');
        var badge = document.getElementById('chatUnreadBadge');
        if (isChatOpen) {
            panel.classList.remove('hidden');
            btn.classList.add('active');
            btn.innerHTML = '✕';
            badge.style.display = 'none';
            document.getElementById('chatInput').focus();
        } else {
            panel.classList.add('hidden');
            btn.classList.remove('active');
            btn.innerHTML = '💬';
        }
    }

    function clearChat() {
        chatHistory = [];
        var container = document.getElementById('chatMessages');
        container.innerHTML = '';
        var clone = welcomeEl.cloneNode(true);
        clone.id = '';
        container.appendChild(clone);
        clone.addEventListener('click', function(e) {
            if (e.target.classList.contains('chat-quick-prompt')) {
                document.getElementById('chatInput').value = e.target.textContent.trim();
                sendMessage();
            }
        });
        toast('对话已清空');
    }

    function addMessage(role, content) {
        var container = document.getElementById('chatMessages');
        var welcome = container.querySelector('.chat-welcome');
        if (welcome) welcome.remove();
        var avatarIcon = role === 'user' ? '🎓' : '🤖';
        var msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg ' + role;
        msgDiv.innerHTML = '<div class="chat-msg-avatar">' + avatarIcon + '</div><div class="chat-msg-bubble">' + formatContent(content) + '</div>';
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
        return msgDiv;
    }

    function addTyping() {
        var container = document.getElementById('chatMessages');
        var typing = document.createElement('div');
        typing.className = 'chat-typing';
        typing.id = 'chatTyping';
        typing.innerHTML = '<div class="chat-msg-avatar" style="background:#e0e7ff;color:#4f46e5;">🤖</div><div class="chat-typing-dot"></div><div class="chat-typing-dot"></div><div class="chat-typing-dot"></div>';
        container.appendChild(typing);
        container.scrollTop = container.scrollHeight;
    }

    function removeTyping() {
        var t = document.getElementById('chatTyping');
        if (t) t.remove();
    }

    function formatContent(text) {
        var html = text;
        html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        html = html.replace(/【(.+?)】/g, function(m, name) {
            return '<span class="quick-card"><span class="quick-card-name">📌 ' + name + '</span></span>';
        });
        var parts = html.split('\n\n');
        html = parts.map(function(p) {
            var lines = p.split('\n');
            if (lines.some(function(l) { return /^\s*-\s/.test(l); })) {
                var items = lines.filter(function(l) { return /^\s*-\s/.test(l); }).map(function(l) { return l.replace(/^\s*-\s*/, ''); });
                return '<ul>' + items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
            }
            if (lines.some(function(l) { return /^\s*\d+[.、]\s/.test(l); })) {
                var items2 = lines.filter(function(l) { return /^\s*\d+[.、]\s/.test(l); }).map(function(l) { return l.replace(/^\s*\d+[.、]\s*/, ''); });
                return '<ol>' + items2.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ol>';
            }
            return '<p>' + lines.join('<br>') + '</p>';
        }).join('');
        return html;
    }

    async function sendMessage() {
        if (isChatLoading) return;
        var input = document.getElementById('chatInput');
        var text = input.value.trim();
        if (!text) return;

        addMessage('user', text);
        chatHistory.push({ role: 'user', content: text });
        input.value = '';
        input.style.height = 'auto';

        isChatLoading = true;
        document.getElementById('chatSendBtn').disabled = true;
        addTyping();

        try {
            var messages = [
                { role: 'system', content: CHAT_SYSTEM_PROMPT },
                ...chatHistory.slice(-10)
            ];

            var response = await fetch(CONFIG.apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: CONFIG.model,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 2048
                })
            });

            if (!response.ok) {
                var errText = await response.text();
                throw new Error('API 请求失败 (' + response.status + '): ' + errText.substring(0, 200));
            }

            var data = await response.json();
            var reply = data.choices[0].message.content;
            removeTyping();
            addMessage('assistant', reply);
            chatHistory.push({ role: 'assistant', content: reply });

        } catch (err) {
            console.error('AI 请求失败:', err);
            removeTyping();
            addMessage('assistant', '抱歉，请求遇到了问题 😥\n\n' + err.message + '\n\n请检查网络连接或 API 配置后重试。');
        }

        isChatLoading = false;
        document.getElementById('chatSendBtn').disabled = false;
        document.getElementById('chatInput').focus();
    }

})();
