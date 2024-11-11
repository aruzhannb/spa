// Keyboard Navigation
const menuItems = document.querySelectorAll('#nav-menu a');
let currentIndex = 0;
menuItems[currentIndex].focus();

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % menuItems.length;
        menuItems[currentIndex].focus();
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[currentIndex].focus();
    }
});

function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme', !isDarkTheme);
    
    // Сохранение текущей темы в localStorage
    const currentTheme = isDarkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', currentTheme);
}

// Применение сохраненной темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    } else {
        document.body.classList.add('light-theme');
    }
});
