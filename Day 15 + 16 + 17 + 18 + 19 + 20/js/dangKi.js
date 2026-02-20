function togglePassword(inputId, iconSpan) {
    var input = document.getElementById(inputId);
    var icon = iconSpan.querySelector('i');
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
};

const dangKidn = document.getElementById("dangKidn");
dangKidn.addEventListener("click", () => {
    location.href = "Register.html";
});
