const taoTK = document.getElementById("dangkiTaoTK");

taoTK.addEventListener("click", () => {
    const hoten = document.getElementById("hoten").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const xnPass = document.getElementById("xnPass").value.trim();

    if (!hoten || !username || !password || !xnPass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (hoten.length < 2) {
        alert("Họ tên không hợp lệ!");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }

    if (password !== xnPass) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    alert("Đăng ký thành công!");
    location.href = "LogIn.html";
});