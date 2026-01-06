let userIdentity = "";
// 卡通头像路径（直接用在线图片，无需本地保存）
const teacherAvatar = "https://img.icons8.com/fluency/96/000000/teacher-male.png";
const studentAvatar = "https://img.icons8.com/fluency/96/000000/student-male.png";

// 确认身份
function confirmIdentity() {
    const inputVal = document.getElementById("identityInput").value.trim();
    const identityPage = document.getElementById("identityPage");
    const chatPage = document.getElementById("chatPage");
    const identityText = document.getElementById("identityText");
    const headerAvatar = document.getElementById("headerAvatar");

    if (inputVal === "1") {
        userIdentity = "teacher";
        identityText.innerText = "我是实习老师";
        headerAvatar.src = teacherAvatar;
        headerAvatar.alt = "老师头像";
    } else if (inputVal === "2") {
        userIdentity = "student";
        identityText.innerText = "我是学生";
        headerAvatar.src = studentAvatar;
        headerAvatar.alt = "学生头像";
    } else {
        alert("请输入 1 或 2 选择身份！");
        return;
    }

    identityPage.style.display = "none";
    chatPage.style.display = "block";
}

// 手动发送消息
function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();
    const chatMessages = document.getElementById("chatMessages");

    if (!messageText) return;

    // 获取当前时间
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

    // 创建消息元素
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${userIdentity}`;
    messageDiv.innerHTML = `
        <img src="${userIdentity === "teacher" ? teacherAvatar : studentAvatar}" alt="${userIdentity} avatar" class="message-avatar">
        <div class="message-content">
            <div class="message-bubble">${messageText}</div>
            <div class="message-time">${timeStr}</div>
        </div>
    `;

    // 添加到聊天区并滚动到底部
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // 清空输入框
    messageInput.value = "";
}

// 回车键发送
document.getElementById("messageInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
