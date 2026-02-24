const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "Not Applied",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "Not Applied",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "Not Applied",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "Not Applied",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "Not Applied",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,00",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "Not Applied",
  },
  {
    id: 7,
    companyName: "Startup XYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "Not Applied",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "Not Applied",
  },
];

let interviewList = [];
let rejectList = [];
let allCards = [];

let currentStatus = "all";

//creating a new for counting total value decrease or increase
for (const job of jobs) {
  allCards.push(job);
}

//finding all necessary elements
const totalCount = document.getElementById("display-total");
const interviewCount = document.getElementById("display-interview");
const rejectCount = document.getElementById("display-reject");

const allSectionCards = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSectionCards = document.getElementById("filter-cards");
const availAbleJobsCount = document.getElementById("available-jobs-count");
const emptyCardsSection = document.getElementById("empty-cards");

// for toggling all necessary buttons
const allFilterBtn = document.getElementById("allFilterBtn");
const interviewFilterBtn = document.getElementById("interviewFilterBtn");
const rejectFilterBtn = document.getElementById("rejectFilterBtn");

//create function for displaying counting value
function countDisplay() {
  totalCount.innerText = allCards.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectList.length;
}
countDisplay();

//work with delete functionality
function deleteFunc(id) {
  const cardDelete = jobs.filter((item) => item.id !== id);
  const myCard = document.getElementById(id);
  if (myCard) {
    myCard.remove();
    totalCount.innerText = allCards.pop();
    availAbleJobsCount.innerText = `${allCards.length} Jobs`;
  }
  countDisplay();
}

//for interview section delete a single card
function interviewDelete(id) {
  const interview = interviewList.filter((item) => item.id != id);
  const delCard = document.getElementById(id);
  if (delCard) {
    delCard.remove();
    interviewCount.innerText = interviewList.pop();
    availAbleJobsCount.innerText = `${interviewList.length} of ${allCards.length}`;
  }
  if (interviewList.length === 0) {
    console.log(interviewList.length);
    emptyCardsSection.classList.remove("hidden");
    availAbleJobsCount.innerText = `${interviewList.length} of ${allCards.length}`;
  }

  countDisplay();
}

// For reject section a single card delete
function rejectDelete(id) {
  const reject = rejectList.filter((item) => item.id != id);
  const delCard = document.getElementById(id);
  if (delCard) {
    delCard.remove();
    rejectCount.innerText = rejectList.pop();
    availAbleJobsCount.innerText = `${rejectList.length} of ${allCards.length}`;
  }
  if (rejectList.length === 0) {
    console.log(rejectList.length);
    availAbleJobsCount.innerText = `${rejectList.length} of ${allCards.length}`;
    emptyCardsSection.classList.remove("hidden");
  }
  countDisplay();
}

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

  currentStatus = id;
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("border-base-300");
  selectedBtn.classList.add("btn-info", "text-white");

  // added filtering section toggle
  if (id == "allFilterBtn") {
    filterSectionCards.classList.add("hidden");
    allSectionCards.classList.remove("hidden");
    //added available jobs
    availAbleJobsCount.innerText = `${allCards.length} Jobs`;
  }
  if (id == "interviewFilterBtn") {
    allSectionCards.classList.add("hidden");
    filterSectionCards.classList.remove("hidden");
    //added available jobs
    availAbleJobsCount.innerText = `${interviewList.length} of ${allCards.length}`;
    // added the empty-card-section for interview section
    if (interviewList.length == "") {
      emptyCardsSection.classList.remove("hidden");
    } else {
      emptyCardsSection.classList.add("hidden");
    }
    interviewSection();
  }

  if (id == "rejectFilterBtn") {
    allSectionCards.classList.add("hidden");
    filterSectionCards.classList.remove("hidden");
    //added available jobs
    availAbleJobsCount.innerText = `${rejectList.length} of ${allCards.length}`;

    // added the empty-card-section for rejection section
    if (rejectList.length == "") {
      emptyCardsSection.classList.remove("hidden");
    } else {
      emptyCardsSection.classList.add("hidden");
    }
    rejectSection();
  }
}

// Executing Main Content

