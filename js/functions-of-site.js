function toggleDropDown() {

    const bb = document.getElementById("the-drop-down-menu-container");
    const cc = window.getComputedStyle(bb);

    if (cc.top == "-500px") {

        bb.style.top = "0";
    }

    else {

        bb.style.top = "-500px";
    }
}