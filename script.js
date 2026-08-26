const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);

    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.innerHTML = sender === 'bot'
    ? '<img src="https://res.cloudinary.com/dm7n4qqox/image/upload/v1762184828/happy-robot-3d-ai-character-600nw-2464455965_skdv51.jpg" class="bot-img">'
    : '<img src="https://res.cloudinary.com/dm7n4qqox/image/upload/v1762263496/Laura_FIDigital_web_t2xt4z.png" class="user-img">';

    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = message;

    msgDiv.appendChild(icon);
    msgDiv.appendChild(text);
    chatBody.appendChild(msgDiv);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(userMessage) {
    const msg = userMessage.toLowerCase();
    if (msg.includes('hi') || msg.includes('hello')) {
        return "Hi there!  How can I assist you?";
    } else if (msg.includes('joke')) {
        return "Why do programmers prefer dark mode? Because light attracts bugs!"";
    } else if (msg.includes('good morning')) {
        return "Good morning! Have a productive day ahead";
    } else if (msg.includes('your name')) {
        return "I'm your friendly assistant!";
    } else {
        return "Sorry, I didn't understand that. Try saying 'hi' or 'tell me a joke'.";
    }
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';

    setTimeout(() => {
        const reply = botReply(message);
        addMessage(reply, 'bot');
    }, 600);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});
