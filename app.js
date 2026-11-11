const menuButton = document.getElementById("menu-button");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const menuIsOpen = navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", menuIsOpen);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}
