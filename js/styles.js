// JavaScript to handle the hamburger and overlay behavior
// Select the relevant elements
const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");
// const sideMenuLinks = document.querySelectorAll(".side-menu a");

// Function to open the menu
function openMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    console.log("Opening menu.");
}

// Function to close the menu
function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    console.log("Closing menu.");
}

// Function to toggle menu visibility
function toggleMenu() {
  const isActive = sideMenu.classList.contains("active");
  if (isActive) {
      closeMenu();
  } else {
      openMenu();
  }
}

// Toggle menu when clicking the hamburger icon
hamburger.addEventListener("click", function () {
  toggleMenu();
});


// Add event listener to overlay to close the menu when clicked
overlay.addEventListener("click", function () {
  closeMenu();
});

// Toggle menu when the hamburger icon is clicked or focused
hamburger.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
  }
});

// Manage focus events to automatically close menu if focus leaves both menu and hamburger
document.addEventListener("focusin", function(event) {
  const focusedOutsideMenu = !sideMenu.contains(event.target) && !hamburger.contains(event.target);
  if (focusedOutsideMenu && sideMenu.classList.contains("active")) {
      closeMenu();
  }
});

// JavaScript to toggle collapsible sections
// document.addEventListener("DOMContentLoaded", () => {
//     const cards = document.querySelectorAll(".card");
  
//     cards.forEach((card) => {
//       const heading = card.querySelector("h3");
  
//       heading.addEventListener("click", () => {
//         card.classList.toggle("active");
//       });
//     });
//   });

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
      const heading = card.querySelector("h3");
      // Make the heading focusable
      heading.setAttribute("tabindex", "0");
      heading.setAttribute("role", "button");
      heading.setAttribute("aria-expanded", "false");

      const toggleCard = () => {
          const isActive = card.classList.toggle("active");
          heading.setAttribute("aria-expanded", isActive.toString());
      };

      // Toggle on click
      heading.addEventListener("click", toggleCard);

      // Toggle on Enter or Space key
      heading.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
              event.preventDefault(); // Prevent default scrolling behavior for Space
              toggleCard();
          }
      });
  });
});

  