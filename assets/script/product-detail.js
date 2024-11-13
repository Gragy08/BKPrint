//JS CHO TRANG PRODUCT-DETAIL VA TRANG EDIT PRINTER


// Hiển thị thông báo
const showAlert = (content = null, time = 3000, type = "alert--success") => {
    if(content) {
        const newAlert = document.createElement("div");
        newAlert.setAttribute("class", `alert ${type}`);
    
        newAlert.innerHTML = `
            <span class="alert__content">${content}</span>
            <span class="alert__close">
            <i class="fa-solid fa-xmark"></i>
            </span>
        `;
    
        const alertList = document.querySelector(".alert-list");
    
        alertList.appendChild(newAlert);
    
        const alertClose = newAlert.querySelector(".alert__close");
        
        alertClose.addEventListener("click", () => {
            alertList.removeChild(newAlert);
        })
        
        setTimeout(() => {
            alertList.removeChild(newAlert);
        }, time)
    }
}
// Hết Hiển thị thông báo


// Hàm show confirm của nút xóa - PRODUCT-DETAIL PAGE
// const showConfirmDelete = () => {
//     const body = document.querySelector("body");

//     const elementDelete = document.createElement("div");
//     elementDelete.classList.add("modal");

//     elementDelete.innerHTML = `
//         <div class="modal__main">
//             <button class="modal__close">
//                 <i class="fa-solid fa-xmark"></i>
//             </button>
//             <div class="modal__content">
//                 <div class="modal__content__top">
//                     <div class="modal__content__top--icon"><i class="fa-solid fa-circle-exclamation"></i></div>
//                     <div class="modal__content__top--title">Bạn có chắc muốn xóa?</div>
//                     <div class="modal__content__top--desc">Đây là hành động không thể hoàn tác!</div>
//                 </div>
//                 <div class="modal__content__bottom">
//                     <button class="modal__bottom--No button-outline">Hủy</button>
//                     <button class="modal__bottom--Yes button">Có, hãy xóa nó!</button>
//                 </div>
//             </div>
//         </div>
//         <div class="modal__overlay">
//         </div>
//     `;

//     body.appendChild(elementDelete);

//     const buttonClose = elementDelete.querySelector(".modal__close");
//     const buttonOverlay = elementDelete.querySelector(".modal__overlay");
//     const buttonNo = elementDelete.querySelector(".modal__bottom--No");

//     buttonClose.addEventListener("click", () => {
//         body.removeChild(elementDelete);
//     })
//     buttonOverlay.addEventListener("click", () => {
//         body.removeChild(elementDelete);
//     })
//     buttonNo.addEventListener("click", () => {
//         body.removeChild(elementDelete);
//     })
// }
//  Hết Hàm show confirm của nút xóa - PRODUCT-DETAIL PAGE


// Hàm set cookies
const setCookie = (name, value, seconds) => {
    const expires = secondss ? `expires=${new Date(Date.now() +
    seconds * 1000).toUTCString()};` : '';
    document.cookie = `${name}=${value}; ${expires}`;
}
// Hết Hàm set cookies


// Hàm Get Cookie
const getCookie = (cookieName) => {
    // Tách chuỗi thành một mảng các cặp name/value
    let cookieArray = document.cookie.split("; ");
    // Chuyển name/value từ dạng string thành object
    cookieArray = cookieArray.map(item => {
    item = item.split("=");
    return {
    name: item[0],
    value: item[1]
    };
    });
    // Lấy ra cookie đang cần tìm
    const cookie = cookieArray.find(item => {
    return item.name === cookieName;
    });
    return cookie ? cookie.value : null; 
}
// Hết Hàm Get Cookie


