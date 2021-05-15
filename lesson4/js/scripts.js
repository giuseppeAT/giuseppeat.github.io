const button = document.querySelector(".menu");
const mainnav = document.querySelector(".navigation");

button.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};


/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */



document.querySelector("#lastmod").textContent = document.lastModified;

try {
  let options = {
    year: "numeric",
  };
  document.getElementById("theyear").textContent =
    new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

const datefield = document.querySelector("date")

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(now);

datefield.textContent = fulldate;
