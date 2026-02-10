async function getFoods(search) {
    const data = await getData(URL_FOOD);
    const listFood = document.querySelector(".food");
    listFood.innerHTML = "";

    const dataFilter = data.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))   // Tìm kiếm món ăn theo tên
    dataFilter.forEach((s, index) => {
        const item = document.createElement("div");
        item.classList.add("col");

        //DOM order món ăn
        item.innerHTML = `
                        <div class="card ">
                            <div class="monAn ">
                                <p >${index + 1}</p>
                                <input class="doimau d-none" type="text" value="${s.id}" >
                                <h5  class="card-title text-center">${s.name}</h5>
                                <div class="icon">
                                    <button onClick="getIdFood('${s.id}')"> <i class="fa-solid fa-pen-to-square fs-5"  data-bs-toggle="modal" data-bs-target="#modalAddCart"></i></button>
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
getFoods("");


//Chọn những bàn đã có khách bên getTable
const order = document.getElementById("order");
order.addEventListener("click", async () => {
    const dataAOrder = await getData(URL_ORDER);
    const chonBan = document.getElementById("choose");
    const billOld = dataAOrder.find(s => s.id == chonBan.value);
    const bill = billOld ? billOld.bill : [];
    if (!chonBan.value) {
        alert("Vui lòng chọn bàn!");
        return;
    }


    //Edit tăng giảm số lượng món ăn
    const listFood = document.querySelectorAll(".food .col");
    listFood.forEach((s) => {
        const soLuong = s.querySelector(".quantity");
        const idFood = s.querySelector(".doimau").value;
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
        alert("Vui lòng chọn món!");
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


//Thay đổi ảnh theo ảnh mình chọn
let selectedFoodImageFile;
let idEdit;
const chonImg = document.getElementById("chooseImage");
chonImg.addEventListener("change", handleFoodImageSelect)


const addFood = document.getElementById("upFood");
const loadingOverlay = document.getElementById("loading-overlay");  //Hiệu ứng vòng xoay khi loading ảnh

addFood.addEventListener("click", async () => {  //Bắt thông tin modal AddFood
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
            id: idEdit ? JSON.stringify(idEdit) : JSON.stringify(id),
            name: foodName.value,
            imgUrl: imgUrl,
            price: parseInt(price.value)
        }
        if (idEdit) {
            await editById(URL_FOOD, newFood)
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


// Thêm món ăn mới
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

// Xóa món ăn hiện có
async function xoafood(id) {
    const deleteFood = document.getElementById("deleteFood");
    deleteFood.onclick = async function () {
        await deleted(URL_FOOD, id);
        await getFoods();
    }
}


//Tìm kiếm món ăn theo tên 
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    const search = document.getElementById("search");
    getFoods(search.value);

})
