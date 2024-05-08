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

    gsap.from(".about__sub-info", {
        x: -100, 
        opacity: 0, 
        duration: 10,
        scrollTrigger: {
          trigger: ".about__sub-info",
          start: "right bottom",
          end: "center center",
          scrub: true
        }
    });

    gsap.from(".online_title", {
        y: 100,
        opacity: 0, 
        duration: 10,
        scrollTrigger: {
          trigger: ".online_title",
          start: "right bottom",
          end: "center center",
          scrub: true
        }
    });

    gsap.from(".ratings__right", {
        y: 100, 
        opacity: 0, 
        duration: 5,
        scrollTrigger: {
          trigger: ".ratings__right",
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

var swiper = new Swiper(".mySwiper", {});