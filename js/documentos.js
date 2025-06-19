function uploadFiles() {
  const input = document.getElementById('fileInput');
  const files = input.files;
  const fileList = document.getElementById('fileList');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
      <div><i class="fas fa-file-alt"></i> ${file.name}</div>
      <span>${(file.size / 1024).toFixed(2)} KB</span>
    `;

    fileList.appendChild(fileItem);
  }

  input.value = ''; // Limpiar el input
}
