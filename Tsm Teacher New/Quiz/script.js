// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Get the menu icon and navigation menu
  const menuIcon = document.querySelector(".bx-menu");
  const navMenu = document.querySelector(".bx");

  // Add event listener to the menu icon
  menuIcon.addEventListener("click", function () {
    // Toggle the display of the navigation menu
    navMenu.classList.toggle("show");
  });
});
