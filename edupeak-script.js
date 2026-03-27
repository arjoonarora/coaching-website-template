function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.3s';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}