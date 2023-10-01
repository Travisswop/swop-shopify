// Get references to the burger and cross buttons and the navigation menu
const burgerButton = document.querySelector(".burger-button");
const crossButton = document.querySelector(".cross-button");
const navMenu = document.querySelector("#navMenu");
const navOutside = document.querySelector(".nav-outside");

// Function to open the navigation menu
function openNavMenu() {
  navMenu.style.display = "block";
  burgerButton.style.display = "none";
  crossButton.style.display = "block";
  navOutside.style.boxShadow = "none";
  navOutside.style.borderBottomLeftRadius = "0px";
  navOutside.style.borderBottomRightRadius = "0px";
}

// Function to close the navigation menu
function closeNavMenu() {
  navMenu.style.display = "none";
  burgerButton.style.display = "block";
  crossButton.style.display = "none";
  navOutside.style.boxShadow = "5px 5px 5px 0px rgb(0 0 0 / 10%)";
  navOutside.style.borderBottomLeftRadius = "15px";
  navOutside.style.borderBottomRightRadius = "15px";
}

// Add click event listeners to the burger and cross buttons
burgerButton.addEventListener("click", openNavMenu);
crossButton.addEventListener("click", closeNavMenu);
