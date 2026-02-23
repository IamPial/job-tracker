const jobs = [
  {
    id: 1,
    title: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    applicationStatus: {
      applied: "Interview",
      notApplied: "Not Applied",
      rejected: "Rejected",
    },
    actionBtn: {
      success: "interview",
      error: "reject",
    },
  },
  {
    id: 2,
    title: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    applicationStatus: {
      applied: "Interview",
      notApplied: "Not Applied",
      rejected: "Rejected",
    },
    actionBtn: {
      success: "interview",
      error: "reject",
    },
  },
  {
    id: 3,
    title: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    applicationStatus: {
      applied: "Interview",
      notApplied: "Not Applied",
      rejected: "Rejected",
    },
    actionBtn: {
      success: "interview",
      error: "reject",
    },
  },
];

let interviewList = [];
let rejectList = [];

//finding all necessary elements
const totalCount = document.getElementById("display-total");
const interviewCount = document.getElementById("display-interview");
const rejectCount = document.getElementById("display-reject");

const allSectionCards = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

// for toggling all necessary buttons
const allFilterBtn = document.getElementById("allFilterBtn");
const interviewFilterBtn = document.getElementById("interviewFilterBtn");
const rejectFilterBtn = document.getElementById("rejectFilterBtn");

//create function for displaying counting value
function countDisplay() {
  totalCount.innerText = allSectionCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectList.length;
}
countDisplay();

// for toggle the click event in multiple filter button
function toggleChange(id) {
  // added  x-axis space to this every buttons
  document.getElementById("buttonId").classList.add("space-x-3");

  // for added the class
  allFilterBtn.classList.add("border-base-300");
  interviewFilterBtn.classList.add("border-base-300");
  rejectFilterBtn.classList.add("border-base-300");

  //for remove the class
  allFilterBtn.classList.remove("btn-info", "text-white");
  interviewFilterBtn.classList.remove("btn-info", "text-white");
  rejectFilterBtn.classList.remove("btn-info", "text-white");

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("border-base-300");
  selectedBtn.classList.add("btn-info", "text-white");
}