// Bắt sự kiện cho phần xóa máy in
const eventButtonDelete = () => {
    const buttonDelete = document.querySelector("[button-delete]");
    console.log(buttonDelete);
    buttonDelete.addEventListener("click" ,() => {
        const id = buttonDelete.getAttribute("button-delete");
        
        const body = document.querySelector("body");

        const elementDelete = document.createElement("div");
        elementDelete.classList.add("modal");

        elementDelete.innerHTML = `
            <div class="modal__main">
                <button class="modal__close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="modal__content">
                    <div class="modal__content__top">
                        <div class="modal__content__top--icon"><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="modal__content__top--title">Bạn có chắc muốn xóa?</div>
                        <div class="modal__content__top--desc">Đây là hành động không thể hoàn tác!</div>
                    </div>
                    <div class="modal__content__bottom">
                        <button class="modal__bottom--No button-outline">Hủy</button>
                        <button class="modal__bottom--Yes button">Có, hãy xóa nó!</button>
                    </div>
                </div>
            </div>
            <div class="modal__overlay">
            </div>
        `;

        body.appendChild(elementDelete);

        const buttonClose = elementDelete.querySelector(".modal__close");
        const buttonOverlay = elementDelete.querySelector(".modal__overlay");
        const buttonNo = elementDelete.querySelector(".modal__bottom--No");

        buttonClose.addEventListener("click", () => {
            body.removeChild(elementDelete);
        })
        buttonOverlay.addEventListener("click", () => {
            body.removeChild(elementDelete);
        })
        buttonNo.addEventListener("click", () => {
            body.removeChild(elementDelete);
        })

        const buttonYes = elementDelete.querySelector(".modal__bottom--Yes");

        buttonYes.addEventListener("click", () => {

            axios.delete(`http://localhost:3000/printers/${id}`)
                .then(res => {  
                    
                    window.location.href = "printer.html"; 
                    const alert = "showSuccess";
                    setCookie("alert", "showSuccess", 10); 
                })
        })
    })
}
// Hết Bắt sự kiện cho phần xóa máy in


