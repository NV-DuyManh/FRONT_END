async function getFoods() {
    const data = await getData(URL_FOOD);
    const listFood = document.querySelector(".food");
    data.forEach(s => {
        listFood.innerHTML += `  <div class="col">
                        <div class="card ">
                            <div class="monAn ">
                                <p>${s.id}</p>
                                <h5 class="card-title text-center">${s.name}</h5>
                                <div class="icon">
                                    <button> <i class="fa-solid fa-pen-to-square fs-5"></i></button>
                                    <button><i class="fa-solid fa-trash fs-5"></i></button>
                                </div>

                            </div>
                            <img src="${s.imgUrl}" class="card-img-top" alt="...">
                            <h4 class="text-center mt-3 text-danger fw-bold mt-4">${s.price} USD</h4>
                            <div class="card-body editQuantity d-flex gap-3  justify-content-center align-items-center">
                                <button><i class="fa-solid fa-minus"></i></button>
                                <input type="number" placeholder=" ${s.quantity}">
                                <button><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>`

    });
}
getFoods(); 