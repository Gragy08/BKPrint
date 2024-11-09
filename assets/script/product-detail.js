//PRODUCT-DETAIL_FIX
const showFix = () => {
    const body = document.querySelector("body");

    const elementFix = document.createElement("div");
    elementFix.classList.add("modal");

    elementFix.innerHTML = `
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

    body.appendChild(elementFix);

    const buttonClose = elementFix.querySelector(".modal__close");
    const buttonOverlay = elementFix.querySelector(".modal__overlay");

    buttonClose.addEventListener("click", () => {
        body.removeChild(elementFix);
    })
    buttonOverlay.addEventListener("click", () => {
        body.removeChild(elementFix);
    })
}

const buttonFix = document.querySelector(".button--delete");
if (buttonFix) {
    buttonFix.addEventListener("click", () => {
        showFix();
    })
    // listButtonFix.forEach(button => {
    //     button.addEventListener("click", () => {
    //         showFix();
    //     })
    // })
}