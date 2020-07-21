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
  pages.forEach(function (i) {
    if (!i.classList.contains("hidden")) {
      i.classList.add("hidden");
    }
  });
}

// page switch
portrait.addEventListener("click", function () {
  window.location.reload();
});

button_portfolio.addEventListener("click", () => {
  if (portfolio.classList.contains("hidden")) {
    hideAll();
    portfolio.classList.remove("hidden");
  }
});

button_project.addEventListener("click", function () {});

button_blog.addEventListener("click", function () {});

button_contact.addEventListener("click", function () {});
