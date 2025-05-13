document.addEventListener("DOMContentLoaded", function () {
  // Initialize recipe cards
  const recipeCards = document.querySelectorAll(".recipe-card");
  const viewButtons = document.querySelectorAll(".view-recipe-btn");

  // Add hover effects to recipe cards
  recipeCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Handle view recipe button clicks
  viewButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Get recipe title
      const recipeTitle =
        this.closest(".recipe-card").querySelector("h3").textContent;

      // Show alert for now (in future this would navigate to full recipe)
      alert(`Full recipe for "${recipeTitle}" will be available soon!`);
    });
  });

  // Add subtle animation to recipe cards on page load
  recipeCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 * index);
  });

  // Add styling for recipe cards based on their tag type
  recipeCards.forEach((card) => {
    const tag = card.querySelector(".tag");
    const viewButton = card.querySelector(".view-recipe-btn");

    if (tag) {
      if (tag.classList.contains("career-tag")) {
        viewButton.style.backgroundColor = "var(--career-color)";
      } else if (tag.classList.contains("academic-tag")) {
        viewButton.style.backgroundColor = "var(--academic-color)";
      } else if (tag.classList.contains("communication-tag")) {
        viewButton.style.backgroundColor = "var(--communication-color)";
      } else if (tag.classList.contains("branding-tag")) {
        viewButton.style.backgroundColor = "var(--branding-color)";
      }
    }
  });
});
