function agregarMiembro() {
  const nombre = document.getElementById('nombreMiembro').value.trim();
  const correo = document.getElementById('correoMiembro').value.trim();
  const rol = document.getElementById('rolMiembro').value;

  if (nombre === "" || correo === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const lista = document.getElementById('listaMiembros');

  const miembro = document.createElement('div');
  miembro.className = 'member-item';
  miembro.innerHTML = `
    <div>
      <strong>${nombre}</strong><br>
      <small>${correo} | ${rol}</small>
    </div>
  `;

  lista.appendChild(miembro);

  // Limpiar campos
  document.getElementById('nombreMiembro').value = '';
  document.getElementById('correoMiembro').value = '';
  document.getElementById('rolMiembro').value = 'Líder';
}

