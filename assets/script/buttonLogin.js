// Bắt sự kiện đăng nhập đăng xuất cho laptop
document.addEventListener("DOMContentLoaded", () => {
    const buttonLogin = document.getElementById("btnLogin");
    const buttonLogout = document.getElementById("btnLogout");
    const section02 = document.querySelector(".section02");
    const body = document.querySelector("body");


    // Trạng thái đăng nhập từ localStorage
    const checkLoginStatus = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            buttonLogin.style.display = "none";
            buttonLogout.style.display = "block";
            if (section02) {
                section02.innerHTML = `
                    <div class="container">
                        <a href="printer.html" target="_self">
                            <div class="section02__image">
                                <img src="../assets/images/LogoPrinter.png" alt="printer">
                            </div>
                            <div class="section02__content">
                                Đi đến trang Quản lý máy in
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                `;
            }
        } else {
            buttonLogin.style.display = "block";
            buttonLogout.style.display = "none";
            if (section02) {
                section02.innerHTML = ""; // Xóa link trang printer nếu chưa đăng nhập
            }
        }
    };


    // Gọi hàm kiểm tra khi tải trang
    checkLoginStatus();


    // Đăng nhập
    buttonLogin.addEventListener("click", () => {
        const modalLogin = document.createElement("div");
        modalLogin.classList.add("modal");
        modalLogin.innerHTML = `
            <div class="modal__main">
                <button class="modal__close"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal__content">
                    <div class="form__wrap"> 
                        <div class="form__content">Đăng nhập</div>
                        <form id="loginForm" class="form__table"> 
                            <div class="form__table--element">
                                <input class="control" type="text" id="inputEmail" name="hoTen" placeholder="Email@hcmut.edu.vn">
                            </div>
                            <div class="form__table--element">
                                <input class="control" type="password" id="inputPassword" name="diaChiEmail" placeholder="Mật khẩu">
                            </div>
                            <button type="submit" class="button">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal__overlay"></div>
        `;
        body.appendChild(modalLogin);

        const closeButton = modalLogin.querySelector(".modal__close");
        const overlay = modalLogin.querySelector(".modal__overlay");

        // Đóng modal đăng nhập
        const closeModal = () => body.removeChild(modalLogin);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        // Xử lý khi submit form đăng nhập
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("inputEmail").value;
            const passwordInput = document.getElementById("inputPassword").value;

            if (emailInput === "bkprintspso@hcmut.edu.vn" && passwordInput === "bkprint4nguoi") {
                closeModal();
                localStorage.setItem("isLoggedIn", "true"); // Lưu trạng thái đăng nhập
                checkLoginStatus(); // Cập nhật giao diện
            } else {
                alert("Thông tin đăng nhập không chính xác!");
            }
        });
    });
    // Hết đăng nhập


    // Xử lý đăng xuất
    buttonLogout.addEventListener("click", () => {
        const modalLogout = document.createElement("div");
        modalLogout.classList.add("modal");
        modalLogout.innerHTML = `
            <div class="modal__main">
                <button class="modal__close"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal__content">
                    <div class="modal__content__top">
                        <div class="modal__content__top--icon"><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="modal__content__top--title">Bạn có chắc muốn đăng xuất?</div>
                    </div>
                    <div class="modal__content__bottom">
                        <button class="modal__bottom--No button-outline">Không</button>
                        <button class="modal__bottom--Yes button">Có, hãy thực hiện!</button>
                    </div>
                </div>
            </div>
            <div class="modal__overlay"></div>
        `;
        body.appendChild(modalLogout);

        const closeButton = modalLogout.querySelector(".modal__close");
        const overlay = modalLogout.querySelector(".modal__overlay");
        const buttonNo = modalLogout.querySelector(".modal__bottom--No");
        const buttonYes = modalLogout.querySelector(".modal__bottom--Yes");

        // Đóng modal đăng xuất
        const closeModal = () => body.removeChild(modalLogout);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
        buttonNo.addEventListener("click", closeModal);

        // Xử lý khi nhấn "Có, hãy xóa nó!"
        buttonYes.addEventListener("click", () => {
            closeModal();
            localStorage.setItem("isLoggedIn", "false"); // Cập nhật trạng thái đăng xuất
            checkLoginStatus(); // Cập nhật giao diện
        });
    });
    // Hết đăng xuất
});
// Hết Bắt sự kiện đăng nhập đăng xuất cho laptop


