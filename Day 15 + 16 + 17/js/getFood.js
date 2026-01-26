
async function getFoods() {
    const data = await getData(URL_FOOD);
    const listFood = document.querySelector(".food");
    data.forEach(s => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = `
                        <div class="card ">
                            <div class="monAn ">
                                <p class="doimau">${s.id}</p>
                                <h5  class="card-title text-center">${s.name}</h5>
                                <div class="icon">
                                    <button> <i class="fa-solid fa-pen-to-square fs-5"></i></button>
                                    <button><i class="fa-solid fa-trash fs-5"></i></button>
                                </div>

                            </div>
                            <img src="${s.imgUrl}" class="card-img-top" alt="...">
                            <h4 class="text-center mt-3 text-danger fw-bold mt-4">${s.price} USD</h4>
                            <div class="card-body editQuantity d-flex gap-3  justify-content-center align-items-center">
                                <button id="tru"><i class="fa-solid fa-minus"></i></button>
                                <input type="number" value="0" class="quantity" >
                                <button id="cong"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>`;
        listFood.appendChild(item);
        const tru = item.querySelector(".fa-minus");
        const cong = item.querySelector(".fa-plus");
        const soLuong = item.querySelector(".quantity");
        tru.addEventListener("click", (s) => {
            if (soLuong.value > 0) {
                soLuong.value = soLuong.value - 1;
            }
        })
        cong.addEventListener("click", (s) => {
            soLuong.value = parseInt(soLuong.value) + 1;
        })


    });
}
getFoods();

// async function getFoods() {
//     const data = await getData(URL_ORDER);
// }
const order = document.getElementById("order");
order.addEventListener("click", async () => {
    const dataAOrder = await getData(URL_ORDER);
    const chonBan = document.getElementById("choose");
    const billOld = dataAOrder.find(s => s.id == chonBan.value);
    const bill = billOld ? billOld.bill : [];
    if (!chonBan.value) {
        alert("vui long chon ban");
        return;
    }

    const listFood = document.querySelectorAll(".food .col");
    listFood.forEach((s) => {
        const soLuong = s.querySelector(".quantity");
        const idFood = s.querySelector(".doimau").innerText;
        if (soLuong.value > 0) {
            const indexFood = bill.findIndex(s => s.idFood == idFood);
            if (indexFood == -1) {
                bill.push({
                    idFood: idFood,
                    quantity: soLuong.value
                });
            } else {
                bill[indexFood].quantity = parseInt(bill[indexFood].quantity) + parseInt(soLuong.value);
            }

        }
    })
    if (!bill.length) {
        alert("vui long chon mon");
        return;
    }
    const newOrder = {
        id: chonBan.value,
        bill: bill
    }
    if (billOld) {
       editById(URL_ORDER, newOrder) 
    } else {
        add(URL_ORDER, newOrder);
    }

})

