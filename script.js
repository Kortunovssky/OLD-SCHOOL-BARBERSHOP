// Smooth scroll for "НАЙТИ СВОЕГО БАРБЕРА" and "ЗАПИСАТЬСЯ" buttons
document.querySelectorAll('.red-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Buttons that should scroll to contact
      const scrollToContact = [
        'НАЙТИ СВОЕГО БАРБЕРА',
        'ЗАПИСАТЬСЯ'
      ];
      if (scrollToContact.includes(this.textContent.trim())) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Спасибо! Мы скоро с вами свяжемся.');
      contactForm.reset();
    });
  }
