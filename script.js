const texts = ["Digital Reality.", "Modern Interfaces.", "3D Experiences."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    function typeWriter() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];

      if (isDeleting) {
        letter = currentText.slice(0, --index);
      } else {
        letter = currentText.slice(0, ++index);
      }

      document.getElementById("typed-text").textContent = letter;

      let typeSpeed = 100;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500; 
      }

      setTimeout(typeWriter, typeSpeed);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeWriter, 500);
    });

    // 2. Intersection Observer (Smooth Scroll Reveal)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });

    // 3. Mobile Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });

    const closeNav = () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      document.body.style.overflow = 'auto';
    };

    closeMenu.addEventListener('click', closeNav);
    mobileLinks.forEach(link => link.addEventListener('click', closeNav));