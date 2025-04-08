const menu = document.querySelector("#menu");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const filter = document.querySelector("#escuro");

menu.addEventListener("click", function () {
  menuOpen.style =
    "display: flex; transition: .2s; transform: translate(0px);";
  filter.style = "display: block";
});

filter.addEventListener("click", function () {
  menuOpen.style = "transform: translate(440px);";
  filter.style = "display: none";
});

menuClose.addEventListener("click", function () {
  menuOpen.style = "transform: translate(440px); display: none;";
  filter.style = "display: none";
});