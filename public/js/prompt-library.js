document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu mẫu cho Prompt Library
  const promptData = {
    categories: [
      {
        name: "Summarize",
        items: [
          {
            name: "Summarize a business case",
            basePrompt:
              "Summarize the business case '[Case Name]' in 5 bullet points: Background, Problem, Options, Analysis, Recommendation.",
            whenToUse: "Before a class discussion or writing case analysis.",
            outputFormat: "5 bullet points",
            tags: "#before-class #case-study #bullet-output",
            proTip:
              "Ask AI to include key data points or business models used in the case.",
          },
          {
            name: "Summarize a long article",
            basePrompt:
              "Summarize the article '[Title]' into 5 key takeaways suitable for a 2-minute class update.",
            whenToUse:
              "When prepping for class or writing a reading reflection.",
            outputFormat: "5 key takeaways",
            tags: "#reading #reflection #takeaways",
            proTip: 'Add: "Use MBA tone and highlight 1 quote if relevant."',
          },
          {
            name: "Summarize multiple viewpoints",
            basePrompt:
              "Compare and summarize 3 opposing viewpoints on [Topic] in a neutral tone with 2 bullets each.",
            whenToUse:
              "When evaluating debates, opinion pieces, or contrasting sources.",
            outputFormat: "6 bullets (3 x 2 viewpoints)",
            tags: "#compare #neutral-tone #debate",
            proTip:
              "Use this prompt to prep for classroom debates or op-ed writing.",
          },
          {
            name: "Summarize a video or talk",
            basePrompt:
              "Summarize the video '[Video Title]' in 5 sentences: Main point, key examples, tone, and takeaway message.",
            whenToUse:
              "When reviewing recorded lectures, TED Talks, or webinars.",
            outputFormat: "5-sentence paragraph",
            tags: "#video-summary #presentation #digest",
            proTip:
              "Ask AI to reformat into slide notes or a LinkedIn summary if needed.",
          },
        ],
      },
      {
        name: "Compare",
        items: [
          {
            name: "Compare two companies",
            basePrompt:
              "Compare [Company A] and [Company B] in terms of value proposition, scalability, and risks. Present in a side-by-side table.",
            whenToUse: "When evaluating competitors or benchmarking in a case.",
            outputFormat: "Side-by-side comparison table",
            tags: "#strategy #benchmarking #company-analysis",
            proTip:
              "Ask AI to bold key differences and highlight strategic implications.",
          },
          {
            name: "Compare two frameworks",
            basePrompt:
              "Compare [Framework A] and [Framework B] and explain when to use each in strategic analysis.",
            whenToUse:
              "When selecting an analysis method for a report or assignment.",
            outputFormat: "Table or 2 bullets per framework",
            tags: "#frameworks #academic #decision-making",
            proTip: "Request pros & cons per framework and use cases.",
          },
          {
            name: "Compare two market entry strategies",
            basePrompt:
              "Compare market entry strategies (e.g., Joint Venture vs Licensing) for [Target Market] across cost, speed, and control.",
            whenToUse: "When recommending go-to-market strategies.",
            outputFormat: "3-column table with summary",
            tags: "#market-strategy #go-to-market #internationalization",
            proTip:
              "Add cultural or legal context if entering emerging markets.",
          },
          {
            name: "Compare customer personas",
            basePrompt:
              "Compare Persona A and Persona B for [Product] across goals, pain points, and decision triggers.",
            whenToUse:
              "When refining marketing segmentation or product design.",
            outputFormat: "Persona comparison grid",
            tags: "#marketing #UX #personas",
            proTip:
              "Use this prompt to prepare for pitch decks or product design presentations.",
          },
        ],
      },
      {
        name: "Analyze",
        items: [
          {
            name: "Analyze root causes",
            basePrompt:
              "Analyze the root causes of [Problem] using a cause-effect structure. Identify at least 3 contributing factors.",
            whenToUse:
              "When unpacking complex issues or preparing recommendation sections.",
            outputFormat: "Cause-effect diagram or bullet list",
            tags: "#problem-solving #diagnosis #strategy",
            proTip:
              "Ask AI to rank causes by influence or feasibility of resolution.",
          },
          {
            name: "Stakeholder analysis",
            basePrompt:
              "List key stakeholders for [Project or Issue]. Describe their interests, level of influence, and potential conflicts.",
            whenToUse:
              "When mapping influence networks or planning stakeholder engagement.",
            outputFormat: "Stakeholder table or Power–Interest Grid",
            tags: "#stakeholders #project-management",
            proTip:
              "Use this to inform communication plans or stakeholder strategies.",
          },
          {
            name: "Risk-impact analysis",
            basePrompt:
              "Analyze risks for [Plan or Strategy] based on likelihood and impact. Present in a 2x2 risk matrix.",
            whenToUse:
              "When assessing project feasibility or planning strategic rollout.",
            outputFormat: "2x2 risk matrix or structured bullets",
            tags: "#risk-analysis #planning",
            proTip:
              "Ask AI to highlight high-risk items or flag uncertainty zones.",
          },
          {
            name: "Policy/decision evaluation",
            basePrompt:
              "Evaluate the effectiveness of [Policy/Decision] by analyzing intended outcomes vs actual impact.",
            whenToUse:
              "When reviewing case studies or improving decision strategies.",
            outputFormat: "Evaluation paragraph or pros/cons table",
            tags: "#evaluation #impact #policy",
            proTip:
              "Ask AI to suggest improvements or adjustments based on observed gaps.",
          },
        ],
      },
      {
        name: "Simulate",
        items: [
          {
            name: "Simulate a behavioral interview",
            basePrompt:
              "Simulate a behavioral interview for a [Position]. Ask 3 STAR-based questions and provide model answers.",
            whenToUse: "Before interviews to practice confidence and clarity.",
            outputFormat: "Q&A script",
            tags: "#interview #career-prep #STAR",
            proTip: "Ask AI to critique your answers and suggest improvements.",
          },
          {
            name: "Simulate a business pitch Q&A",
            basePrompt:
              "Act as an investor and ask 3 challenging follow-up questions for a pitch about [Startup/Product].",
            whenToUse: "For demo day, pitch training, or fundraising Q&A.",
            outputFormat: "Q&A bullet format",
            tags: "#pitch #startup #fundraising",
            proTip: "Use with a friend to rehearse live Q&A.",
          },
          {
            name: "Simulate a debate or roleplay",
            basePrompt:
              "Simulate a debate between two perspectives on [Issue]. Give opening statements and 1 rebuttal each.",
            whenToUse:
              "When preparing for class discussion or testing arguments.",
            outputFormat: "Dialogue or statement-rebuttal format",
            tags: "#debate #presentation #critical-thinking",
            proTip:
              "Ask AI to identify logical fallacies or bias in arguments.",
          },
          {
            name: "Simulate a client meeting or negotiation",
            basePrompt:
              "Simulate a client meeting about [Service/Product]. Ask 3 realistic client questions and provide professional responses.",
            whenToUse:
              "Before consulting work, sales calls, or service proposals.",
            outputFormat: "Simulated meeting transcript",
            tags: "#client #consulting #negotiation",
            proTip:
              "Use this to practice objection-handling and closing techniques.",
          },
        ],
      },
      {
        name: "Rewrite & Refine",
        items: [
          {
            name: "Rewrite for clarity and conciseness",
            basePrompt:
              "Rewrite the following paragraph to be more concise and easier to read, while keeping the core message intact: [Text]",
            whenToUse: "When polishing reports, emails, or class submissions.",
            outputFormat: "Refined paragraph",
            tags: "#clarity #writing #editing",
            proTip: 'Add: "Limit to 100 words" or "Target non-native readers."',
          },
          {
            name: "Adjust tone for audience",
            basePrompt:
              "Rewrite the following message to sound more [professional/friendly/confident], suitable for a [audience type]: [Text]",
            whenToUse:
              "When communicating with professors, clients, or investors.",
            outputFormat: "Paragraph with adjusted tone",
            tags: "#tone #audience #messaging",
            proTip:
              "Ask AI to give you 2 versions in different tones and compare.",
          },
          {
            name: "Shorten for presentation/slide",
            basePrompt:
              "Rewrite the following content to fit within a slide. Use bullet points and simplify jargon: [Text]",
            whenToUse: "When summarizing for slides or visual presentation.",
            outputFormat: "Slide-ready bullets",
            tags: "#presentation #slides #visuals",
            proTip: "Ask AI to bold keywords or highlight takeaways.",
          },
          {
            name: "Make it persuasive",
            basePrompt:
              "Rewrite the following message to be more persuasive. Add supporting evidence or emotional appeal where appropriate: [Text]",
            whenToUse:
              "When writing cover letters, proposals, or sales emails.",
            outputFormat: "Persuasive paragraph",
            tags: "#persuasion #cover-letter #sales",
            proTip: "Ask for A/B test: persuasive vs neutral version.",
          },
        ],
      },
      {
        name: "Verify",
        items: [
          {
            name: "Verify factual accuracy",
            basePrompt:
              "Check if the following claim is accurate and provide a source to support or refute it: [Statement]",
            whenToUse: "When fact-checking AI output or research data.",
            outputFormat: "Fact-check paragraph or source link",
            tags: "#fact-checking #research #AI-integrity",
            proTip:
              'Add: "Only cite peer-reviewed sources or official reports."',
          },
          {
            name: "Detect logical fallacies or bias",
            basePrompt:
              "Review the following argument and point out any logical fallacies or bias: [Text]",
            whenToUse:
              "When writing critical essays or evaluating opposing views.",
            outputFormat: "Bullet list of identified flaws",
            tags: "#logic #critical-thinking #bias",
            proTip:
              "Ask AI to suggest how to rewrite the argument more neutrally.",
          },
          {
            name: "Assess credibility of a source",
            basePrompt:
              "Evaluate the credibility of this source: [Link/Author/Title]. Consider expertise, evidence, and objectivity.",
            whenToUse:
              "When selecting citations for academic work or presentations.",
            outputFormat: "Source evaluation summary",
            tags: "#source-evaluation #academic #evidence",
            proTip: "Ask AI to rate the source on a 1–5 credibility scale.",
          },
          {
            name: "Check AI-generated citations",
            basePrompt:
              "Verify if this article exists and is accurately cited in APA format: [Citation]",
            whenToUse: "When using references from ChatGPT or auto tools.",
            outputFormat: "Confirmation + correct citation",
            tags: "#citation #APA #source-verification",
            proTip:
              "Combine with ZoteroBib or Google Scholar for cross-checking.",
          },
        ],
      },
    ],
    filters: {
      actionPatterns: [
        "Summarize",
        "Compare",
        "Analyze",
        "Simulate",
        "Rewrite & Refine",
        "Verify",
      ],
      useCases: ["🎓 Academic", "💼 Career", "🧠 Thinking", "✍️ Communication"],
      outputFormats: [
        "📋 List-Based",
        "📊 Table/Structured",
        "🧾 Text/Paragraph",
        "💬 Dialogue/Simulation",
        "🔎 Verification Results",
      ],
    },
  };

  // Tải dữ liệu và hiển thị
  loadPromptLibrary(promptData);
  setupFilters(promptData);

  // Thêm các event listeners
  setTimeout(addEventListeners, 500);
});

