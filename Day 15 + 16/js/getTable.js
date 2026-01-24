async function getTable() {
    const data = await getData(URL_TABLE);
    const listTable = document.querySelector(".table");
    data.forEach(s => {
        const img = s.status ? `../img/restaurant.png` : `../img/nhahang_nguoi.png`;
        const nut = s.status ? `  <button type="button" onClick=getIdTable(${s.id})
                                        class="btn btn-primary text-dark bg-warning d-flex align-items-center gap-2"
                                        data-bs-toggle="modal" data-bs-target="#modalBooking">
                                        <i class="fa-solid fa-toolbox"></i> BOOKING
                                    </button>` : `  <a href="#" class="btn btn-primary text-light bg-success">
                                        <i class="fa-solid fa-circle-plus"></i> ADD</a>
                                    <a href="#" class="btn btn-primary text-light bg-danger">
                                        <i class="fa-solid fa-cart-plus"></i> CART</a>`;
        listTable.innerHTML += `    <div class="col ">
                        <div class="card text-center xe">
                            <div class="card-body rounded-3">
                                <p class="quantity">${s.id}</p>
                                <img src=${img} alt="">
                                <div class="nut d-flex justify-content-center gap-3" style="  white-space: nowrap;">
                                        ${nut}
                                </div>

                            </div>
                        </div>
                    </div>`
    })
}
getTable();

function getIdTable(id) {

    const send = document.getElementById("send");
    send.addEventListener("click", () => {

        const customer_name = document.getElementById("customer_name").value;
        const quantity = document.getElementById("quantity").value;

        const tableEdit = {
            id: id,
            nameCustomer: customer_name,
            quantity: quantity,
            status: false
        }
        editById(URL_TABLE, tableEdit)
    })
}



