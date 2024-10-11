/*=============== SHOW MENU ===============*/
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("nav-close");
// show menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// hidden menu
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
