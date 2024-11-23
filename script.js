// Kode asli
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

    // Batasan scroll
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > maxScroll - window.innerHeight) {
        window.scrollTo(0, maxScroll - window.innerHeight);
    }
});

// Kode baru
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adjust the scroll position to account for the fixed header
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 80; // Adjust to account for header height
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
