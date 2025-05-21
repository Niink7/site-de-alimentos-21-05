// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('active');
    this.setAttribute('aria-expanded', !isExpanded);
});

// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '10px 0';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        nav.style.padding = '15px 0';
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
            menuMobile.setAttribute('aria-expanded', 'false');
        }
    });
});