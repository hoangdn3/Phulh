document.addEventListener("DOMContentLoaded", function () {
  // Display sample data from Google Sheet Career Tools
  const toolsData = [
    {
      name: "CV Builder with AI",
      challenge:
        "I already have experience. I need to tailor my CV to a specific job description and highlight relevant skills.",
      helps:
        "Compares your past experiences against the Job Description (JD). Identifies gaps or strengths. Generates customized bullet points for your CV that align with the JD requirements.",
      howToUse: [
        "Prepare your current experience: position titles, achievements, key skills.",
        "Copy the sample prompt below.",
        "Insert your experience + the JD you are targeting.",
        "Review and edit the generated bullet points to keep them honest and precise.",
      ],
      samplePrompt:
        "Compare the following professional experience [Paste Experience] with the job description for [Target Job Title] at [Company]. Identify matching areas and generate 5 CV bullet points that highlight relevant achievements and skills.",
      proTips: [
        "Tailor language to match company culture.",
        "Use metrics and action verbs in each bullet point.",
      ],
    },
    {
      name: "Cover Letter Generator",
      challenge:
        "I want to apply quickly, but struggle to write a cover letter that truly connects my experience with the job AND shows why I'm a good fit for this company.",
      helps:
        "Maps your past achievements to the job description, highlights your value to the team, and integrates cultural fit with the company's mission.",
      howToUse: [
        "Prepare 1–2 relevant accomplishments and a clear reason why you're interested in the company",
        "Copy the sample prompt below",
        "Paste into ChatGPT/Perplexity and customize with your info",
        "Refine the tone and style using Grammarly or similar tools",
      ],
      samplePrompt:
        "Write a 3-paragraph cover letter for a [Position] at [Company]. Highlight how my experience in [Key Skills/Role] aligns with the job description. Emphasize the value I bring to the role and why I'm excited about the company's mission or culture.",
      proTips: [
        "First paragraph = skill match.",
        "Second = value proposition.",
        "Third = cultural alignment + motivation.",
        "Keep total word count ~250–300 words.",
      ],
    },
    {
      name: "Case Interview Simulator",
      challenge:
        "I have work experience, but I struggle with consulting-style frameworks and answering cases in a structured way.",
      helps:
        "Generates tailored case questions based on your target role/industry, provides frameworks, and simulates real-time practice with feedback.",
      howToUse: [
        "Choose your target role or company.",
        "Copy the sample prompt.",
        "Paste it into ChatGPT or Perplexity.",
        "Practice under time constraints.",
        "Ask AI to critique your answer.",
      ],
      samplePrompt:
        "Generate 3 consulting-style case interview questions for a candidate applying to a [Consulting/Strategy] internship in the [Industry]. For each question, provide a basic framework to approach the case.",
      proTips: [
        "Always ask clarifying questions first.",
        "Use frameworks (Profitability Tree, Market Entry).",
        "Practice timed delivery.",
        "Record yourself and review your logic and tone.",
      ],
    },
    {
      name: "Networking Email Writer",
      challenge:
        "I want to connect with alumni or professionals, but I'm not sure how to write a professional, polite, and specific message.",
      helps:
        "Generates concise, confident, and respectful networking emails (100–150 words) with clear structure and personalized tone.",
      howToUse: [
        "Define your goal (info chat, advice, referral).",
        "Identify the recipient's background.",
        "Copy the prompt.",
        "Customize details.",
        "Edit tone to sound natural.",
      ],
      samplePrompt:
        "Write a concise and polite networking email (~120 words) to an NTU GMBA alumnus who currently works at [Company]. Mention that I'm a current GMBA student interested in [Industry/Role], and request a short 20-minute call to learn from their experience. Make it friendly, professional, and specific.",
      proTips: [
        "Start with common ground (NTU, industry).",
        "Keep the ask simple. Don't oversell.",
        "Always include a clear CTA like suggesting 2–3 possible meeting times.",
      ],
    },
  ];

  // Display data
  renderTools(toolsData);

  // Add copy functionality
  setTimeout(addCopyFunctionality, 1000);
});

// Function to render the list of tools
function renderTools(tools) {
  const container = document.getElementById("career-tools-container");

  // Clear loading indicator
  container.innerHTML = "";

  // Create content for each tool
  tools.forEach((tool) => {
    const toolElement = document.createElement("div");
    toolElement.className = "tool-item";

    // Create HTML content
    let proTipsContent = "";

    // Check if proTips is an array and display as a list if it has multiple items
    if (Array.isArray(tool.proTips) && tool.proTips.length > 1) {
      proTipsContent = `
        <ul class="pro-tip-list">
          ${tool.proTips
            .map((tip) => `<li><i class="fas fa-check-circle"></i> ${tip}</li>`)
            .join("")}
        </ul>
      `;
    } else if (Array.isArray(tool.proTips)) {
      // If there's only 1 item, display as a paragraph
      proTipsContent = `<p>${tool.proTips[0]}</p>`;
    } else if (tool.proTip) {
      // If there's a single proTip, display it
      proTipsContent = `<p>${tool.proTip}</p>`;
    }

    toolElement.innerHTML = `
      <div class="tool-header">
        <h2>${tool.name}</h2>
        <button class="toggle-btn">
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
      
      <div class="tool-content">
        <div class="tool-item-section">
          <h3><i class="fas fa-question-circle"></i> Challenge</h3>
          <div class="challenge-text">${tool.challenge}</div>
        </div>
        
        <div class="tool-item-section">
          <h3><i class="fas fa-lightbulb"></i> This tool helps you</h3>
          <p class="help-text">${tool.helps}</p>
        </div>
        
        <div class="tool-item-section">
          <h3><i class="fas fa-list-ol"></i> How to use</h3>
          <ol class="steps-list">
            ${tool.howToUse.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>
        
        <div class="tool-item-section">
          <h3><i class="fas fa-comment-dots"></i> Sample prompt</h3>
          <div class="prompt-box">
            ${tool.samplePrompt}
            <button class="copy-btn" data-prompt="${encodeURIComponent(
              tool.samplePrompt
            )}">
              <i class="fas fa-copy"></i> Copy
            </button>
          </div>
        </div>
        
        <div class="pro-tip">
          <h3><i class="fas fa-star"></i> Pro Tip</h3>
          ${proTipsContent}
        </div>
      </div>
    `;

    container.appendChild(toolElement);
  });

  // Add copy functionality
  addCopyFunctionality();

  // Add toggle functionality
  addToggleFunctionality();
}

// Add copy functionality
function addCopyFunctionality() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const prompt = decodeURIComponent(this.getAttribute("data-prompt"));

      // Copy to clipboard
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          // Change button when copy is successful
          this.innerHTML = '<i class="fas fa-check"></i> Copied!';

          // Reset button after 2 seconds
          setTimeout(() => {
            this.innerHTML = '<i class="fas fa-copy"></i> Copy';
          }, 2000);
        })
        .catch((err) => {
          console.error("Unable to copy: ", err);
          this.innerHTML = '<i class="fas fa-times"></i> Failed!';

          setTimeout(() => {
            this.innerHTML = '<i class="fas fa-copy"></i> Copy';
          }, 2000);
        });
    });
  });
}

// Add toggle functionality for expanding/collapsing tool items
function addToggleFunctionality() {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the parent tool item
      const toolItem = this.closest(".tool-item");

      // Toggle the 'collapsed' class on the tool item
      toolItem.classList.toggle("collapsed");

      // Toggle button icon
      const icon = this.querySelector("i");
      if (toolItem.classList.contains("collapsed")) {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
}
