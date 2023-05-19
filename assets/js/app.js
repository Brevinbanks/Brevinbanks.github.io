// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#back-to-top");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// click in the body of the html file
const bodyselect = document.body;

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);



// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Close hamburger menu when the body is clicked
bodyselect.addEventListener("click", () => {
  ul.classList.remove("show");
}, true);

