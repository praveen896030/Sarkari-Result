
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
