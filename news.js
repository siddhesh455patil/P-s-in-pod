// Global arrays for job categories
let webDevJobs = [];
let skillJobs = [];
let lawJobs = [];
let healthJobs = [];
let psychologyJobs = [];
let managementJobs = [];

// Generate job insights (2-line description) for each role
function generateJobInsights(job) {
  const title = job.title ? job.title.toLowerCase() : "";
  if (title.includes("web") || title.includes("frontend") || title.includes("backend") ||
      title.includes("full-stack") || title.includes("javascript") || title.includes("react") ||
      title.includes("vue") || title.includes("node")) {
    return "Modern frameworks are in high demand as companies focus on agile development. This trend boosts responsiveness and user experience.";
  } else if (title.includes("marketing") || title.includes("data") || title.includes("analytics") ||
             title.includes("cybersecurity") || title.includes("freelance")) {
    return "Specialized digital skills are reshaping industries with data-driven strategies. Employers are investing heavily in technical expertise.";
  } else if (title.includes("law") || title.includes("attorney") || title.includes("legal") ||
             title.includes("lawyer")) {
    return "Legal tech innovations are streamlining case research and compliance. Firms increasingly rely on AI tools for faster, accurate insights.";
  } else if (title.includes("nurse") || title.includes("doctor") || title.includes("medical") ||
             title.includes("health") || title.includes("telemedicine")) {
    return "Healthcare is rapidly evolving through digital transformation. Telemedicine and AI diagnostics are revolutionizing patient care.";
  } else if (title.includes("psych") || title.includes("counselor") || title.includes("therapist")) {
    return "Digital platforms and innovative therapies are enhancing mental health care. Teletherapy and VR are leading the change.";
  } else if (title.includes("manager") || title.includes("executive") || title.includes("director") ||
             title.includes("leadership")) {
    return "Data-driven decision making and hybrid work models are defining modern leadership. Effective managers balance innovation with operational efficiency.";
  } else {
    return job.details || "Insight data not available.";
  }
}

// Populate a job list element with up to three jobs
function populateJobList(listId, jobs) {
  const ul = document.getElementById(listId);
  if (!jobs || jobs.length === 0) {
    ul.innerHTML = `<li>No jobs found.</li>`;
    return;
  }
  let html = "";
  jobs.slice(0, 3).forEach(job => {
    const insight = generateJobInsights(job);
    html += `<li data-job-title="${job.title}" data-job-insight="${insight}">🔹 ${job.title}</li>`;
  });
  ul.innerHTML = html;
  
  // Add click handlers to job list items
  const listItems = ul.querySelectorAll('li');
  listItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const title = this.getAttribute('data-job-title');
      const details = this.getAttribute('data-job-insight');
      showModal({title, details});
    });
  });
}

// Show modal with detailed info
function showModal(item) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `<h2>${item.title}</h2><p>${item.details || "No further details available."}</p>`;
  modal.style.display = "block";
}

// Attach click listeners to trend items for more info
function attachTrendListeners() {
  const trendItems = document.querySelectorAll('.trend-list li');
  trendItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      const trendTitle = this.querySelector('.trend-title')?.textContent || "Trend";
      const trendDesc = this.querySelector('.trend-desc')?.textContent || "Evolving market dynamics and technological advancements.";
      showModal({ title: trendTitle, details: trendDesc });
    });
  });
  
  // Add dedicated handlers for "Read more" links
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation(); // Stop event from bubbling up to parent li
      // Open link in new tab
      window.open(this.getAttribute('href'), '_blank');
    });
  });
}

