
const jobData = [
  {
    title: "SSC GD Constable 2025",
    link: "https://ssc.nic.in"
  },
  {
    title: "UP Police Constable 2025",
    link: "https://uppbpb.gov.in"
  },
  {
    title: "Railway Group D 2025",
    link: "https://rrbcdg.gov.in"
  },
  {
    title: "UPSC Civil Services (IAS/IPS)",
    link: "https://upsc.gov.in"
  },
  {
    title: "Bank PO (IBPS, SBI)",
    link: "https://ibps.in"
  }
];

const jobSection = document.getElementById("jobs");

jobData.forEach(job => {
  const div = document.createElement("div");
  div.className = "job-card";
  div.innerHTML = `
    <h2>${job.title}</h2>
    <a href="${job.link}" target="_blank">फॉर्म भरें / विवरण देखें</a>
  `;
  jobSection.appendChild(div);
});
