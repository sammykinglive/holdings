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
  

  $(document).ready(function () {
    $('.navbar-toggler').click(function () {
      $('.sidebar').toggleClass('active');
    });
  });


// scroll fnc

  function scrollToTop(event) {
    event.preventDefault(); // Prevent default link behavior
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  const scrollToTopLink = document.getElementById('scrollToTopLink');
  scrollToTopLink.addEventListener('click', scrollToTop);
  












// About Us Page scroll function


// Function to add bounce-in class to visible elements
function addBounceInClass(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('bounce-in');
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
var observer = new IntersectionObserver(addBounceInClass, {
  root: null,
  threshold: 0.2, // Adjust this threshold as needed
});

// Observe each "about" div
var aboutDivs = document.querySelectorAll('.about-div');
aboutDivs.forEach(function (div) {
  observer.observe(div);
});
