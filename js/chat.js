function sendMessage() {
  const input = document.getElementById('chatMessage');
  const message = input.value.trim();
  if (message === "") return;

  const chatWindow = document.getElementById('chatWindow');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-message user';
  msgDiv.textContent = message;

  chatWindow.appendChild(msgDiv);
  input.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
