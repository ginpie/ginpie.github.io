const bgs = ["main-bg2.jpg", "main-bg3.jpg", "main-bg4.jpg", "main-bg5.jpg"];

const body = document.querySelector("#body-block");
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
  let bgrand = Math.floor(Math.random() * 4);
  document.getElementById("body-block").style.backgroundImage =
    "url(/assets/" + bgs[bgrand] + ")";
}
randBg();

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
