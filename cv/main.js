"use strict";

const printButton = document.querySelector("#printCv");

if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.setAttribute("rel", "noopener noreferrer");
});
