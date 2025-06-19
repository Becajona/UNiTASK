const taskList = document.getElementById('taskList');

function addTask() {
  const title = document.getElementById('taskTitle').value;
  const status = document.getElementById('taskStatus').value;

  if (title.trim() === "") {
    alert("Escribe un título válido.");
    return;
  }

  const task = document.createElement('div');
  task.className = 'task-item';
  task.innerHTML = `
    <div>
      <strong>${title}</strong><br>
      <small>Estado: ${status}</small>
    </div>
    <button onclick="markComplete(this)">✔ Completar</button>
  `;
  taskList.appendChild(task);

  // Limpiar campos
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskStatus').value = 'Pendiente';
}

function markComplete(button) {
  const task = button.parentElement;
  task.classList.add('completed');
  button.remove();
}
