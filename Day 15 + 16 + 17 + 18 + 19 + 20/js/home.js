const out = document.getElementById("icon");
const listItem = document.querySelectorAll(".item");
const menu = document.querySelector(".menu");
const inter = document.getElementById("interface");
const listLI = document.querySelectorAll(".left li");
const listBox = document.querySelectorAll(".right .box");

// Ẩn hiện thanh bên - Hiện to nhỏ
out.addEventListener("click", s => {
    listItem.forEach((s => {
        s.classList.toggle("d-none");
    }));
    menu.classList.toggle("menu");
});

inter.addEventListener("click", (s) => {
    s.preventDefault();
    const log = document.querySelector(".log");
    log.classList.toggle("d-none");
})

// Hiển thị giao diện phù hợp khi nhấn vào
listLI.forEach((li, index) => {
    li.addEventListener("click", () => {
        listBox.forEach(e => e.style.display = "none");
        listBox[index].style.display = "block";
        localStorage.setItem("key", index);
    });
});

const checkIndex = localStorage.getItem("key");
if (checkIndex) {
    listBox[checkIndex].style.display = "block";
}


