// ================================
// 1. Input Modality Detection (clean focus rings)
// ================================
(function () {
  let usingKeyboard = false;

  document.body.addEventListener('keydown', e => {
    if (e.key === 'Tab') usingKeyboard = true;
  });

  document.body.addEventListener('mousedown', () => usingKeyboard = false);

  document.body.addEventListener('focusin', e => {
    if (!usingKeyboard) e.target.classList.add('no-mouse-focus');
  });

  document.body.addEventListener('focusout', e => {
    e.target.classList.remove('no-mouse-focus');
  });
})();

// ================================
// 2. Swiper Initialization (Smooth + Ease-in-out, No Scroll Hijack)
// ================================
// Check if device is mobile
const isMobile = () => window.innerWidth <= 768;

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: false,
  grabCursor: true,

  // Smooth momentum scrolling
  freeMode: true,
  freeModeMomentum: true,
  freeModeMomentumVelocityRatio: 0.5,
  freeModeMomentumRatio: 0.8,

  speed: 600, // transition duration in ms

  // Touch and Mouse Support
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,

  autoplay: isMobile() ? false : {
    delay: 2500,
    disableOnInteraction: false,
  },

  keyboard: { enabled: true },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 15 },
    576: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 20 },
    992: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 30 }
  }
});

// Apply ease-in-out via CSS injection for wrapper
const style = document.createElement('style');
style.innerHTML = `
  .swiper-wrapper {
    transition-timing-function: ease-in-out !important;
  }
`;
document.head.appendChild(style);

// Pause autoplay when tab is inactive
document.addEventListener('visibilitychange', function() {
  if (document.hidden) swiper.autoplay.stop();
  else swiper.autoplay.start();
});

// Pause autoplay on hover
const swiperEl = document.querySelector('.mySwiper');
swiperEl.addEventListener('mouseenter', () => swiper.autoplay.stop());
swiperEl.addEventListener('mouseleave', () => swiper.autoplay.start());

// ================================
// 2b. Pause Autoplay on Card Image Click (Stop Swiping During Interaction)
// ================================
const cardImages = document.querySelectorAll('.card-img a.glightbox');
cardImages.forEach(link => {
  link.addEventListener('click', () => {
    swiper.autoplay.stop();
  });
});

// Resume autoplay when scrolled away from Products section
const menuSection = document.getElementById('menu');
window.addEventListener('scroll', () => {
  const rect = menuSection.getBoundingClientRect();
  const isInView = rect.top < window.innerHeight && rect.bottom > 0;
  
  // If scrolled away from Products section, resume autoplay
  if (!isInView) {
    swiper.autoplay.start();
  }
});

// ================================
// 3. Smooth Scroll for Anchor Links & Close Mobile Menu
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after clicking a link
      const menuToggle = document.getElementById('menu-toggle');
      if (menuToggle) menuToggle.checked = false;
    }
  });
});

// ================================
// 4. Scroll-Spy for Navigation Links (Improved)
// ================================
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-listing li a');
  const sections = Array.from(navLinks)
    .map(link => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  const updateActiveLink = () => {
    let currentId = sections[0].id;
    sections.forEach(section => {
      const topOffset = section.getBoundingClientRect().top;
      if (topOffset <= window.innerHeight / 3) currentId = section.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${currentId}`;
      link.classList.toggle('active', isActive);
    });
  };

  updateActiveLink();
  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('resize', updateActiveLink);
});

// ================================
// 5. Back to Top Button
// ================================
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.scrollY > 300);
    backToTopBtn.classList.toggle('hide', window.scrollY <= 300);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================
// 6. Fade-In Animation on Scroll (Reusable)
// ================================
const fadeInElements = document.querySelectorAll('.bTn');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.2 });

fadeInElements.forEach(el => observer.observe(el));

// ================================
// 7. GLightbox Initialization for Product Galleries
// ================================
document.addEventListener('DOMContentLoaded', function() {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }
});

// ================================
// 8. Teddy Image Click Handler (Stand Upright)
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const teddyImg = document.querySelector('#home .right img');
  if (teddyImg) {
    teddyImg.style.cursor = 'pointer';
    
    // Handle click on desktop
    teddyImg.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('upright');
    });
    
    // Handle touch on mobile
    teddyImg.addEventListener('touchend', function(e) {
      e.stopPropagation();
      this.classList.toggle('upright');
    }, { passive: true });
  }
});

// ================================
// 9. Contact Form Handler (Prevent Reload & Download as .txt)
// ================================
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.cnct-Form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent page reload
      
      // Get form values
      const inputs = this.querySelectorAll('input, select, textarea');
      const labels = this.querySelectorAll('label');
      
      let formData = '';
      let labelIndex = 0;
      
      inputs.forEach(input => {
        const label = labels[labelIndex];
        const labelText = label ? label.textContent.trim() : '';
        const inputValue = input.value.trim();
        
        if (inputValue) {
          formData += `${labelText}: ${inputValue}\n`;
        }
        labelIndex++;
      });
      
      // Create and download .txt file
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(formData));
      element.setAttribute('download', `contact_form_${new Date().getTime()}.txt`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      // Show success message
      alert('Message received! Your information has been downloaded as a text file.\n\nForm Data:\n\n' + formData);
      
      // Reset form
      this.reset();
    });
  }
});

// ================================
// 10. Button Event Handling (Ensure all buttons are responsive)
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Ensure all form buttons work properly on mobile
  const submitButtons = document.querySelectorAll('button[type="submit"]');
  submitButtons.forEach(button => {
    button.addEventListener('touchstart', function(e) {
      // Prevent double-tap zoom
      if (e.touches.length === 1) {
        this.style.opacity = '0.8';
      }
    }, { passive: true });
    
    button.addEventListener('touchend', function(e) {
      this.style.opacity = '1';
    }, { passive: true });

    button.addEventListener('click', function(e) {
      // Ensure click is registered
      console.log('Button clicked:', this);
    });
  });
});
