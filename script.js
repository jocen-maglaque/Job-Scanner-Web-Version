// ---------------- TAB SWITCHING ----------------
function openTab(tabName) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");
}

// ---------------- DARK MODE ----------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ---------------- OPEN JOB BOARDS ----------------
// Opens ONLY ONE per click (browser-safe)
function openAllJobs() {
  openIndeed();
  openLinkedIn();
  openIrishJobs();
}

function openIndeed() {
  window.open("https://ie.indeed.com/jobs?q=IT+Support&l=Ireland", "_blank");
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/jobs/search/?keywords=IT%20Support&location=Ireland", "_blank");
}

function openIrishJobs() {
  window.open("https://www.irishjobs.ie/jobs/it/in-ireland", "_blank");
}

// ---------------- SEARCH BY CITY ----------------
function searchCity() {
  const city = document.getElementById("citySelect").value;

  const jobs = [
    { title: "Technical Support Engineer", company: "Harvey", location: "Dublin", remote: "Remote", type: "Full-time", posted: "2026-07-20", source: "Ashby", link: "https://jobs.ashbyhq.com/harvey" },
    { title: "Service Desk Analyst", company: "Securitas", location: "Dublin", remote: "On-site", type: "Full-time", posted: "2026-08-18", source: "SmartRecruiters", link: "https://jobs.smartrecruiters.com/Securitas" },
    { title: "Cyber Security Engineer Internship", company: "Trend Micro", location: "Cork", remote: "On-site", type: "Internship", posted: "2026-08-30", source: "Workday", link: "https://trendmicro.wd3.myworkdayjobs.com" }
  ];

  const filtered = city === "Ireland" ? jobs : jobs.filter(j => j.location.includes(city));
  const tbody = document.querySelector("#jobTable tbody");
  tbody.innerHTML = "";

  filtered.forEach(job => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${job.title}</td>
      <td>${job.company}</td>
      <td>${job.location}</td>
      <td>${job.remote}</td>
      <td>${job.type}</td>
      <td>${job.posted}</td>
      <td>${job.source}</td>
      <td><a href="${job.link}" target="_blank">Apply</a></td>
    `;
    tbody.appendChild(row);
  });
}

// ---------------- APPLICATION TRACKER ----------------
function addApplication() {
  const company = document.getElementById("trackerCompany").value.trim();
  const role = document.getElementById("trackerRole").value.trim();
  const status = document.getElementById("trackerStatus").value.trim();

  if (!company || !role || !status) {
    alert("Please fill all fields");
    return;
  }

  const tbody = document.querySelector("#trackerTable tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${company}</td>
    <td>${role}</td>
    <td>${status}</td>
  `;

  tbody.appendChild(row);

  document.getElementById("trackerCompany").value = "";
  document.getElementById("trackerRole").value = "";
  document.getElementById("trackerStatus").value = "";
}
