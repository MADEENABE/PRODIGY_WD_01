window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #ff7e5f, #feb47b)';
    }
});

document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

