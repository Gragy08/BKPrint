// JS CHO TRANG PRINTER VA TRANG ADD-PRINTER

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

//Vẽ ra giao diện từ database - PRINTER PAGE
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
                            <img src=${item.image} alt=${item.name} />
                        </div>
                        <div class="product-item__content">
                            <h3 class="product-item__title"> ${item.name} . ${item.place} </h3>
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
//Hết Vẽ ra giao diện từ database - PRINTER PAGE

// const formCreate = document.querySelector("#form-create");
// console.log(formCreate);
// if(formCreate) {
//     formCreate.addEventListener("submit", (event) => {
//         event.preventDefault();

//         //Lấy giá trị của các thuộc tính máy in
//         //Mã
//         const name = formCreate.name.value;
//         //Nơi
//         const place = formCreate.place.value;
//         //Chức năng
//         const functionPrint = Array.from(event.target.functionPrint);
//         const checkedFunc = functionPrint.filter((item) => item.checked === true);
//         //Khả năng
//         const ability = Array.from(event.target.ability);
//         const checkedAbility = ability.filter((item) => item.checked === true);
//         //Tốc độ
//         const speed = formCreate.speed.value;
//         //Trạng thái
//         const status = Array.from(event.target.status);
//         const checkedStatus = status.filter((item) => item.checked === true);
//         //Mô tả
//         const description = formCreate.description.value;

//         //In ra cảnh báo
//         if(!name) {
//             showAlert("Vui lòng nhập tên máy in!", 3000, "alert--error");
//             return;
//         }
//         if(!place) {
//             showAlert("Vui lòng nhập nơi đặt máy in!", 3000, "alert--error");
//             return;
//         }
//         if(checkedFunc.length === 0) {
//             showAlert("Vui lòng chọn chức năng máy in!", 3000, "alert--error");
//             return;
//         }
//         if(checkedAbility.length === 0) {
//             showAlert("Vui lòng chọn khả năng máy in!", 3000, "alert--error");
//             return;
//         }
//         if(!speed) {
//             showAlert("Vui lòng nhập tốc độ của máy in!", 3000, "alert--error");
//             return;
//         }
//         if(checkedStatus.length === 0) {
//             showAlert("Vui lòng chọn trạng thái máy in!", 3000, "alert--error");
//             return;
//         }
//         if(!description) {
//             showAlert("Vui lòng nhập mô tả máy in!", 3000, "alert--error");
//             return;
//         }

//         console.log(name);
//         console.log(place);
//         console.log(checkedFunc);
//         console.log(checkedAbility);
//         console.log(speed);
//         console.log(checkedStatus);
//         console.log(description);

//         const data = {
//             name: name,
//             place: place,
//             function: checkedFunc,
//             ability: checkedAbility,
//             speed: speed,
//             status: status,
//             description: description
//         };
//     })
// }

//Lấy data của người dùng nhập vào form và gửi về database - ADD PRINTER PAGE
const formCreate = document.querySelector("#form-create");
if (formCreate) {
    formCreate.addEventListener("submit", (event) => {
        event.preventDefault();

        // Lấy giá trị của các thuộc tính máy in
        const name = formCreate.name.value;
        const place = formCreate.place.value;
        const functionPrint = Array.from(event.target.functionPrint);
        const checkedFunc = functionPrint.filter((item) => item.checked === true);
        const ability = Array.from(event.target.ability);
        const checkedAbility = ability.filter((item) => item.checked === true);
        const speed = formCreate.speed.value;
        const status = Array.from(event.target.status);
        const checkedStatus = status.filter((item) => item.checked === true);
        const description = formCreate.description.value;

        // Lấy ảnh (nếu có)
        const imageInput = formCreate.imageOfPrinter;
        let image = null;
        let imageURL = "default-image-url.png"; // Đường dẫn ảnh mặc định

        if (imageInput.files && imageInput.files[0]) {
            image = imageInput.files[0];
            
            // Nếu có ảnh, chuyển ảnh thành URL
            const reader = new FileReader();
            reader.onload = function(e) {
                imageURL = e.target.result; // URL của ảnh do người dùng tải lên
                console.log(data); // In ra toàn bộ data bao gồm URL ảnh nếu có
            };
            reader.readAsDataURL(image);
        }

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
            image: image || "default-image-url.png", // Nếu không có ảnh, sử dụng ảnh mặc định
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

        axios.post("http://localhost:3000/printers", data)
        .then(res => {
            showAlert("Tạo máy in mới thành công!");
            formCreate.reset();
        })

        // console.log(data); // In ra toàn bộ data
    });
}
//Hết Lấy data của người dùng nhập vào form và gửi về database - ADD PRINTER PAGE

//Thay đổi tên file-name của người dùng upload - ADD PRINTER PAGE
function updateFileName(input) {
    const fileName = input.files.length > 0 ? input.files[0].name : "No file chosen";
    document.getElementById("file-name").textContent = fileName;
}

//Chèn ảnh người dùng upload thay cho ảnh default - ADD PRINTER PAGE
function updatePrinterImage(input) {
    const file = input.files[0];
    if (file) {
        // Hiển thị tên file đã chọn
        document.getElementById("file-name").textContent = file.name;
        
        // Tạo URL tạm thời cho file ảnh để hiển thị
        const reader = new FileReader();
        reader.onload = function(e) {
            const printerImage = document.getElementById("printerImage");
            printerImage.src = e.target.result; // Cập nhật src của img
        };
        reader.readAsDataURL(file);
    } else {
        document.getElementById("file-name").textContent = "No file chosen";
    }
}