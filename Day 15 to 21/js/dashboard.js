async function loadDashboard() {
    const tables = await getData(URL_TABLE);
    const bills = await getData(URL_BILL);
    const foods = await getData(URL_FOOD);

    // ===== 1. TỔNG BÀN =====
    document.getElementById("tongBan").innerText = tables.length;

    // ===== 2. BÀN TRỐNG =====
    const banTrong = tables.filter(t => t.status === true).length;
    document.getElementById("banTrong").innerText = banTrong;

    // ===== 3. ĐƠN CHƯA THANH TOÁN =====
    document.getElementById("donchuaTT").innerText = bills.length;

    // ===== 4. DOANH THU HÔM NAY =====
    const today = new Date().toISOString().split("T")[0];

    const doanhThuHomNay = bills.reduce((sum, bill) => {
        const billDate = new Date(bill.createAt).toISOString().split("T")[0];
        if (billDate === today) {
            return sum + bill.total;
        }
        return sum;
    }, 0);

    document.querySelector(".doanhThu h1").innerText = doanhThuHomNay + "$";

    // ===== 5. TỔNG DOANH THU =====
    const tongDT = bills.reduce((sum, bill) => sum + bill.total, 0);
    document.getElementById("tongDT").innerText = tongDT;

    // ===== 6. SỐ ĐƠN =====
    document.getElementById("donHang").innerText = bills.length;

    // ===== 7. MÓN PHỔ BIẾN =====
    const countFood = {};

    bills.forEach(bill => {
        bill.bill.forEach(item => {
            countFood[item.idFood] = (countFood[item.idFood] || 0) + item.quantity;
        });
    });

    let maxFoodId = null;
    let maxFood = 0;

    for (let id in countFood) {
        if (countFood[id] > maxFood) {
            maxFood = countFood[id];
            maxFoodId = id;
        }
    }

    const food = foods.find(f => f.id == maxFoodId);
document.getElementById("monPhoBien").innerText = food?.name || "N/A";
    // ===== 8. KHÁCH THƯỜNG XUYÊN =====
    const countCustomer = {};

    tables.forEach(t => {
        if (t.nameCustomer) {
            countCustomer[t.nameCustomer] = (countCustomer[t.nameCustomer] || 0) + 1;
        }
    });

    let maxCus = "";
    let maxCount = 0;

    for (let name in countCustomer) {
        if (countCustomer[name] > maxCount) {
            maxCount = countCustomer[name];
            maxCus = name;
        }
    }

document.getElementById("khachHang").innerText = maxCus || "N/A";}

//  chạy khi load trang
loadDashboard();