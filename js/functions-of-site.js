function toggleDropDown() {

    const bb = document.getElementById("the-drop-down-menu-container");
    const cc = window.getComputedStyle(bb);

    if (cc.opacity == "0") {

        bb.style.opacity = "1";
    } else {
        
        bb.style.opacity = "0";
    }
}