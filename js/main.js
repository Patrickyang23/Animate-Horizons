document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      const heading = card.querySelector("h3");
  
      heading.addEventListener("click", () => {
        // Toggle the active class on the clicked card
        card.classList.toggle("active");
  
        // Close other cards if needed
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove("active");
          }
        });
      });
    });
  });