function show() {
    var menu = document.querySelector(".menu");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
}