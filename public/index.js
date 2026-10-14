document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".about__info-right img", {
      x: 100, 
      opacity: 0, 
      scrollTrigger: {
        trigger: ".about__info-right",

        scrub: true
      }
    });
    
    gsap.from(".online_title", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: ".online_title", 
          start: "top bottom", 
          end: "center center",
          scrub: true
        }
    });
  });

const navbarToggle = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar_nav');

function toggleNavbarAndSidebar() {
    navbarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

navbarToggle.addEventListener('click', toggleNavbarAndSidebar);