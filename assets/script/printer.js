// // Hiển thị thông báo
// const showAlert = (content = null, time = 3000, type = "alert--success") => {
//     if(content) {
//         const newAlert = document.createElement("div");
//         newAlert.setAttribute("class", `alert ${type}`);
    
//         newAlert.innerHTML = `
//             <span class="alert__content">${content}</span>
//             <span class="alert__close">
//             <i class="fa-solid fa-xmark"></i>
//             </span>
//         `;
    
//         const alertList = document.querySelector(".alert-list");
    
//         alertList.appendChild(newAlert);
    
//         const alertClose = newAlert.querySelector(".alert__close");
        
//         alertClose.addEventListener("click", () => {
//             alertList.removeChild(newAlert);
//         })
        
//         setTimeout(() => {
//             alertList.removeChild(newAlert);
//         }, time)
//     }
// }
// // Hết Hiển thị thông báo

//Vẽ ra giao diện từ database
const elementProductList = document.querySelector("#product-list");
if(elementProductList) {
    axios.get("http://localhost:3000/printers")
    .then(res => {
        let htmls = "";

        for (const item of res.data) {
            htmls += `
                <div class="product-item">
                    <a href="product-detail.html">
                        <div class="product-item__image">
                            <img src=${item.image} alt=${item.title} />
                        </div>
                        <div class="product-item__content">
                            <h3 class="product-item__title"> ${item.title} </h3>
                            <div class="product-item__info">
                                <div class="product-item__info-item"> Chức năng: <b> ${item.function} </b> </div>
                                <div class="product-item__info-item"> Khả năng: <b> ${item.ability} </b> </div>
                                <div class="product-item__status status--active"> ${item.status} </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }

        
        elementProductList.innerHTML = htmls;
    })
}
//Hết Vẽ ra giao diện từ database

const formCreate = document.querySelector("#form-create");
if(formCreate) {
    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();

        const code = formCreate.code.value;
        const printLaser = formCreate.getElementById("printLaser").checked;
        const colorInkjet = formCreate.getElementById("colorInkjet").checked;
        const singleSideBW = formCreate.getElementById("singleSideBW").checked;
        const doubleSideBW = formCreate.getElementById("doubleSideBW").checked;
        const singleSideC = formCreate.getElementById("singleSideC").checked;
        const Copy = formCreate.getElementById("Copy").checked;
        const scanBW = formCreate.getElementById("scanBW").checked;
        const scanC = formCreate.getElementById("scanC").checked;
        const speed = formCreate.speed.value;
        const active = formCreate.getElementById("active").checked;
        const inactive = formCreate.getElementById("inactive").checked;
        const description = formCreate.description.value;

        //In ra cảnh báo nếu chưa nhập hết...

        const data = {
            code: code,
            
        };

    })
}