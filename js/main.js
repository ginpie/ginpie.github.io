const bgs = [
  "main-bg2.jpg",
  "main-bg3.jpg",
  "main-bg4.jpg",
  "main-bg5.jpg",
  "main-bg6.jpg",
  "main-bg7.jpg",
  "main-bg8.jpg",
  "main-bg9.jpg",
  "main-bg10.jpg",
  "main-bg11.jpg",
  "main-bg12.jpg",
  "main-bg13.jpg",
  "main-bg14.jpg",
  "main-bg15.jpg",
];

const body = document.getElementById("body-block");
const main = document.querySelector("#main");
const portfolio = document.querySelector("#portfolio");
const project = document.querySelector("#project");
const blog = document.querySelector("#blog");
const contact = document.querySelector("#contact");

const button_portfolio = document.querySelector("#button-portfolio");
const button_project = document.querySelector("#button-project");
const button_blog = document.querySelector("#button-blog");
const button_contact = document.querySelector("#button-contact");
const button_findmore = document.querySelector("#button-findmore");
const button_switchbg = document.querySelector("#button-switch-bg");

const portrait = document.querySelector("#portrait");

const pages = document.querySelectorAll(".content-inner");

// background load
function randBg() {
  let bgrand = Math.floor(Math.random() * bgs.length);
  body.style.backgroundImage = "url(/assets/" + bgs[bgrand] + ")";
  body.style.transition = "1s ease linear";
}

// page switch
function hideAll() {
  pages.forEach((i) => {
    if (!i.classList.contains("hidden")) {
      i.classList.add("hidden");
    }
  });
}

function showThis(obj) {
  obj.classList.remove("hidden");
}

portrait.addEventListener("click", function () {
  window.location.reload();
});

button_portfolio.addEventListener("click", () => {
  if (portfolio.classList.contains("hidden")) {
    hideAll();
    showThis(portfolio);
  }
});
button_findmore.addEventListener("click", () => {
  if (portfolio.classList.contains("hidden")) {
    hideAll();
    showThis(portfolio);
  }
});

button_project.addEventListener("click", function () {
  if (project.classList.contains("hidden")) {
    hideAll();
    showThis(project);
  }
});

button_blog.addEventListener("click", function () {
  if (blog.classList.contains("hidden")) {
    hideAll();
    showThis(blog);
  }
});

button_contact.addEventListener("click", function () {
  if (contact.classList.contains("hidden")) {
    hideAll();
    showThis(contact);
  }
});

//background switch
button_switchbg.addEventListener("click", function () {
  randBg();
});
