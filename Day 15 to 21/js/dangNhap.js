function logIn2() {
    const dangnhap = document.getElementById("dangNhapdk");
    if (dangnhap) {
        dangnhap.addEventListener("click", () => {
            location.href = "LogIn.html";
        })
    }
}
logIn2();   