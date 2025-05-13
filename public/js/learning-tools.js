document.addEventListener("DOMContentLoaded", function () {
  // Display sample data from Google Sheet
  const toolsData = [
    {
      name: "Case Summary Assistant",
      challenge:
        "I struggle to read long cases and quickly identify what matters for class discussion or assignments.",
      helps:
        "Summarizes cases into 5 key bullet points: Background, Problem, Options, Analysis, Conclusion — like a consultant's briefing.",
      howToUse: [
        "Copy the sample prompt below.",
        "Open ChatGPT (or Perplexity).",
        "Paste in the case name where indicated.",
        "Review the result; you can ask for a SWOT expansion if needed.",
      ],
      samplePrompt:
        "Summarize the business case [Case Name] into 5 bullet points, including: Background, Problem, Options, Analysis, and Conclusion.",
      proTip:
        'Add: "Also provide a quick SWOT analysis based on the case content" for deeper insights.',
    },
    {
      name: "Executive Summary Writer",
      challenge:
        "I find it hard to write clearly and concisely under pressure, especially when summarizing projects or reports.",
      helps:
        "Drafts a 200-word executive summary using clear academic/business structure (SCQA, PIE).",
      howToUse: [
        "Prepare three key inputs: Project Topic, Main Findings, Recommendations.",
        "Copy the sample prompt below.",
        "Insert your information and generate a draft.",
        "Edit for your personal writing style and tone.",
      ],
      samplePrompt:
        "Write a 200-word Executive Summary for a project about [Topic]. Include key findings, main issues, and strategic recommendations.",
      proTip: "Use tools like Grammarly or Hemingway to polish final output.",
    },
    {
      name: "Project Brainstorming Assistant",
      challenge:
        "I often get stuck coming up with new ideas that are creative, relevant, and feasible for group projects or business plans.",
      helps:
        "Generates 5 startup or project ideas based on your target industry, each with value proposition and target user.",
      howToUse: [
        "Select the industry or topic area you're working on (e.g., Healthcare, Sustainability, FinTech).",
        "Copy the sample prompt below.",
        "Paste and receive a list of ideas with brief descriptions.",
      ],
      samplePrompt:
        "Suggest 5 startup ideas in [Industry], each described in 2–3 sentences, highlighting the core value proposition and target audience.",
      proTip:
        "Ask AI to rank the ideas by feasibility or provide go-to-market suggestions.",
    },
    {
      name: "Research Quick Guide",
      challenge:
        "I waste time searching for academic sources and often don't know what counts as credible or peer-reviewed.",
      helps:
        "Suggests 3 scholarly articles with summaries, based on your topic.",
      howToUse: [
        "Define your research topic",
        "Copy the sample prompt below",
        "Paste into AI and review the suggestions",
        "Validate using NTU Library or Google Scholar",
      ],
      samplePrompt:
        "List 3 scholarly articles published after 2022 on [Topic] and summarize each article in 2–3 sentences.",
      proTip:
        "Ask for article sources with DOI links or APA citations for easier referencing.",
    },
    {
      name: "Citation Assistant",
      challenge:
        "I haven't written academic papers in a while and don't remember how to properly cite sources across different formats.",
      helps:
        "Generates and formats citations for APA/MLA/Chicago; handles edge cases like webpages without authors, AI-generated content, or media/social sources.",
      howToUse: [
        "Choose the citation style (APA, MLA, etc.)",
        "Identify your source type (journal, book, website, AI, video, etc.)",
        "Copy the corresponding prompt",
        "Paste into AI tool and review result",
        "Double-check with ZoteroBib or your library's citation guide",
      ],
      samplePrompt: `Journal article: "Generate an APA 7 citation for the journal article '[Title]' by [Author], published in [Journal Name] in [Year], with DOI: [DOI]."
Book chapter: "Create an APA citation for the book chapter '[Chapter Title]' by [Author], in '[Book Title]', edited by [Editor], [Publisher], [Year], pages [xx–xx]."
Website (no author): "Generate an APA citation for the webpage '[Title]' from [Website Name], no author listed, retrieved on [Date]."
AI source: "How do I cite ChatGPT in APA 7 if used for brainstorming only?"
YouTube/Video: "Cite the YouTube video '[Video Title]' uploaded by [Channel Name] on [Date] in APA format."
Social Media: "Create an APA citation for a LinkedIn post by [Author] posted on [Date] with the URL: [link]."`,
      proTip:
        "Use ZoteroBib, Google Scholar, or university library citation tools to verify citation formatting. Always disclose if AI tools were used.",
    },
  ];

  // Display data
  renderTools(toolsData);

  // Add copy functionality
  setTimeout(addCopyFunctionality, 1000);
});

// Function to render the list of tools
function renderTools(tools) {
  const container = document.getElementById("learning-tools-container");

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
