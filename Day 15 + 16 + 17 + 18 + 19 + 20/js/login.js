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

const dangNhap = document.getElementById("dangNhap");
dangNhap.addEventListener("click", async () => {

    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const data =  await getData(URL_PROFILE);

    if(email != data.email || password != data.pass) {
        alert("email hoac mat khau khong khop !!!");
        return;
    }
    location.href = "Home.html";
})

