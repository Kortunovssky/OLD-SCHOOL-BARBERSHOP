// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Мобильное меню
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.classList.add('mobile-menu-btn');
document.querySelector('.nav').prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Ленивая загрузка для галереи
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = 1;
    });
    img.style.opacity = 0;
    img.style.transition = 'opacity 0.5s';
});
