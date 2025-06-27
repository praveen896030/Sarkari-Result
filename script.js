
const results = [
  { title: "SSC GD 2024 Final Result", link: "https://ssc.nic.in/result" },
  { title: "UPSC Prelims 2024 Result", link: "https://upsc.gov.in/result" }
];

const admitCards = [
  { title: "UP Police Constable Admit Card", link: "https://uppbpb.gov.in/admit" },
  { title: "Railway Group D Admit Card", link: "https://rrbcdg.gov.in/admit" }
];

const latestForms = Array.from({length: 60}, (_, i) => ({
  title: `सरकारी फॉर्म ${i + 1}`,
  link: `https://example.com/form-${i + 1}`
}));

function renderList(id, data) {
  const section = document.getElementById(id);
  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
    section.appendChild(div);
  });
}

renderList("latest-results", results);
renderList("admit-cards", admitCards);
renderList("latest-forms", latestForms);
const jobs = [
  "Rajasthan High Court Peon Online Form 2025",
  "MPTRANSCO Various Post Online Form 2025",
  "SSC MTS Online Form 2025",
  "UPSC NDA I Form 2025",
  "Indian Navy Agniveer SSR 2025"
];

const results = [
  "SSC GD Result with Marks 2025",
  "NTA NEET UG Result 2025",
  "Allahabad University Result 2025",
  "UPPSC PCS Pre 2025 Result",
  "MP Police Constable Result 2025"
];

const admitCards = [
  "RRB ALP Admit Card 2025",
  "NTA ICAR Admit Card 2025",
  "Bihar Police Constable Admit Card 2025",
  "SSC CHSL Admit Card 2025",
  "UPSSSC PET Admit Card 2025"
];

function populateList(id, data, baseLink) {
  const container = document.getElementById(id);
  data.forEach((item, i) => {
    const a = document.createElement("a");
    a.href = baseLink + i;
    a.target = "_blank";
    a.innerText = item;
    container.appendChild(a);
  });
}

populateList("jobs", jobs, "https://example.com/job-");
populateList("results", results, "https://example.com/result-");
populateList("admitCards", admitCards, "https://example.com/admit-");

function searchData() {
  const term = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll("a").forEach(a => {
    a.style.display = a.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
}
