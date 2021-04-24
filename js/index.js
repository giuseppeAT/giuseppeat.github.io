document.querySelector("#lastmod").textContent = document.lastModified;

try {
  let options = {
    year: "numeric",
  };
  document.getElementById(
    "theyear"
  ).textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}
