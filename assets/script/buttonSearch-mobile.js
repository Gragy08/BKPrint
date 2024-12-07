const buttonSerFil = document.querySelectorAll("[button-SerFil]");
if (buttonSerFil) {
    buttonSerFil.forEach(button => {
        button.addEventListener("click", () => {
            const body = document.querySelector("body");

            const elementDelete = document.createElement("div");
            elementDelete.classList.add("modal");

            elementDelete.innerHTML = `
                <div class="modal__main">
                    <button class="modal__close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="modal__content">
                        <div class="content">
                            Tìm máy in
                        </div>
                        <form class="mobile__form" action="#">
                            <input name="keyword" placeholder="Tìm máy in">
                            <button aria-label="x"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <div class="box-filter" id="status-filter"> 
                            <div class="box-filter__title">
                                <i class="fa-solid fa-filter"></i>
                                <div class="box-filter__title__inner">Bộ lọc</div>
                            </div>
                            <div class="box-filter__group"> 
                                <div class="box-filter__group-label">Trạng thái</div>
                                <div class="box-filter__group-list"> 
                                    <div class="box-filter__group-item"> 
                                        <input type="checkbox" id="active-mobile" value="Đang hoạt động" aria-label="active">
                                        <label for="active-mobile">Đang hoạt động</label>
                                    </div>
                                    <div class="box-filter__group-item"> 
                                        <input type="checkbox" id="inactive-mobile" value="Không hoạt động" aria-label="passive">
                                        <label for="inactive-mobile">Không hoạt động</label>
                                    </div>
                                    <div class="box-filter__group-item"> 
                                        <input type="checkbox" id="maintance-mobile" value="Đang bảo trì" aria-label="maintenance">
                                        <label for="maintance-mobile">Đang bảo trì</label>
                                    </div>
                                    <div class="box-filter__group-item"> 
                                        <input type="checkbox" id="erroring-mobile" value="Đang bị lỗi" aria-label="erroring">
                                        <label for="erroring-mobile">Đang bị lỗi</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal__content__bottom">
                            <button class="modal__bottom--confirm button">Xác nhận</button>
                        </div>

                    </div>
                </div>
                <div class="modal__overlay"></div>
            `;

            body.appendChild(elementDelete);

            const buttonClose = elementDelete.querySelector(".modal__close");
            const buttonOverlay = elementDelete.querySelector(".modal__overlay");
            const buttonConfirm = elementDelete.querySelector(".modal__bottom--confirm");

            // Đóng modal
            const closeModal = () => {
                body.removeChild(elementDelete);
            };
            buttonClose.addEventListener("click", closeModal);
            buttonOverlay.addEventListener("click", closeModal);
            buttonConfirm.addEventListener("click", () => {
                body.removeChild(elementDelete);
            });

            // Hàm tìm kiếm máy in
            const modalFormSearch = elementDelete.querySelector(".mobile__form");
            if (modalFormSearch) {
                modalFormSearch.addEventListener("submit", (event) => {
                    event.preventDefault();
                    const keyword = modalFormSearch.keyword.value.trim(); // Lấy giá trị tìm kiếm

                    axios.get(`http://localhost:3000/printers?q=${keyword}`)
                        .then(res => {
                            let htmls = "";

                            for (const item of res.data) {
                                htmls += `
                                    <div class="product-item">
                                        <a href="product-detail.html?id=${item.id}">
                                            <div class="product-item__image">
                                                <img src="${item.image}" alt="${item.name}" />
                                            </div>
                                            <div class="product-item__content">
                                                <h3 class="product-item__title">${item.name} - ${item.place}</h3>
                                                <div class="product-item__info">
                                                    <div class="product-item__info-item">Chức năng: <b>${item.function}</b></div>
                                                    <div class="product-item__info-item">Khả năng: <b>${item.ability}</b></div>
                                                    <div class="product-item__status ${getStatusClass(item.status)}">${item.status}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                `;
                            }

                            // Đưa kết quả vào danh sách sản phẩm
                            
                            closeModal();
                            const elementProductList = document.querySelector("#product-list");
                            if (elementProductList) {
                                elementProductList.innerHTML = htmls;
                            }
                        })
                        .catch(error => {
                            console.error("Lỗi khi tìm kiếm máy in:", error);
                        });
                });
            }

            // Hàm bộ lọc trạng thái
            const filterContainer = elementDelete.querySelector("#status-filter");
            if (filterContainer) {
                const checkboxes = filterContainer.querySelectorAll("input[type='checkbox']");

                function filterPrinters() {
                    const selectedStatuses = Array.from(checkboxes)
                        .filter(checkbox => checkbox.checked)
                        .map(checkbox => checkbox.value.trim());

                    axios.get("http://localhost:3000/printers")
                        .then(res => {
                            let filteredData;

                            if (selectedStatuses.length === 0) {
                                // Không chọn gì => hiển thị tất cả
                                filteredData = res.data;
                            } else {
                                // Lọc dữ liệu dựa trên trạng thái
                                filteredData = res.data.filter(item => selectedStatuses.includes(item.status));
                            }

                            // Render danh sách máy in đã lọc
                            let htmls = "";
                            for (const item of filteredData) {
                                htmls += `
                                    <div class="product-item">
                                        <a href="product-detail.html?id=${item.id}">
                                            <div class="product-item__image">
                                                <img src="${item.image}" alt="${item.name}" />
                                            </div>
                                            <div class="product-item__content">
                                                <h3 class="product-item__title">${item.name} - ${item.place}</h3>
                                                <div class="product-item__info">
                                                    <div class="product-item__info-item">Chức năng: <b>${item.function}</b></div>
                                                    <div class="product-item__info-item">Khả năng: <b>${item.ability}</b></div>
                                                    <div class="product-item__status ${getStatusClass(item.status)}">${item.status}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                `;
                            }

                            const elementProductList = document.querySelector("#product-list");
                            if (elementProductList) {
                                elementProductList.innerHTML = htmls;
                            }
                        })
                        .catch(error => {
                            console.error("Lỗi khi lọc máy in:", error);
                        });
                }

                // Gắn sự kiện thay đổi cho checkbox
                checkboxes.forEach(checkbox => checkbox.addEventListener("change", filterPrinters));
            }
        });
    });
}
