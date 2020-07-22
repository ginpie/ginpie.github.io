const main = document.querySelector("#main");
const portfolio = document.querySelector("#portfolio");
const project = document.querySelector("#project");
const blog = document.querySelector("#blog");
const contact = document.querySelector("#contact");

const button_portfolio = document.querySelector("#button-portfolio");
const button_project = document.querySelector("#button-project");
const button_blog = document.querySelector("#button-blog");
const button_contact = document.querySelector("#button-contact");

const portrait = document.querySelector("#portrait");

const pages = document.querySelectorAll(".content-inner");

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

// page switch
portrait.addEventListener("click", function () {
  window.location.reload();
});

button_portfolio.addEventListener("click", () => {
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