// Hàm tải và hiển thị Prompt Library
function loadPromptLibrary(data) {
  const container = document.getElementById("prompt-library-container");

  // Xóa loading indicator
  container.innerHTML = "";

  // Hiển thị từng mục theo category
  data.categories.forEach((category) => {
    const categorySection = document.createElement("div");
    categorySection.className = "pattern-section";
    categorySection.dataset.category = category.name
      .toLowerCase()
      .replace(/[&\s]+/g, "-");

    categorySection.innerHTML = `
      <h2>${category.name}</h2>
      <div class="prompt-items">
        ${renderPromptItems(category.items)}
      </div>
    `;

    container.appendChild(categorySection);
  });
}

// Hàm render các mục prompt
function renderPromptItems(items) {
  return items
    .map((item, index) => {
      // Chuyển đổi tags thành mảng để dễ xử lý
      const tagsList = item.tags.split(" ").map((tag) => tag.replace("#", ""));

      return `
      <div class="prompt-item" data-tags="${item.tags}">
        <div class="prompt-item-header">
          <div class="prompt-item-title">${item.name}</div>
          <div class="prompt-item-toggle"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="prompt-item-content">
          <div class="prompt-metadata">
            ${tagsList
              .map((tag) => `<div class="prompt-tag">#${tag}</div>`)
              .join("")}
          </div>
          
          <div class="prompt-when">
            <strong>When to Use:</strong> ${item.whenToUse}
          </div>
          
          <div class="prompt-section">
            <h3><i class="fas fa-comment-dots"></i> Base Prompt</h3>
            <div class="prompt-box">
              ${item.basePrompt}
              <button class="copy-btn" data-prompt="${encodeURIComponent(
                item.basePrompt
              )}">
                <i class="fas fa-copy"></i> Copy
              </button>
            </div>
          </div>
          
          <div class="prompt-section">
            <h3><i class="fas fa-file-alt"></i> Output Format</h3>
            <p>${item.outputFormat}</p>
          </div>
          
          <div class="pro-tip">
            <h3><i class="fas fa-star"></i> Pro Tip</h3>
            <p>${item.proTip}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Thiết lập các bộ lọc
