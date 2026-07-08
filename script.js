const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);

    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.innerHTML = sender === 'bot'
    ? '<i class="bi bi-robot"></i>'
    : '<i class="bi bi-person-fill"></i>';

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
        return "Hi there!  How can I assist you today?";
    } else if (msg.includes('name')) {
        return "I'm your friendly chatbot assistant 🤖";
    } else if (msg.includes('joke')) {
        return "😂 Why did the computer get cold? Because it forgot to close its Windows!";
    } else if (msg.includes('help')) {
        return "Sure! You can ask me about jokes, greetings, or my name!";
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