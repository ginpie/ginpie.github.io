const bgs = [
  "main-bg.jpg",
  "main-bg0.jpg",
  "main-bg1.jpg",
  "main-bg2.jpg",
  "main-bg3.jpg",
  "main-bg4.jpg",
  "main-bg5.jpg",
  "main-bg7.jpg",
  "main-bg8.jpg",
  "main-bg10.jpg",
  "main-bg11.jpg",
  "main-bg12.jpg",
  "main-bg13.jpg",
  "main-bg14.jpg",
];

const body = document.getElementById("body-block");
const main = document.querySelector("#main");
const portfolio = document.querySelector("#portfolio");
const project = document.querySelector("#project");
const blog = document.querySelector("#blog");
const contact = document.querySelector("#contact");
const menu = document.getElementById("menu");

const button_portfolio = document.querySelector("#button-portfolio");
const button_project = document.querySelector("#button-project");
const button_blog = document.querySelector("#button-blog");
const button_contact = document.querySelector("#button-contact");
const button_portfolio_mobile = document.querySelector(
  "#button-portfolio-mobile"
);
const button_project_mobile = document.querySelector("#button-project-mobile");
const button_blog_mobile = document.querySelector("#button-blog-mobile");
const button_contact_mobile = document.querySelector("#button-contact-mobile");
const button_menu = document.querySelector("#button-menu");
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

// mobile menu toggle
function closeMenu() {
  button_menu.classList.remove("open");
  menu.classList.remove("pop");
}
function openMenu() {
  button_menu.classList.add("open");
  menu.classList.add("pop");
}

button_menu.addEventListener("click", function () {
  if (button_menu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// menu button page switch
button_portfolio_mobile.addEventListener("click", () => {
  if (portfolio.classList.contains("hidden")) {
    hideAll();
    showThis(portfolio);
  }
  closeMenu();
});

button_project_mobile.addEventListener("click", function () {
  if (project.classList.contains("hidden")) {
    hideAll();
    showThis(project);
  }
  closeMenu();
});

button_blog_mobile.addEventListener("click", function () {
  if (blog.classList.contains("hidden")) {
    hideAll();
    showThis(blog);
  }
  closeMenu();
});

button_contact_mobile.addEventListener("click", function () {
  if (contact.classList.contains("hidden")) {
    hideAll();
    showThis(contact);
  }
  closeMenu();
});
