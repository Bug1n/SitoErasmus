function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("open");
    console.log("Menu toggled");
}

function closeMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
    }
}

// ================ NAVBAR SCROLL BEHAVIOR ================ 
let lastScrollTop = 0;
let navbar = null;

function initScrollBehavior() {
    navbar = document.querySelector('header');
    if (!navbar) return;

    // Aggiungi classe per transizione smooth
    navbar.style.transition = 'transform 0.3s ease-in-out';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.zIndex = '1000';
}

function handleScroll() {
    if (!navbar) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se siamo all'inizio della pagina, mostra sempre la navbar
    if (scrollTop <= 50) {
        navbar.style.transform = 'translateY(0)';
        lastScrollTop = scrollTop;
        return;
    }

    // Se stiamo scorrendo verso il basso, nascondi la navbar
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.transform = 'translateY(-100%)';
    }
    // Se stiamo scorrendo verso l'alto, mostra la navbar
    else if (scrollTop < lastScrollTop) {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
}

// Inizializza quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function () {
    initScrollBehavior();

    // Throttle per performance
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Assicura che la navbar sia visibile quando il menu è aperto
document.addEventListener('click', function (event) {
    if (event.target.closest('.hamburger')) {
        if (navbar) {
            navbar.style.transform = 'translateY(0)';
        }
    }
});