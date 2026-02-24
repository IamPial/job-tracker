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
const filterSectionCards = document.getElementById("filter-cards");

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

  // added filtering section toggle
  if (id == "allFilterBtn") {
    filterSectionCards.classList.add("hidden");
    allSectionCards.classList.remove("hidden");
  }
  if (id == "interviewFilterBtn") {
    allSectionCards.classList.add("hidden");
    filterSectionCards.classList.remove("hidden");
  }
}

// Executing Main Content

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".my-status").innerText;

    const jobInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      description,
      status,
    };

    parentNode.querySelector(".my-status").innerText =
      "interview".toUpperCase();
    parentNode.querySelector(".my-status").className =
      "badge badge-outline badge-success bg-success/10";
    const filterInterview = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!filterInterview) {
      interviewList.push(jobInfo);
    }
    interviewSection();
  }
});

//for render of interview list
function interviewSection() {
  filterSectionCards.innerHTML = "";
  for (const interview of interviewList) {
    let div = document.createElement("div");
    div.className = "card bg-base-300 max-w-full flex flex-row justify-between";
    div.innerHTML = `
        <div class="card-body">
            <h2 class="companyName card-title text-gray-800 text-2xl font-bold">
              DataViz Solutions 3
            </h2>
            <h4 class="position text-[#64748B] text-[16px]">
              Data Visualization Specialist
            </h4>
            <div class="text-[#64748B] text-[16px] space-x-3">
              <span class="location">Boston, MA</span>
              <span class="type">Full-time</span>
              <span class="salary">125,000 - $165,000</span>
            </div>
            <p
              class="my-status badge badge-outline badge-primary bg-primary/10"
            >
              NOT APPLIED
            </p>
            <p class="description text-[#323B49] text-[16px]">
              Transform complex data into compelling visualizations. Required
              skills: D3.js, React, and strong analytical thinking.
            </p>
            <div class="card-actions">
              <button
                id="interview-btn"
                class="interview-btn btn border-success bg-success/50"
              >
                INTERVIEW
              </button>
              <button
                id="reject-btn"
                class="reject-btn btn border-error bg-error/50"
              >
                REJECT
              </button>
            </div>
          </div>
          <div class="delete-icon mt-5 p-5">
            <button
              class="btn h-10 w-10 btn-error bg-error/50 transition-all duration-200 active:scale-90 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filterSectionCards.appendChild(div);
  }
}
