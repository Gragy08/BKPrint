// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header__menu-mobile");
if(buttonMenuMobile) {
    const menu = document.querySelector(".header__menu");
    const overlay = menu.querySelector(".header .inner-overlay");

    buttonMenuMobile.onclick = () => {
        menu.setAttribute("show", "yes");
    }

    overlay.onclick = () => {
        menu.setAttribute("show", "");
    }
}
// End Button Menu Mobile