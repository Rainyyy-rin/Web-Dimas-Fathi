const search = document.querySelector(".search-container");
const menuButton = document.getElementById("menuButton");
const menuPanel = document.getElementById("menuPanel");

menuButton.addEventListener("click", () => {
    menuPanel.classList.toggle("show");
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        search.classList.add("floating");
    } else {
        search.classList.remove("floating");
    }
});