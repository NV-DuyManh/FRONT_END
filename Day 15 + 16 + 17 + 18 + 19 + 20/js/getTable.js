async function getTable() {
    const data = await getData(URL_TABLE);
    const listTable = document.querySelector(".tables");
    // kiem thung chua select 
    const choose = document.getElementById("choose");
    data.forEach(s => {

        if (!s.status) {
            choose.innerHTML += `<option value="${s.id}">Table ${s.id}</option>`
        }
        const img = s.status ? `../img/restaurant.png` : `../img/nhahang_nguoi.png`;
        const nut = s.status ? `  <button type="button" onClick=getIdTable(${s.id})
                                        class="btn btn-primary text-dark bg-warning d-flex align-items-center gap-2"
                                        data-bs-toggle="modal" data-bs-target="#modalBooking">
                                        <i class="fa-solid fa-toolbox"></i> BOOKING
                                    </button>` : `  <a onClick=getIdAdd(${s.id}) href="#" class="btn btn-primary text-light bg-success">
                                        <i class="fa-solid fa-circle-plus"></i> ADD</a>
                                    <a onClick=getIdCart(${s.id}) href="#" class="btn btn-primary text-light bg-danger" data-bs-toggle="modal" data-bs-target="#modalbill">
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

function getIdAdd(id) {

    listBox[1].style.display = "none";
    listBox[2].style.display = "block";

    // KIEM SELECT => .VALUE  = id ;
    const chonBan = document.getElementById("choose");
    chonBan.value = id;
}
// bien toan cuc  let 
let orderDeleted;
async function getIdCart(id) {
    const orders = await getData(URL_ORDER);
    const dataFood = await getData(URL_FOOD);
    const numberTable = document.getElementById("numberTable");
    numberTable.innerText = `Table ${id}`;
    const order = orders.find(o => o.id == id);
    // kiem id tbody => cartShow
    // order.bill foreach => s  =>  dataFood.find => f s.idFood == f.id => food
    const cartShow = document.getElementById("cartShow");
    const totalElement = document.getElementById("totalBill");
    cartShow.innerHTML = "";
    totalElement.innerText = "";
    let total = 0;
    order.bill.forEach((s,index) => {

        const food = dataFood.find(f => f.id == s.idFood);
        total += s.quantity * food.price;
        cartShow.innerHTML += `   <tr class="text-center align-middle">
                                <td class="fw-bold">${index + 1 }</td>
                                <td class="anhTable"><img src="${food.imgUrl}" alt=""></td>
                                <td>${food.name}</td>
                                <td>${food.price} $</td>
                                <td>${s.quantity}</td>
                                <td>${s.quantity * food.price} $</td>
                            </tr>`

    })
    orderDeleted = {
        idTable: id,
        bill: order.bill,
        total: total
    }
    totalElement.innerText = `Total Bill: ${total} $`
}






