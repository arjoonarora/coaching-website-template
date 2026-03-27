function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}
