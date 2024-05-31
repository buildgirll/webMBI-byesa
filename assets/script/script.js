document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav a');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    //nav pada mobile development sehingga tidak hilang
    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('header');
        var nav = document.querySelector('nav');
      
        function checkWidth() {
          if (window.innerWidth <= 600) {
            nav.classList.add('show');
          } else {
            nav.classList.remove('show');
          }
        }
      
        window.addEventListener('resize', checkWidth);
        checkWidth();
      });
      
      
  
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img.lazy');
  
    const lazyLoad = (target) => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
  
      observer.observe(target);
    };
  
    lazyImages.forEach(lazyLoad);
  });
  