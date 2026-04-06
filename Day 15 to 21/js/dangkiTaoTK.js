const taoTK = document.getElementById("dangkiTaoTK");

if (taoTK) {
    taoTK.addEventListener("click", async () => {

        const hoten = document.getElementById("hoten").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const xnPass = document.getElementById("xnPass").value.trim();

        if (!hoten || !username || !password || !xnPass) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (password !== xnPass) {
            alert("Mật khẩu không khớp!");
            return;
        }

        const newUser = {
            FullName: hoten,   // 🔥 FIX QUAN TRỌNG
            userName: username,
            pass: password
        };

        try {
            taoTK.disabled = true;
            taoTK.innerText = "ĐANG XỬ LÝ...";

            await add(URL_PROFILE, newUser);

            alert("Đăng ký thành công!");
            window.location.href = "LogIn.html";

        } catch (error) {
            console.error(error);
            alert("Lỗi server!");
            taoTK.disabled = false;
            taoTK.innerText = "ĐĂNG KÍ";
        }
    });
}