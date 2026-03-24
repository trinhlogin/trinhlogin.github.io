document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen Logic
  const openBtn = document.getElementById('open-invite');
  const splashScreen = document.getElementById('splash-screen');
  
  if (openBtn && splashScreen) {
    openBtn.addEventListener('click', () => {
      splashScreen.classList.add('hidden');
      
      // Trigger animations for visible elements after splash disappears
      setTimeout(() => {
        handleScrollAnimations();
      }, 500);
    });
  }

  // Scroll Fade Animations using IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Play once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => observer.observe(el));
  
  // Fallback for elements already in viewport
  function handleScrollAnimations() {
     const elements = document.querySelectorAll('.fade-in-up');
     elements.forEach(el => {
       const rect = el.getBoundingClientRect();
       if (rect.top < window.innerHeight - 50) {
         el.classList.add('visible');
       }
     });
  }
});
