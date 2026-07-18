// This script waits for the entire HTML document to be fully loaded and parsed
// before executing any JavaScript. This ensures that all DOM elements are
// available for manipulation and that scripts don't try to access elements
// that haven't been created yet.
document.addEventListener("DOMContentLoaded", (event) => {
    // GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library.
    // registerPlugin(ScrollTrigger) initializes the ScrollTrigger plugin,
    // which allows GSAP animations to be controlled by the scroll position.
    // This must be called once before using ScrollTrigger.
    gsap.registerPlugin(ScrollTrigger);
  
    // Animates the image within the ".about__info-right" section.
    // 'from' animations define the starting state, animating to the element's
    // current CSS properties.
    gsap.from(".about__info-right img", {
      x: 100, // Starts 100 pixels to the right of its final position.
      opacity: 0, // Starts completely transparent.
      // The 'duration' property is intentionally omitted here because
      // 'scrub: true' ties the animation progress directly to the scrollbar.
      // A fixed duration would be overridden or made less meaningful by the scrub.
      scrollTrigger: {
        trigger: ".about__info-right", // The element that controls when the animation starts and ends.
        // 'start: "top bottom"' means the animation begins when the top edge of
        // the trigger element hits the bottom edge of the viewport. This is a
        // common pattern for "entering" animations.
        scrub: true
      }
    });
    
    // Animates the ".online_title" element.
    gsap.from(".online_title", {
        y: 100, // Starts 100 pixels below its final position.
        opacity: 0, // Starts completely transparent.
        // As with the previous animation, 'duration' is omitted due to 'scrub: true'.
        scrollTrigger: {
          trigger: ".online_title", // The element controlling this animation.
          // Animation starts when the top of ".online_title" enters the bottom of the viewport.
          start: "top bottom", 
          // Animation ends when the center of ".online_title" reaches the center of the viewport.
          end: "center center",
          // Links animation progress to scroll position for a smooth, interactive effect.
          scrub: true
        }
    });
  });

// Selects the HTML element with the ID 'navbar-toggle'. This is typically a button
// or an icon (like a hamburger menu) used to open/close the navigation sidebar.
const navbarToggle = document.getElementById('navbar-toggle');
// Selects the HTML element with the ID 'sidebar_nav'. This represents the navigation
// menu that typically slides in/out from the side of the screen.
const sidebar = document.getElementById('sidebar_nav');

// Define a named function for the click event handler
function toggleNavbarAndSidebar() {
    // Toggles the 'active' CSS class on the navbar toggle button. This class
    // typically changes the appearance of the button (e.g., rotates an icon,
    // changes background) to indicate its active state.
    navbarToggle.classList.toggle('active');
    // Toggles the 'active' CSS class on the sidebar navigation. This class
    // is responsible for making the sidebar visible or hidden, often by
    // changing its transform or opacity properties in CSS.
    sidebar.classList.toggle('active');
}

// Attach the named function as the event listener
// Attaches the 'toggleNavbarAndSidebar' function as an event listener to the
// 'navbarToggle' element. Whenever the 'navbarToggle' element is clicked,
// the 'toggleNavbarAndSidebar' function will be executed.
navbarToggle.addEventListener('click', toggleNavbarAndSidebar);