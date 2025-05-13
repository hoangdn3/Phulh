document.addEventListener("DOMContentLoaded", function () {
  // Initialize tip containers
  initTipContainers();

  // Function to initialize the tip containers with toggle functionality
  function initTipContainers() {
    const tipHeaders = document.querySelectorAll(".tip-header");

    tipHeaders.forEach((header) => {
      // Get the corresponding content
      const tipId = header.id.replace("-header", "");
      const content = document.getElementById(tipId + "-content");

      // Add click event to toggle the content visibility
      header.addEventListener("click", function () {
        // Toggle active class on content
        content.classList.toggle("active");

        // Change the expand icon
        const expandIcon = this.querySelector(".expand-icon");
        if (content.classList.contains("active")) {
          expandIcon.textContent = "−"; // Minus sign when expanded
        } else {
          expandIcon.textContent = "+"; // Plus sign when collapsed
        }
      });
    });
  }

  // Show the first tip by default
  const firstTipContent = document.getElementById("tip1-content");
  const firstTipHeader = document.getElementById("tip1-header");
  if (firstTipContent && firstTipHeader) {
    firstTipContent.classList.add("active");
    firstTipHeader.querySelector(".expand-icon").textContent = "−";
  }
});
