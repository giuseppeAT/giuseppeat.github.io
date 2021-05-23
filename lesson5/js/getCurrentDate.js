const datefield = document.querySelector("date")

const thedate = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(thedate);

datefield.textContent = fulldate;
