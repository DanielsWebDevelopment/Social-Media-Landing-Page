document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from(".about__info-right img", {
      x: 100, 
      opacity: 0, 
      duration: 10,
      scrollTrigger: {
        trigger: ".about__info-right",
        start: "right bottom",
        end: "center center",
        scrub: true
      }
    });
  });

const navbarToggle = document.getElementById('navbar-toggle');
const sidebar = document.getElementById('sidebar_nav');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});