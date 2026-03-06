async function dashboard() {
    const dataTable = await getData(URL_TABLE);
    const dataBill = await getData(URL_BILL);

    //Tong Ban
    const tongBan = document.getElementById("tongBan");
    tongBan.innerText = dataTable.length;

    //Ban Trong
    const banTrong = document.getElementById("banTrong");
    banTrong.innerText = dataTable.reduce((acc, curr) => curr.status ? acc + 1 : acc, 0);

    //Don chua thanh toan 
    const chuaTT = document.getElementById("donchuaTT");
    chuaTT.innerText = dataTable.reduce((acc, curr) => curr.status ? acc : acc + 1, 0);

    //Doanh thu hom nay


    //Tong doanh thu 
    const tongDT = document.getElementById("tongDT");
    tongDT.innerText = dataBill.reduce((acc, curr)=> acc + curr.total, 0);

    //So don hang 
    const soDH = document.getElementById("donHang");
    soDH.innerText =dataBill.reduce((acc,curr)=> curr.id != 0 ? acc+1:acc,0 );
}
dashboard();