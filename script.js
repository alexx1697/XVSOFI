document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }

    // Confirmar asistencia
    const rsvpBtn = document.getElementById('rsvp-button');
    if (rsvpBtn) {
        rsvpBtn.addEventListener('click', function () {
            alert('¡Gracias por confirmar tu asistencia! Nos vemos en la fiesta 🎉');
        });
    }

    // Contador regresivo
    function updateCountdown() {
        const eventDate = new Date("April 5, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "¡Es el gran día!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Mostrar contenido principal después de animación
    setTimeout(function () {
        document.getElementById('save-the-date').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        // Revisar visibilidad de elementos después de mostrar
        checkVisibility();
    }, 3000);

    // Escuchar scroll para aplicar efecto fade-in
    window.addEventListener('scroll', checkVisibility);
});
