// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika elektronik menu di klik
document.querySelector("#elektronik-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const elektronik = document.querySelector("#elektronik-menu");

document.addEventListener("click", function (e) {
  if (!elektronik.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
