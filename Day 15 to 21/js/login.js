function toggleLoginPassword() {
    const input = document.getElementById('passwordLogin');
    const icon = document.querySelector('.input-group-text i');

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
function logIn() {
    const dangNhap = document.getElementById("dangNhap");

    if (dangNhap) {
        dangNhap.addEventListener("click", async () => {
            const taiKhoan = document.getElementById("userLogin").value.trim();
            const password = document.getElementById("passwordLogin").value.trim();

            if (!taiKhoan || !password) {
                alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
                return;
            }

            // Đổi text để báo hiệu đang tải
            dangNhap.innerText = "ĐANG ĐĂNG NHẬP...";
            dangNhap.disabled = true;

            try {
                // Kéo toàn bộ data từ db.json key profile
                const data = await getData(URL_PROFILE);
                
                // So sánh
                const checkTK = data.find(user => user.userName === taiKhoan && user.pass === password);
                
                if (!checkTK) {
                    alert("Tên đăng nhập hoặc mật khẩu không đúng !!!");
                    dangNhap.innerText = "ĐĂNG NHẬP";
                    dangNhap.disabled = false;
                    return;
                }

                alert("Đăng nhập thành công!");
                location.href = "Home.html";

            } catch (error) {
                console.error("Lỗi khi fetch user:", error);
                alert("Lỗi kết nối đến máy chủ!");
                dangNhap.innerText = "ĐĂNG NHẬP";
                dangNhap.disabled = false;
            }
        });
    }
}
logIn();


// Đăng nhập tại đăng kí
function logIn2() {
    const dangnhap = document.getElementById("dangNhapdk");
    if (dangnhap) {
        dangnhap.addEventListener("click", () => {
            location.href = "LogIn.html";
        })
    }
}
logIn2();



// function logOut() {
//     const logOut = document.getElementById("logOut");
//     logOut.addEventListener("click", () => {
//         location.href = "LogIn.html";
//     })
// }
// logOut();

