document.addEventListener('DOMContentLoaded', async () => {
    const components = [
        'header', 'hero', 'challenge', 'features', 'problems', 
        'how-it-works', 'benefits', 'target-audience', 'differentiation', 
        'getting-started', 'future', 'cta', 'footer'
    ];

    for (const component of components) {
        try {
            const response = await fetch(`components/${component}.html`);
            if (response.ok) {
                const html = await response.text();
                const container = document.getElementById(`${component}-container`);
                if (container) container.innerHTML = html;
            } else {
                console.error(`Failed to load ${component}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error loading ${component}:`, error);
        }
    }

    initializeScripts();
});

function initializeScripts() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (header && window.scrollY > 50) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    });

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            const icon = hamburger ? hamburger.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
