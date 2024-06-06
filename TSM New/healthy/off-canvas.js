const sideLinks = document.querySelectorAll(
  ".sidebar .side-menu li a:not(.logout)"
);

sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const menuBar = document.querySelector(".content header .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

// Make the select element hide or show the select element
const theSelect = document.getElementById("theSelect");
const theHid = document.getElementById("theHid");

theSelect.addEventListener("change", function (event) {
  if (event.target.value === "hide") {
    theHid.style.visibility = "hidden";
  } else if (event.target.value === "show") {
    theHid.style.visibility = "visible";
  }
});
