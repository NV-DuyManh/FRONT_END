const btnEdit = document.getElementById("btnEdit");

let isEditing = false;

btnEdit.addEventListener("click", () => {
    const email = document.querySelector(".email p");
    const phone = document.querySelector(".phone p");
    const address = document.querySelector(".address p");
    const birth = document.querySelector(".birth p");

    if (!isEditing) {
        email.innerHTML = `<input value="${email.innerText}">`;
        phone.innerHTML = `<input value="${phone.innerText}">`;
        address.innerHTML = `<input value="${address.innerText}">`;
        birth.innerHTML = `<input value="${birth.innerText}">`;

        btnEdit.innerText = "Save";
        isEditing = true;
    } else {
        const newEmail = document.querySelector(".email input").value;
        const newPhone = document.querySelector(".phone input").value;
        const newAddress = document.querySelector(".address input").value;
        const newBirth = document.querySelector(".birth input").value;

        email.innerText = newEmail;
        phone.innerText = newPhone;
        address.innerText = newAddress;
        birth.innerText = newBirth;

        // 🔥 LƯU VÀO LOCAL
        const user = {
            email: newEmail,
            phone: newPhone,
            address: newAddress,
            birth: newBirth
        };

        localStorage.setItem("userInfo", JSON.stringify(user));

        btnEdit.innerText = "Edit";
        isEditing = false;
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
        document.querySelector(".email p").innerText = user.email;
        document.querySelector(".phone p").innerText = user.phone;
        document.querySelector(".address p").innerText = user.address;
        document.querySelector(".birth p").innerText = user.birth;
    }
});