//  Vẽ ra giao diện trang - PRODUCT-DETAIL PAGE
const elementProductDetail = document.querySelector("#product-detail");
if(elementProductDetail) {

    const params = new URL(window.location.href).searchParams;
    const id = params.get("id");

    axios.get(`http://localhost:3000/printers/${id}`)
    .then(res => {
        let htmls = "";
        const place = res.data.place;
        const name = res.data.name;
        const image = res.data.image;
        const functionP = res.data.function;
        const ability = res.data.ability;
        const speed = res.data.speed;
        const description = res.data.description;
        const status = res.data.status;

        htmls += `
            <div class="section-3__images"> 
                <div class="section-3__image-main"> 
                    <img src="${image}" alt="Printer">
                </div>
            </div>
            <div class="section-3__content"> 
                <div class="breadcrumb">
                    <nav class="breadcrumb__wrap">
                        <ul>
                            <li> 
                                <a href="index.html">Trang chủ</a>
                            </li>
                            <li> 
                                <a href="printer.html">Máy in</a>
                            </li>
                            <li> 
                                <a class="last" href="#">Máy in ${place} </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1 class="section-3__title">Máy in ${place} </h1>
                <div class="section-3__price">${name}</div>
                <div class="section-3__buttons"> 
                    <a class="button-outline" href="../edit-printer.html?id=${id}">Chỉnh sửa</a>
                    <button class="button button--delete" button-delete="${id}">Xóa máy in</button>
                </div>
                <div class="section-3__table"> 
                    <table> 
                        <tbody> 
                            <tr> 
                                <td class="attribute">Chức năng</td>
                                <td>${functionP}</td>
                            </tr>
                            <tr> 
                                <td class="attribute">Khả năng</td>
                                <td>${ability}</td>
                            </tr>
                            <tr> 
                                <td class="attribute">Tốc độ</td>
                                <td>${speed} trang / 1 phút</td>
                            </tr>
                            <tr> 
                                <td class="attribute">Trạng thái</td>
                                <td class="status--active">${status}</td>
                            </tr>
                            <tr> 
                                <td class="attribute">Mô tả ngắn</td>
                                <td>${description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        elementProductDetail.innerHTML = htmls;

        //Hàm sự kiện của nút xóa
        eventButtonDelete();
    })
}
//  Hết Vẽ ra giao diện trang - PRODUCT-DETAIL PAGE


// Vẽ ra giao diện trang EDIT PRINTER breadcrumb
const elementBreadcrumb = document.querySelector("#breadcrumb-list");
if(elementBreadcrumb) {
    const params = new URL(window.location.href).searchParams;
    const id = params.get("id");

    axios.get(`http://localhost:3000/printers/${id}`)
    .then(res => {
        let htmls = "";
        const place = res.data.place;

        htmls += `
            <ul>
                <li> <a href="index.html">Trang chủ</a></li>
                <li> <a href="printer.html">Máy in</a></li>
                <li> <a href="product-detail.html?id=${id}">Máy in ${place} </a></li>
                <li> <a class="last" href="#">Chỉnh sửa máy in</a></li>
            </ul>
        `;

        elementBreadcrumb.innerHTML = htmls;
    })
}
// HẾt Vẽ ra giao diện trang EDIT PRINTER breadcrumb


// Vẽ ra giao diện trang EDIT PRINTER nút quay lại trang trước
const elementBackPageButton = document.querySelector("#backPage");
if(elementBackPageButton) {
    const params = new URL(window.location.href).searchParams;
    const id = params.get("id");

    axios.get(`http://localhost:3000/printers/${id}`)
    .then(res => {
        let htmls = "";

        htmls += `
            <a class="button-outline" href="product-detail.html?id=${id}"><i class="fa-solid fa-arrow-left-long"></i>Trở lại trang trước</a>
        `;

        elementBackPageButton.innerHTML = htmls;
    })
}
// Hết Vẽ ra giao diện trang EDIT PRINTER nút quay lại trang trước


//  Đổ data của máy in muốn chỉnh sửa ra giao diện
const formEdit = document.querySelector("#form-edit");
if(formEdit) {
    const params = new URL(window.location.href).searchParams;
    const id = params.get("id");
    axios.get(`http://localhost:3000/printers/${id}`)
        .then(res => {
            //Đổ data ra

            //Tên máy in
            formEdit.name.value = res.data.name;
            //Địa điểm máy in
            formEdit.place.value = res.data.place;
            
            //Chức năng máy in
            if(res.data.function == "In Laser") {
                formEdit.printLaser.checked = true;
            }
            if(res.data.function == "In phun màu") {
                formEdit.colorInkjet.checked = true;
            }

            //Tốc độ
            formEdit.speed.value = res.data.speed;

            //Khả năng
            //cần chuyển mảng thành phần tử

            console.log(res.data.ability);
            console.log(res.data.ability.length);

            // for(let i=0; i < res.data.ability.length; i++) {
            //     let countA = 1;
            //     if(res.data.ability[i] == ",") {
            //         countA += 1;
            //     }

            //     for(let j=0; j < countA; j++) {
            //         // tạo số biến tương ứng, giá trị của mỗi biến tương ứng với giá trị của phần tử trong mảng
            //     }
            // }

            let abilitiesArray = res.data.ability.split(", ");

            // Đối tượng để lưu các biến động
            let variables = {};

            // Lặp qua mảng và gán giá trị của từng phần tử vào các biến động trong đối tượng variables
            for (let i = 0; i < abilitiesArray.length; i++) {
                // Tạo tên biến động theo thứ tự var1, var2, ...
                variables[`var${i + 1}`] = abilitiesArray[i];
            }

            // Kiểm tra kết quả
            console.log(variables.var1); // "Copy"
            console.log(variables.var2); // "Scan(màu)"
            console.log(variables.var3); // "In 1 mặt-in màu"
            console.log(variables);

            for (let key in variables) {
                if (variables[key] === "In 1 mặt-trắng đen") {
                    formEdit.singleSideBW.checked = true;
                }
                if (variables[key] === "In 2 mặt tự động-trắng đen") {
                    formEdit.doubleSideBW.checked = true;
                }
                if (variables[key] === "In 1 mặt-in màu") {
                    formEdit.singleSideC.checked = true;
                }
                if (variables[key] === "Copy") {
                    formEdit.Copy.checked = true;
                }
                if (variables[key] === "Scan(Trắng đen)") {
                    formEdit.scanBW.checked = true;
                }
                if (variables[key] === "Scan(Màu)") {
                    formEdit.scanC.checked = true;
                }
            }

            // if(res.data.ability == "In 1 mặt-trắng đen") {
            //     formEdit.singleSideBW.checked = true;
            // }
            // if(res.data.ability == "In 2 mặt tự động-trắng đen") {
            //     formEdit.doubleSideBW.checked = true;
            // }
            // if(res.data.ability == "In 1 mặt-in màu") {
            //     formEdit.singleSideC.checked = true;
            // }
            // if(res.data.ability == "Copy") {
            //     formEdit.Copy.checked = true;
            // }
            // if(res.data.ability == "Scan(Trắng đen)") {
            //     formEdit.scanBW.checked = true;
            // }
            // if(res.data.ability == "Scan(Màu)") {
            //     formEdit.scanC.checked = true;
            // }

            //Trạng thái
            if(res.data.status == "Đang hoạt động") {
                formEdit.active.checked = true;
            }
            if(res.data.status == "Không hoạt động") {
                formEdit.inactive.checked = true;
            }
            if(res.data.status == "Đang bảo trì") {
                formEdit.maintenance.checked = true;
            }
            if(res.data.status == "Đang bị lỗi") {
                formEdit.erroring.checked = true;
            }

            //Mô tả
            formEdit.description.value = res.data.description;

            //Hết Đổ data ra


            //Sự kiện submit
            formEdit.addEventListener("submit", (event) => {
                event.preventDefault();
        
                // Lấy giá trị của các thuộc tính máy in
                const name = formEdit.name.value;
                const place = formEdit.place.value;
                const functionPrint = Array.from(event.target.functionPrint);
                const checkedFunc = functionPrint.filter((item) => item.checked === true);
                const ability = Array.from(event.target.ability);
                const checkedAbility = ability.filter((item) => item.checked === true);
                const speed = formEdit.speed.value;
                const status = Array.from(event.target.status);
                const checkedStatus = status.filter((item) => item.checked === true);
                const description = formEdit.description.value;
        
                // // Lấy ảnh (nếu có)
                // const imageInput = formCreate.imageOfPrinter;
                // let image = null;
                // let imageURL = "https://i.imgur.com/zqCxoN3.jpeg"; // Đường dẫn ảnh mặc định
        
                // if (imageInput.files && imageInput.files[0]) {
                //     image = imageInput.files[0];
                    
                //     // Nếu có ảnh, chuyển ảnh thành URL
                //     const reader = new FileReader();
                //     reader.onload = function(e) {
                //         imageURL = e.target.result; // URL của ảnh do người dùng tải lên
                //         console.log(data); // In ra toàn bộ data bao gồm URL ảnh nếu có
                //     };
                //     reader.readAsDataURL(image);
                // }
        
                // In ra cảnh báo
                if(!name) {
                    showAlert("Vui lòng nhập tên máy in!", 3000, "alert--error");
                    return;
                }
                if(!place) {
                    showAlert("Vui lòng nhập nơi đặt máy in!", 3000, "alert--error");
                    return;
                }
                if(checkedFunc.length === 0) {
                    showAlert("Vui lòng chọn chức năng máy in!", 3000, "alert--error");
                    return;
                }
                if(checkedAbility.length === 0) {
                    showAlert("Vui lòng chọn khả năng máy in!", 3000, "alert--error");
                    return;
                }
                if(!speed) {
                    showAlert("Vui lòng nhập tốc độ của máy in!", 3000, "alert--error");
                    return;
                }
                if(checkedStatus.length === 0) {
                    showAlert("Vui lòng chọn trạng thái máy in!", 3000, "alert--error");
                    return;
                }
                if(!description) {
                    showAlert("Vui lòng nhập mô tả máy in!", 3000, "alert--error");
                    return;
                }
        
                // Đối tượng data với thuộc tính image
                const data = {
                    place: place,
                    name: name,
                    // image: image || imageURL, // Nếu không có ảnh, sử dụng ảnh mặc định
                    function: checkedFunc[0].value,
                    // function: checkedFunc,
                    ability: checkedAbility.map(item => item.value).join(", "),
                    // ability: checkedAbility,
                    speed: speed,
                    description: description,
                    status: checkedStatus[0].value
                    // status: checkedStatus
                    // imageURL: imageURL // URL của ảnh hoặc ảnh mặc định
                };
        
                axios.patch(`http://localhost:3000/printers/${id}`, data)
                .then(res => {
                    showAlert("Chỉnh sửa máy in thành công!");
                })
            });
            //Hết Sự kiện submit
        })
}
//  Hết Đổ data của máy in muốn chỉnh sửa ra giao diện