// Attach click listeners to category boxes for full category insights
function attachCategoryListeners() {
  document.getElementById("box-webdev").addEventListener("click", () => {
    let allJobs = "";
    webDevJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Web Development Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>AI-powered Code Completion</strong><br>Transforming coding workflows.</li>
                  <li><strong>Web3 and DeFi Development Surge</strong><br>Boosting decentralized growth.</li>
                  <li><strong>Headless CMS Adoption</strong><br>Shaping enterprise web strategies.</li>
                </ul>`
    });
  });
  
  document.getElementById("box-skill").addEventListener("click", () => {
    let allJobs = "";
    skillJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Skill-Based Development Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>AI & ML Upskilling</strong><br>Surging enrollments for specialized training.</li>
                  <li><strong>Freelance Developer Market</strong><br>High demand for specialized expertise.</li>
                  <li><strong>VR-based Training</strong><br>Reducing time and improving retention.</li>
                </ul>`
    });
  });
  
  document.getElementById("box-law").addEventListener("click", () => {
    let allJobs = "";
    lawJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Law Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>AI Legal Research Tools</strong><br>Slashing research time.</li>
                  <li><strong>Cyber Law Cases Surge</strong><br>Data breaches drive new expertise.</li>
                  <li><strong>Virtual Court Hearings</strong><br>Remote proceedings are now standard.</li>
                </ul>`
    });
  });
  
  document.getElementById("box-health").addEventListener("click", () => {
    let allJobs = "";
    healthJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Healthcare Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>AI in Disease Diagnosis</strong><br>Unprecedented accuracy.</li>
                  <li><strong>Telemedicine Growth</strong><br>A key component of primary care.</li>
                  <li><strong>Wearable Health Tech</strong><br>Seamless EHR integration.</li>
                </ul>`
    });
  });
  
  document.getElementById("box-psychology").addEventListener("click", () => {
    let allJobs = "";
    psychologyJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Psychology Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>Teletherapy Services Expand</strong><br>Increasing access to mental health care.</li>
                  <li><strong>Mindfulness in the Workplace</strong><br>Boosting well-being and productivity.</li>
                  <li><strong>VR for Phobia Treatment</strong><br>Revolutionizing exposure therapy.</li>
                </ul>`
    });
  });
  
  document.getElementById("box-management").addEventListener("click", () => {
    let allJobs = "";
    managementJobs.forEach(job => {
      allJobs += `<li>🔹 ${job.title} - ${generateJobInsights(job)}</li>`;
    });
    showModal({
      title: "Management Insights",
      details: `<h3>Job Listings:</h3><ul>${allJobs}</ul>
                <h3>Latest Trends:</h3>
                <ul>
                  <li><strong>Hybrid Work Models</strong><br>Now standard in many organizations.</li>
                  <li><strong>Data-Driven Leadership</strong><br>Analytics shape decisions.</li>
                  <li><strong>Diversity & Inclusion</strong><br>Key to stronger performance.</li>
                </ul>`
    });
  });
}

// Fetch jobs from the API and categorize them
async function fetchJobs() {
  const url = 'https://job-posting-feed-api.p.rapidapi.com/active-ats-meili?title_search=false&description_type=html';
  const options = { 
    method: 'GET', 
    headers: { 
      'x-rapidapi-key': 'f411ab9509mshfdade99a330f3e3p1a3bf7jsnfe99610925da', 
      'x-rapidapi-host': 'job-posting-feed-api.p.rapidapi.com' 
    } 
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const jobs = result.hits || result;
    
    // Reset job categories
    webDevJobs = [];
    skillJobs = [];
    lawJobs = [];
    healthJobs = [];
    psychologyJobs = [];
    managementJobs = [];
    
    // Categorize jobs
    jobs.forEach(job => {
      const title = job.title ? job.title.toLowerCase() : "";
      if (title.includes("web") || title.includes("frontend") || title.includes("backend") ||
          title.includes("full-stack") || title.includes("javascript") || title.includes("react") ||
          title.includes("vue") || title.includes("node")) {
        webDevJobs.push(job);
      } else if (title.includes("marketing") || title.includes("data") || title.includes("analytics") ||
                 title.includes("cybersecurity") || title.includes("freelance")) {
        skillJobs.push(job);
      } else if (title.includes("law") || title.includes("attorney") || title.includes("legal") ||
                 title.includes("lawyer")) {
        lawJobs.push(job);
      } else if (title.includes("nurse") || title.includes("doctor") || title.includes("medical") ||
                 title.includes("health") || title.includes("telemedicine")) {
        healthJobs.push(job);
      } else if (title.includes("psych") || title.includes("counselor") || title.includes("therapist")) {
        psychologyJobs.push(job);
      } else if (title.includes("manager") || title.includes("executive") || title.includes("director") ||
                 title.includes("leadership")) {
        managementJobs.push(job);
      }
    });
    
    // Populate the job lists
    populateJobList("job-list-webdev", webDevJobs);
    populateJobList("job-list-skill", skillJobs);
    populateJobList("job-list-law", lawJobs);
    populateJobList("job-list-health", healthJobs);
    populateJobList("job-list-psychology", psychologyJobs);
    populateJobList("job-list-management", managementJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
}

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchJobs();
  attachTrendListeners();
  attachCategoryListeners();
  
  // Close modal when X is clicked
  document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('modal').style.display = "none";
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
    }
  });
});