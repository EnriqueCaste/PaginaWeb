window.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service-list li');
    services.forEach(function(service, index) {
        setTimeout(function() {
            service.style.opacity = '1';
            service.style.transition = 'opacity 2s';
        }, index * 200);
    });
});

