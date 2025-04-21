document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Initialize Charts
    const ordersCtx = document.getElementById('ordersChart').getContext('2d');
    const productsCtx = document.getElementById('productsChart').getContext('2d');
    
    // Orders Chart
    const ordersChart = new Chart(ordersCtx, {
        type: 'line',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Pedidos',
                data: [45, 78, 56, 89, 120, 145, 98],
                backgroundColor: 'rgba(255, 94, 0, 0.1)',
                borderColor: '#FF5E00',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Products Chart
    const productsChart = new Chart(productsCtx, {
        type: 'bar',
        data: {
            labels: ['Hambúrguer', 'Pizza', 'Refrigerante', 'Batata Frita', 'Sorvete'],
            datasets: [{
                label: 'Vendas',
                data: [120, 85, 200, 75, 50],
                backgroundColor: [
                    '#FF5E00',
                    '#00FFE0',
                    '#000000',
                    '#FF5E00',
                    '#00FFE0'
                ],
                borderColor: [
                    '#FF5E00',
                    '#00FFE0',
                    '#000000',
                    '#FF5E00',
                    '#00FFE0'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Simulate loading data
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 300);
    
    // Notification click event
    const notificationBtn = document.querySelector('.notifications');
    notificationBtn.addEventListener('click', function() {
        alert('Você tem 3 notificações não lidas!');
    });
});