mainContainer.addEventListener("click", function (e) {
  // for interview section
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    let companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".my-status").innerText;
    parentNode.querySelector(".my-status").innerText =
      "interview".toUpperCase();
    parentNode.querySelector(".my-status").className =
      "badge badge-outline badge-success bg-success/10";
    const jobInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      description,
      status: "interview".toUpperCase(),
    };

    const filterInterview = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!filterInterview) {
      interviewList.push(jobInfo);
    }

    // for interview list passing to the rejection list
    rejectList = rejectList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    if (currentStatus == "rejectFilterBtn") {
      availAbleJobsCount.innerText = `${rejectList.length} of ${allCards.length}`;

      // added the empty-card-section for rejection section
      if (rejectList.length == "") {
        emptyCardsSection.classList.remove("hidden");
      } else {
        emptyCardsSection.classList.add("hidden");
      }
      rejectSection();
    }

    countDisplay();
  }

  // for rejection section
  if (e.target.classList.contains("reject-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const type = parentNode.querySelector(".type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const status = parentNode.querySelector(".my-status").innerText;
    parentNode.querySelector(".my-status").innerText = "reject".toUpperCase();
    parentNode.querySelector(".my-status").className =
      "badge badge-outline badge-error bg-error/10";
    const jobInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      description,
      status: "reject".toUpperCase(),
    };

    const filterInterview = rejectList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!filterInterview) {
      rejectList.push(jobInfo);
    }

    // for rejection list passing to the interview list
    interviewList = interviewList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    if (currentStatus == "interviewFilterBtn") {
      availAbleJobsCount.innerText = `${interviewList.length} of ${allCards.length}`;
      // added the empty-card-section for interview section
      if (interviewList.length == "") {
        emptyCardsSection.classList.remove("hidden");
      } else {
        emptyCardsSection.classList.add("hidden");
      }
      interviewSection();
    }
    countDisplay();
  }
});

function allInterviewSection() {
  allSectionCards.innerHTML = "";
  for (const job of jobs) {
    let div = document.createElement("div");
    div.id = `card-${job.id}`;
    div.className = "card bg-base-300 max-w-full flex flex-row justify-between";
    div.innerHTML = `
      <div class="card-body">
            <h2 class="companyName card-title text-gray-800 text-2xl font-bold">
              ${job.companyName}
            </h2>
            <h4 class="position text-[#64748B] text-[16px]">
              ${job.position}
            </h4>
            <div class="text-[#64748B] text-[16px] space-x-3">
              <span class="location">${job.location}</span>
              <span class="type">${job.type}</span>
              <span class="salary">${job.salary}</span>
            </div>
            <p
              class="my-status badge badge-outline badge-primary bg-primary/10"
            >
              ${job.status.toUpperCase()}
            </p>
            <p class="description text-[#323B49] text-[16px]">
              ${job.description}
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
              onclick="deleteFunc('card-${job.id}')"
              class="btn h-10 w-10 btn-error bg-error/50 transition-all duration-200 active:scale-90 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    allSectionCards.appendChild(div);
  }
}

allInterviewSection();
//for render of interview list
function interviewSection() {
  filterSectionCards.innerHTML = "";
  for (const interview of interviewList) {
    let div = document.createElement("div");
    div.id = `interview-${interview.companyName}`;
    div.className = "card bg-base-300 max-w-full flex flex-row justify-between";
    div.innerHTML = `
        <div class="card-body">
            <h2 class="companyName card-title text-gray-800 text-2xl font-bold">
              ${interview.companyName}
            </h2>
            <h4 class="position text-[#64748B] text-[16px]">
              ${interview.position}
            </h4>
            <div class="text-[#64748B] text-[16px] space-x-3">
              <span class="location">${interview.location}</span>
              <span class="type">${interview.type}</span>
              <span class="salary">${interview.salary}</span>
            </div>
            <p
              class="my-status badge badge-outline badge-success bg-success/10"
            >
              ${interview.status}
            </p>
            <p class="description text-[#323B49] text-[16px]">
              ${interview.description}
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
            onclick="interviewDelete('interview-${interview.companyName}')"
              class="btn h-10 w-10 btn-error bg-error/50 transition-all duration-200 active:scale-90 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filterSectionCards.appendChild(div);
  }
}

// for render of rejection List
function rejectSection() {
  filterSectionCards.innerHTML = "";
  for (const reject of rejectList) {
    // console.log(reject, rejectList);
    let div = document.createElement("div");
    div.id = `reject-${reject.companyName}`;
    div.className = "card bg-base-300 max-w-full flex flex-row justify-between";
    div.innerHTML = `
        <div class="card-body">
            <h2 class="companyName card-title text-gray-800 text-2xl font-bold">
              ${reject.companyName}
            </h2>
            <h4 class="position text-[#64748B] text-[16px]">
              ${reject.position}
            </h4>
            <div class="text-[#64748B] text-[16px] space-x-3">
              <span class="location">${reject.location}</span>
              <span class="type">${reject.type}</span>
              <span class="salary">${reject.salary}</span>
            </div>
            <p
              class="my-status badge badge-outline badge-error bg-error/10"
            >
              ${reject.status}
            </p>
            <p class="description text-[#323B49] text-[16px]">
              ${reject.description}
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
            onclick="rejectDelete('reject-${reject.companyName}')"
              class="btn h-10 w-10 btn-error bg-error/50 transition-all duration-200 active:scale-90 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filterSectionCards.appendChild(div);
  }
}
