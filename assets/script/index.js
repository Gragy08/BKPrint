//PRODUCT-DETAIL_button--add

//
const showadd = () => {
    const body = document.querySelector("body");

    const elementadd = document.createElement("div");
    elementadd.classList.add("modal");

    elementadd.innerHTML = `
        <div class="modal__main">
            <button class="modal__close">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="modal__content">
                Noi dung...
            </div>
        </div>
        <div class="modal__overlay">
        </div>
    `;

    body.appendChild(elementadd);

    const buttonClose = elementadd.querySelector(".modal__close");
    const buttonOverlay = elementadd.querySelector(".modal__overlay");

    buttonClose.addEventListener("click", () => {
        body.removeChild(elementadd);
    })
    buttonOverlay.addEventListener("click", () => {
        body.removeChild(elementadd);
    })
}

const buttonadd = document.querySelector(".button--add");
if (buttonadd) {
    buttonadd.addEventListener("click", () => {
        showadd();
    })
    // listButtonadd.forEach(button => {
    //     button.addEventListener("click", () => {
    //         showadd();
    //     })
    // })
}
//END PRODUCT-DETAIL_button--add

// // Button Menu Mobile
// const buttonMenuMobile = document.querySelector(".header__menu-mobile");
// if(buttonMenuMobile) {
//     const menu = document.querySelector(".header__menu");
//     const overlay = menu.querySelector(".header .inner-overlay");

//     buttonMenuMobile.onclick = () => {
//         menu.setAttribute("show", "yes");
//     }

//     overlay.onclick = () => {
//         menu.setAttribute("show", "");
//     }
// }
// // End Button Menu Mobile