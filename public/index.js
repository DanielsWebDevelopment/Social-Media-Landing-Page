document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".about__info-right img", {
      x: 100, 
      opacity: 0, 
      // Removed 'duration: 10' as 'scrub: true' makes the animation progress
      // directly tied to scroll position, making a fixed duration less relevant
      // and potentially confusing for a scroll-driven animation.
      scrollTrigger: {
        trigger: ".about__info-right",
        // 'start: "top bottom"' means the animation begins when the top of the
        // trigger element hits the bottom of the viewport, a common entry point.
        start: "top bottom", 
        end: "center center",
        scrub: true
      }
    });
    
    gsap.from(".online_title", {
        y: 100,
        opacity: 0, 
        // Removed 'duration: 10' as 'scrub: true' makes the animation progress
        // directly tied to scroll position, making a fixed duration less relevant
        // and potentially confusing for a scroll-driven animation.
        scrollTrigger: {
          trigger: ".online_title",
          // 'start: "top bottom"' means the animation begins when the top of the
          // trigger element hits the bottom of the viewport, a common entry point.
          start: "top bottom", 
          end: "center center",
          scrub: true
        }
    });
  });

const navbarToggle = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar_nav');


// Define a named function for the click event handler
function toggleNavbarAndSidebar() {
    navbarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// Attach the named function as the event listener
navbarToggle.addEventListener('click', toggleNavbarAndSidebar);