function show() {
    var menu = document.querySelector(".menu");
    if (menu.style.visibility === "hidden") {
        menu.style.visibility = "visible";
    }
    else {
        menu.style.visibility = "hidden";
    }
}