function setupFilters(data) {
  // Action Pattern Filters
  const actionPatternContainer = document.getElementById(
    "action-pattern-filters"
  );
  actionPatternContainer.innerHTML = data.filters.actionPatterns
    .map(
      (filter) => `
    <div class="filter-item" data-filter="action" data-value="${filter
      .toLowerCase()
      .replace(/[&\s]+/g, "-")}">
      ${filter}
    </div>
  `
    )
    .join("");

  // Use Case Filters
  const useCaseContainer = document.getElementById("use-case-filters");
  useCaseContainer.innerHTML = data.filters.useCases
    .map(
      (filter) => `
    <div class="filter-item" data-filter="usecase" data-value="${filter}">
      ${filter}
    </div>
  `
    )
    .join("");

  // Output Format Filters
  const outputFormatContainer = document.getElementById(
    "output-format-filters"
  );
  outputFormatContainer.innerHTML = data.filters.outputFormats
    .map(
      (filter) => `
    <div class="filter-item" data-filter="format" data-value="${filter}">
      ${filter}
    </div>
  `
    )
    .join("");
}

// Thêm event listeners
function addEventListeners() {
  // Mở/đóng các prompt item
  const promptHeaders = document.querySelectorAll(".prompt-item-header");
  promptHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.classList.toggle("expanded");
    });
  });

  // Xử lý nút sao chép
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      const prompt = decodeURIComponent(this.getAttribute("data-prompt"));

      // Sao chép vào clipboard
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          // Thay đổi nút khi sao chép thành công
          this.innerHTML = '<i class="fas fa-check"></i> Copied!';

          // Đặt lại nút sau 2 giây
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

  // Xử lý các bộ lọc
  const filterItems = document.querySelectorAll(".filter-item");
  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      applyFilters();
    });
  });

  // Nút xóa bộ lọc
  const clearFiltersBtn = document.getElementById("clear-filters");
  clearFiltersBtn.addEventListener("click", function () {
    const activeFilters = document.querySelectorAll(".filter-item.active");
    activeFilters.forEach((filter) => filter.classList.remove("active"));

    // Hiển thị lại tất cả các mục
    document.querySelectorAll(".pattern-section").forEach((section) => {
      section.style.display = "block";
    });

    document.querySelectorAll(".prompt-item").forEach((item) => {
      item.style.display = "block";
    });
  });
}

