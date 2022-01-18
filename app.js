let toggleBtn = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", function () {
  menu.classList.add("is-shown");
  overlay.classList.remove("display-none");
});

overlay.addEventListener("click", function () {
  menu.classList.remove("is-shown");
  overlay.classList.add("display-none");
});

menu.addEventListener("click", function () {
  menu.classList.remove("is-shown");
  overlay.classList.add("display-none");
});
