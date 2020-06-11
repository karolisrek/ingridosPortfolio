function ChangeMenuState() {
    const menuElem = document.getElementById("header");
    const btnElem = document.getElementById("burger_menu_btn");

    if (menuElem.classList.contains("open")) {
        menuElem.classList.remove("open");
        btnElem.classList.add("open");
        btnElem.classList.remove("close");
    } else {
        menuElem.classList.add("open");
        btnElem.classList.remove("open");
        btnElem.classList.add("close");
    }
}

function CloseMenu() {
    const menuElem = document.getElementById("header");
    const btnElem = document.getElementById("burger_menu_btn");

    menuElem.classList.remove("open");
    btnElem.classList.add("open");
    btnElem.classList.remove("close");
}