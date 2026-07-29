// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});

// Modal Logic
function openFareDetails() {
    const modal = document.getElementById('fareModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeFareDetails() {
    const modal = document.getElementById('fareModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('fareModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}