// Áp dụng các bộ lọc
function applyFilters() {
  // Lấy các bộ lọc đang được chọn
  const activeActionFilters = Array.from(
    document.querySelectorAll('.filter-item[data-filter="action"].active')
  ).map((el) => el.dataset.value);

  const activeUseCaseFilters = Array.from(
    document.querySelectorAll('.filter-item[data-filter="usecase"].active')
  ).map((el) => el.dataset.value);

  const activeFormatFilters = Array.from(
    document.querySelectorAll('.filter-item[data-filter="format"].active')
  ).map((el) => el.dataset.value);

  // Nếu không có bộ lọc nào được chọn, hiển thị tất cả
  if (
    activeActionFilters.length === 0 &&
    activeUseCaseFilters.length === 0 &&
    activeFormatFilters.length === 0
  ) {
    document.querySelectorAll(".pattern-section").forEach((section) => {
      section.style.display = "block";
    });

    document.querySelectorAll(".prompt-item").forEach((item) => {
      item.style.display = "block";
    });
    return;
  }

  // Lọc theo Action Pattern
  document.querySelectorAll(".pattern-section").forEach((section) => {
    if (
      activeActionFilters.length > 0 &&
      !activeActionFilters.includes(section.dataset.category)
    ) {
      section.style.display = "none";
    } else {
      section.style.display = "block";

      // Lọc các mục bên trong mỗi section
      const promptItems = section.querySelectorAll(".prompt-item");
      promptItems.forEach((item) => {
        const tags = item.dataset.tags.toLowerCase();
        let showItem = true;

        // Kiểm tra Use Case filters
        if (activeUseCaseFilters.length > 0) {
          const matchesUseCase = activeUseCaseFilters.some((filter) =>
            tags.includes(filter.replace(/[🎓💼🧠✍️\s]+/g, "").toLowerCase())
          );
          if (!matchesUseCase) showItem = false;
        }

        // Kiểm tra Output Format filters
        if (activeFormatFilters.length > 0 && showItem) {
          const matchesFormat = activeFormatFilters.some((filter) =>
            tags.includes(filter.replace(/[📋📊🧾💬🔎\s]+/g, "").toLowerCase())
          );
          if (!matchesFormat) showItem = false;
        }

        item.style.display = showItem ? "block" : "none";
      });
    }
  });
}
