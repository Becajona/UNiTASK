const ctx = document.getElementById('taskChart').getContext('2d');

const taskChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Completadas', 'En curso', 'Pendientes'],
    datasets: [{
      label: 'Tareas',
      data: [12, 5, 8], // Simulación
      backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Resumen de Tareas'
      }
    }
  }
});
