// JavaScript code to handle the count animation

function countUpStats() {
    const statNumbers = document.querySelectorAll('.stat .number');
  
    statNumbers.forEach((numberElement) => {
      const target = parseInt(numberElement.getAttribute('data-count'));
      const duration = 5000; // Animation duration in milliseconds
      const increment = Math.ceil(target / (duration / 50)); // Increment value per interval (adjust as needed)
  
      let current = 0;
  
      const timer = setInterval(() => {
        current += increment;
        numberElement.textContent = current;
  
        if (current >= target) {
          numberElement.textContent = target;
          clearInterval(timer);
        }
      }, 50); // Interval duration in milliseconds
    });
  }
  
  // Call the countUpStats function when the page is fully loaded
  window.addEventListener('load', countUpStats);
  
  



  //hero fade effect
  function fadeInOnScroll() {
    const heroContent = document.querySelector('.hero-content');
    const windowHeight = window.innerHeight;
    const contentPosition = heroContent.getBoundingClientRect().top;
  
    if (contentPosition - windowHeight <= 0) {
      heroContent.classList.add('fade-in');
    }
  }
  
  // Call the fadeInOnScroll function when the page is fully loaded
  window.addEventListener('load', fadeInOnScroll);
  
  // Call the fadeInOnScroll function when the page is scrolled
  window.addEventListener('scroll', fadeInOnScroll);
  








