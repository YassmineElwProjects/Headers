document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.toggle_btn');
    const toggleButtonIcon = document.querySelector('.toggle_btn i');
    const toggleDownMenu = document.querySelector('.dropdown_menu');
    
    toggleButton.onclick = function () {

        // Scroll to the top of the page when we click on the dropdown menu
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Add smooth scrolling behavior
        });
      

        // Toggle the class "open" on the dropdown menu
        toggleDownMenu.classList.toggle('open');
        const isOpen = toggleDownMenu.classList.contains('open');
        toggleButtonIcon.classList.remove(isOpen ? 'fa-bars' : 'fa-xmark');
        toggleButtonIcon.classList.add(isOpen ? 'fa-xmark' : 'fa-bars');
    }
});

// When cliqued on home, it scrolls to the top
// Get the link with the class "scroll-to-top"
const scrollLink = document.querySelector('.scroll-to-top');

// Add a click event listener to the link
scrollLink.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default behavior of the link
  
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Sticky navbar on scroll
const navbar = document.getElementById('myNavbar');
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
