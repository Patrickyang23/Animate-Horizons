// // Expanding card
// document.addEventListener("DOMContentLoaded", () => {
//     // Get all toggle headings
//     const toggleHeadings = document.querySelectorAll(".toggle-heading");

//     // Attach click event listener
//     toggleHeadings.forEach((heading) => {
//     heading.addEventListener("click", () => {
//     const content = heading.nextElementSibling; // Find the next sibling (the paragraph)
//     if (content) {
//         content.classList.toggle("hidden"); // Toggle the 'hidden' class
//     }
//     });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const toggleHeadings = document.querySelectorAll(".toggle-heading");
  
    toggleHeadings.forEach((heading) => {
      heading.addEventListener("click", () => {
        const content = heading.nextElementSibling; // Find associated <p>
        
        if (content) {
          content.classList.toggle("hidden"); // Toggle 'hidden' class
          
          // Dynamically adjust the compact style
          if (content.classList.contains("hidden")) {
            heading.style.width = "60%"; // Compact width when hidden
          } else {
            heading.style.width = "80%"; // Restore width when visible
          }
        }
      });
    });
  });