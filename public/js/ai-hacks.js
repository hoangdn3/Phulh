document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for main CTA button
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      // Add functionality later when Learn How to Prompt page is created
      console.log("Learn How to Prompt button clicked");
    });
  }

  // Add event listeners for tool cards to make them clickable
  const toolCards = document.querySelectorAll(".tool-card");

  toolCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Get title of the clicked card
      const title = this.querySelector("h2").textContent.trim();
      console.log(`Card clicked: ${title}`);

      // Navigate to the appropriate page based on the title
      if (title.includes("Prompt Efficiency Tips")) {
        window.location.href = "/prompt-efficiency";
      } else if (title.includes("Prompt Recipes")) {
        window.location.href = "/prompt-recipes";
      } else {
        // For other cards, we'll implement navigation later
        console.log("Navigation for this card will be implemented later");
      }
    });
  });
});
