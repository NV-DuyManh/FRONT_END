// lay all food
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
                                    <button onClick=getIdFood(${s.id})> <i class="fa-solid fa-pen-to-square fs-5"  data-bs-toggle="modal" data-bs-target="#modalAddCart"></i></button>
                                    <button onClick=xoafood(${s.id})><i class="fa-solid fa-trash fs-5" id="delete" data-bs-toggle="modal" data-bs-target="#modaldelete" ></i></button>
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
            const slHienTai = parseInt(soLuong.value) || 0;
            if (slHienTai > 0) {
                soLuong.value = slHienTai - 1;
            }
        })

        cong.addEventListener("click", (s) => {
            const slHienTai = parseInt(soLuong.value) || 0;
            soLuong.value = slHienTai + 1;
        })


    });
}
getFoods();

// dat mon
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
        const quantityValue = parseInt(soLuong.value) || 0;
        if (quantityValue > 0) {
            const indexFood = bill.findIndex(s => s.idFood == idFood);
            if (indexFood == -1) {
                bill.push({
                    idFood: idFood,
                    quantity: quantityValue
                });
            } else {
                const billQuantity = parseInt(bill[indexFood].quantity) || 0;
                bill[indexFood].quantity = billQuantity + quantityValue;
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

});

let selectedFoodImageFile; // toan cuc
let idEdit;
const chonImg = document.getElementById("chooseImage");
chonImg.addEventListener("change", handleFoodImageSelect)

const addFood = document.getElementById("upFood");
addFood.addEventListener("click", async () => {
    const data = await getData(URL_FOOD);
    const foodName = document.getElementById("foodName");
    const price = document.getElementById("price");
    if (!foodName.value || !price.value) {
        alert("vui long nhap du thong tin");
        return;
    }
    if (!selectedFoodImageFile) {
        alert("vui long chon anh");
        return;
    }
    let id = 1;
    data.forEach(s => {
        if (id == s.id) {
            id++;
        } else {
            return;
        }
    });

    addFood.disabled = true;
    addFood.style.background = "gray";
    const icon = document.querySelector(".fa-spinner");
    icon.style.transition = "all 5s ease-in";
    icon.style.transform = "rotate(720deg)";

    const imgUrl = await uploadImageToCloudinary(selectedFoodImageFile);
    const newFood = {
        id: idEdit ? idEdit : id,
        name: foodName.value,
        imgUrl: imgUrl,
        price: parseInt(price.value)
    }
    if (idEdit) {
        editById(URL_FOOD, newFood)
    } else {
        add(URL_FOOD, newFood);
    }
});
// Xử lý khi người dùng chọn file ảnh
function handleFoodImageSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    // Sau khi đọc xong ảnh, hiển thị preview lên giao diện
    reader.onload = (e) => {
        document.getElementById("img_food").src = e.target.result;
    };

    selectedFoodImageFile = file; // Lưu lại file để upload sau
}
async function getIdFood(id) {
    idEdit = id;
    const data = await getData(URL_FOOD);
    // find kiem ve mon an food 
    const food = data.find(s => s.id == id);
    const foodName = document.getElementById("foodName");
    foodName.value = food.name;
    const price = document.getElementById("price");
    price.value = food.price;
    const img = document.getElementById("img_food");
    img.src = food.imgUrl;
    const updateFood = document.getElementById("titleFood");
    updateFood.innerText = "UPDATE FOOD";
    const upFood = document.getElementById("ftitte");
    upFood.innerText = "UPDATE FOOD";
}

const addfood = document.getElementById("addFood");
addfood.addEventListener("click", () => {
    const foodName = document.getElementById("foodName");
    foodName.value = "";
    const price = document.getElementById("price");
    price.value = "";
    const img = document.getElementById("img_food");
    img.src = "../img/logo.jpg";
    const updateFood = document.getElementById("titleFood");
    updateFood.innerText = "ADD FOOD";
    const upFood = document.getElementById("ftitte");
    upFood.innerText = "ADD FOOD";
});
async function xoafood(id){
    // console.log(id);
const deleteFood = document.getElementById("deleteFood");
deleteFood.addEventListener("click", ()=>{
    deleted(URL_FOOD, id) ;
})
}