// Bắt sự kiện đăng nhập đăng xuất cho mobile
document.addEventListener("DOMContentLoaded", () => {
    const buttonLogin = document.getElementById("btnLogin_mobile");
    const buttonLogout = document.getElementById("btnLogout_mobile");
    const section02 = document.querySelector(".section02");
    const body = document.querySelector("body");


    // Trạng thái đăng nhập từ localStorage
    const checkLoginStatus = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            buttonLogin.style.display = "none";
            buttonLogout.style.display = "block";
            if (section02) {
                section02.innerHTML = `
                    <div class="container">
                        <a href="printer.html" target="_self">
                            <div class="section02__image">
                                <img src="../assets/images/LogoPrinter.png" alt="printer">
                            </div>
                            <div class="section02__content">
                                Đi đến trang Quản lý máy in
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                `;
            }
        } else {
            buttonLogin.style.display = "block";
            buttonLogout.style.display = "none";
            if (section02) {
                section02.innerHTML = ""; // Xóa link trang printer nếu chưa đăng nhập
            }
        }
    };


    // Gọi hàm kiểm tra khi tải trang
    checkLoginStatus();


    // Đăng nhập
    buttonLogin.addEventListener("click", () => {
        const modalLogin = document.createElement("div");
        modalLogin.classList.add("modal");
        modalLogin.innerHTML = `
            <div class="modal__main">
                <button class="modal__close"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal__content">
                    <div class="form__wrap"> 
                        <div class="form__content">Đăng nhập</div>
                        <form id="loginForm" class="form__table"> 
                            <div class="form__table--element">
                                <input class="control" type="text" id="inputEmail" name="hoTen" placeholder="Email@hcmut.edu.vn">
                            </div>
                            <div class="form__table--element">
                                <input class="control" type="password" id="inputPassword" name="diaChiEmail" placeholder="Mật khẩu">
                            </div>
                            <button type="submit" class="button">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal__overlay"></div>
        `;
        body.appendChild(modalLogin);

        const closeButton = modalLogin.querySelector(".modal__close");
        const overlay = modalLogin.querySelector(".modal__overlay");

        // Đóng modal đăng nhập
        const closeModal = () => body.removeChild(modalLogin);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        // Xử lý khi submit form đăng nhập
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const emailInput = document.getElementById("inputEmail").value;
            const passwordInput = document.getElementById("inputPassword").value;

            if (emailInput === "bkprintspso@hcmut.edu.vn" && passwordInput === "bkprint4nguoi") {
                closeModal();
                localStorage.setItem("isLoggedIn", "true"); // Lưu trạng thái đăng nhập
                checkLoginStatus(); // Cập nhật giao diện
            } else {
                alert("Thông tin đăng nhập không chính xác!");
            }
        });
    });
    // Hết đăng nhập


    // Xử lý đăng xuất
    buttonLogout.addEventListener("click", () => {
        const modalLogout = document.createElement("div");
        modalLogout.classList.add("modal");
        modalLogout.innerHTML = `
            <div class="modal__main">
                <button class="modal__close"><i class="fa-solid fa-xmark"></i></button>
                <div class="modal__content">
                    <div class="modal__content__top">
                        <div class="modal__content__top--icon"><i class="fa-solid fa-circle-exclamation"></i></div>
                        <div class="modal__content__top--title">Bạn có chắc muốn đăng xuất?</div>
                    </div>
                    <div class="modal__content__bottom">
                        <button class="modal__bottom--No button-outline">Không</button>
                        <button class="modal__bottom--Yes button">Có, hãy thực hiện!</button>
                    </div>
                </div>
            </div>
            <div class="modal__overlay"></div>
        `;
        body.appendChild(modalLogout);

        const closeButton = modalLogout.querySelector(".modal__close");
        const overlay = modalLogout.querySelector(".modal__overlay");
        const buttonNo = modalLogout.querySelector(".modal__bottom--No");
        const buttonYes = modalLogout.querySelector(".modal__bottom--Yes");

        // Đóng modal đăng xuất
        const closeModal = () => body.removeChild(modalLogout);
        closeButton.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
        buttonNo.addEventListener("click", closeModal);

        // Xử lý khi nhấn "Có, hãy xóa nó!"
        buttonYes.addEventListener("click", () => {
            closeModal();
            localStorage.setItem("isLoggedIn", "false"); // Cập nhật trạng thái đăng xuất
            checkLoginStatus(); // Cập nhật giao diện
        });
    });
    // Hết đăng xuất
});
// Hết Bắt sự kiện đăng nhập đăng xuất cho mobile