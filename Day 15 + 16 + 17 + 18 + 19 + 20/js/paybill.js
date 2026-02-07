const paybill = document.getElementById("paybill");
paybill.addEventListener("click", async () => {

    const updateTable = {
        id: orderDeleted.idTable,
        nameCustomer: "",
        quantity: 0,
        status: true
    }
    editById(URL_TABLE, updateTable);
    deleted(URL_ORDER, orderDeleted.idTable);
    const createBill = {
        idTable: orderDeleted.idTable,
        bill: orderDeleted.bill,
        total: orderDeleted.total,
        createAt: new Date()
    }
    add(URL_BILL, createBill);

});

async function show() {
    const data = await getData(URL_BILL);
    const dataFood = await getData(URL_FOOD);
    const listOrder = document.querySelector(".payment");
    data.forEach(s => {
        const item = document.createElement("div");
        item.classList.add("col");
         item.classList.add("mt-3");
        item.innerHTML = `
                    <div class="card">
                        <div class="card-header">
                            <h3>Table  ${s.idTable}</h3>
                        </div>
                        <div class=" row row-cols-2 pay_bill p-4"></div>
                        <div class="card-footer">
                            <h5 class="text-end" style="padding: 0px 30px;">Total: ${s.total} USD </h5>
                            <p class="text-end" style=" color: gray; font-style:italic;">Payment made
                                on
                                ${s.createAt}</p>
                        </div>
                    </div>`;
        const pay_bill = item.querySelector(".pay_bill");
        s.bill.forEach(f => {
           const food = dataFood.find(p => p.id == f.idFood);
           pay_bill.innerHTML +=  `<li class="col d-flex align-items-center gap-2"> <i class="fa-solid fa-carrot"></i> <img class="img_pay" src="${food.imgUrl}" alt=""> ${food.name} x ${f.quantity} = ${food.price*f.quantity} USD</li>`
        })
        listOrder.appendChild(item);
    })

}
show();