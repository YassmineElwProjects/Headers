// Add this JavaScript to a file named script.js

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    // Function to close a card
    function closeCard(card) {
      card.classList.add("closed");
    }
  
    // Add an event listener to close each card after 3 seconds
    cards.forEach((card) => {
      setTimeout(() => {
        closeCard(card);
      }, 1000); // 3000 milliseconds = 3 seconds
    });
  });
  