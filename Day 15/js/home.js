const out = document.getElementById("icon");
const listItem = document.querySelectorAll(".item");
const menu = document.querySelector(".menu");

out.addEventListener("click", s => {
    listItem.forEach((s => {
        s.classList.toggle("d-none");
    }));
    menu.classList.toggle("menu");
});




