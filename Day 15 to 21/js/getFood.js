async function getFoods(search = "") {
    const data = await getData(URL_FOOD);
    const listFood = document.querySelector(".food");
    listFood.innerHTML = "";

    const dataFilter = data.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));
    dataFilter.forEach((s, index) => {
        const item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = `
                        <div class="card ">
                            <div class="monAn ">
                                <p >${index + 1}</p>
                                <input class="doimau d-none" type="text" value="${s.id}" >
                                <h5  class="card-title text-center">${s.name}</h5>
                                <div class="icon d-flex gap-2">
                                    <button onClick="getIdFood('${s.id}')"><i class="fa-solid fa-pen-to-square fs-5"  data-bs-toggle="modal" data-bs-target="#modalAddCart"></i></button>
                                    <button onClick="xoafood('${s.id}')"><i class="fa-solid fa-trash fs-5" id="delete" data-bs-toggle="modal" data-bs-target="#modaldelete" ></i></button>
                                </div>
                            </div>
                            <img src="${s.imgUrl}" class="card-img-top" alt="...">
                            <h4 class="text-center mt-3 text-danger fw-bold mt-4">${s.price} USD</h4>
                            <div class="card-body editQuantity d-flex gap-3  justify-content-center align-items-center">
                                <button class="btn_Tru" id="tru"><i class="fa-solid fa-minus"></i></button>
                                <input type="number" value="0" class="quantity" >
                                <button  class="btn_Cong" id="cong"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>`;
        listFood.appendChild(item);
        const tru = item.querySelector(".btn_Tru");
        const cong = item.querySelector(".btn_Cong");
        const soLuong = item.querySelector(".quantity");
        tru.addEventListener("click", () => {
            const slHienTai = parseInt(soLuong.value) || 0;
            if (slHienTai > 0) soLuong.value = slHienTai - 1;
        });
        cong.addEventListener("click", () => {
            const slHienTai = parseInt(soLuong.value) || 0;
            soLuong.value = slHienTai + 1;
        });
    });
}
getFoods("");


const order = document.getElementById("order");
order.addEventListener("click", async () => {
    const chonBan = document.getElementById("choose");

    if (!chonBan.value) {
        alert("Vui lòng chọn bàn!");
        return;
    }

    const tableId = chonBan.value;
    const dataAOrder = await getData(URL_ORDER);

    const billOld = dataAOrder.find(s => s.idTable == tableId || s.id == tableId);
    const bill = billOld ? [...billOld.bill] : [];

    // Gom các món ăn đã chọn
    const listFood = document.querySelectorAll(".food .col");
    listFood.forEach((s) => {
        const soLuong = s.querySelector(".quantity");
        const idFood = s.querySelector(".doimau").value;
        const quantityValue = parseInt(soLuong.value) || 0;
        if (quantityValue > 0) {
            const indexFood = bill.findIndex(b => b.idFood == idFood);
            if (indexFood == -1) {
                bill.push({ idFood: idFood, quantity: quantityValue });
            } else {
                const billQuantity = parseInt(bill[indexFood].quantity) || 0;
                bill[indexFood].quantity = billQuantity + quantityValue;
            }
        }
    });

    if (!bill.length) {
        alert("Vui lòng chọn món!");
        return;
    }

    try {
        if (billOld) {
            // Cập nhật order đã có — dùng id thực của record trong DB
            const updatedOrder = {
                id: billOld.id,    
                idTable: tableId,   
                bill: bill
            };
            await editById(URL_ORDER, updatedOrder);
        } else {
            const newOrder = {
                idTable: tableId,
                bill: bill
            };
            await add(URL_ORDER, newOrder);
        }

        alert(`✅ Đã lưu order cho Table ${tableId}!`);

        // Reset số lượng về 0
        document.querySelectorAll(".food .quantity").forEach(input => input.value = 0);

    } catch (err) {
        console.error("Lỗi khi lưu order:", err);
        alert("❌ Lỗi khi lưu order, vui lòng thử lại!");
    }
});


// Upload ảnh món ăn
let selectedFoodImageFile;
let idEdit;
const chonImg = document.getElementById("chooseImage");
chonImg.addEventListener("change", handleFoodImageSelect);

const addFood = document.getElementById("upFood");
const loadingOverlay = document.getElementById("loading-overlay");

addFood.addEventListener("click", async () => {
    const data = await getData(URL_FOOD);
    const foodName = document.getElementById("foodName");
    const price = document.getElementById("price");
    if (!foodName.value || !price.value) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }
    if (!selectedFoodImageFile && !idEdit) {
        alert("Vui lòng chọn ảnh!");
        return;
    }

    loadingOverlay.classList.add("active");
    addFood.disabled = true;
    addFood.style.background = "gray";
    const icon = document.querySelector(".fa-spinner");
    if (icon) {
        icon.style.transition = "all 5s ease-in";
        icon.style.transform = "rotate(720deg)";
    }

    try {
        let maxId = 0;
        if (data.length > 0) {
            maxId = Math.max(...data.map(item => Number(item.id)));
        }
        let id = maxId + 1;

        let imgUrl = "";
        if (selectedFoodImageFile) {
            imgUrl = await uploadImageToCloudinary(selectedFoodImageFile);
        } else if (idEdit) {
            const current = data.find(s => s.id == idEdit);
            imgUrl = current.imgUrl;
        }

        const newFood = {
            id: idEdit ? idEdit : id,
            name: foodName.value,
            imgUrl: imgUrl,
            price: parseInt(price.value)
        };

        if (idEdit) {
            await editById(URL_FOOD, newFood);
        } else {
            await add(URL_FOOD, newFood);
        }

        await getFoods();

    } catch (error) {
        console.error(error);
    } finally {
        loadingOverlay.classList.remove("active");
        addFood.disabled = false;
        addFood.style.background = "";
        selectedFoodImageFile = null;
        idEdit = null;
    }
});

function handleFoodImageSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
        document.getElementById("img_food").src = e.target.result;
    };
    selectedFoodImageFile = file;
}

async function getIdFood(id) {
    idEdit = id;
    const data = await getData(URL_FOOD);
    const food = data.find(s => s.id == id);
    document.getElementById("foodName").value = food.name;
    document.getElementById("price").value = food.price;
    document.getElementById("img_food").src = food.imgUrl;
    document.getElementById("titleFood").innerText = "UPDATE FOOD";
    document.getElementById("ftitte").innerText = "UPDATE FOOD";
}

const addfood = document.getElementById("addFood");
addfood.addEventListener("click", () => {
    document.getElementById("foodName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img_food").src = "../img/logo.jpg";
    document.getElementById("titleFood").innerText = "ADD FOOD";
    document.getElementById("ftitte").innerText = "ADD FOOD";
});

async function xoafood(id) {
    const deleteFood = document.getElementById("deleteFood");
    deleteFood.onclick = async function () {
        await deleted(URL_FOOD, id);
        await getFoods();
    };
}

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const search = document.getElementById("search");
    getFoods(search.value);
});
