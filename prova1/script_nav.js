function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("open");
    console.log("Menu toggled");
}
function closeMenu() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
    }
}