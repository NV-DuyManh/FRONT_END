const out = document.getElementById("icon");
const listItem = document.querySelectorAll(".item");
const menu = document.querySelector(".menu");
const inter = document.getElementById("interface"); // bien toan cuc
const listLI = document.querySelectorAll(".left li");
const listBox = document.querySelectorAll(".right .box");


out.addEventListener("click", s => {
    listItem.forEach((s => {
        s.classList.toggle("d-none");
    }));
    menu.classList.toggle("menu");
});

inter.addEventListener("click", (s) => {
    s.preventDefault();
    const log = document.querySelector(".log");// cuc bo
    log.classList.toggle("d-none");
})

listLI.forEach((li, index) => {
    li.addEventListener("click", () => {
        listBox.forEach(e => e.style.display = "none");
        listBox[index].style.display = "block";
    });
});



