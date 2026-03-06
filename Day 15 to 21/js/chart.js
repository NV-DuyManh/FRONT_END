
async function chartBar() {
    const ctx = document.createElement("canvas");
    document.getElementById("barChart").appendChild(ctx);

    const dataTable = await getData(URL_TABLE);
    const labels = dataTable.map(t => t.id);
    const dataBill = await getData(URL_BILL);
    const totalBill = labels.map((e) => {
        const total = dataBill.reduce((acc, curr) => {
            if (curr.idTable == e) {
                return acc + curr.total
            }
            return acc;
        }, 0);
        return total;
    });

    const data = {
        labels: labels.map(e => `Table ${e}`),
        datasets: [{
            label: 'USD',
            data: totalBill,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    });
}

chartBar();

async function chartPie() {
    const ctx = document.createElement("canvas");
    document.getElementById("pieChart").appendChild(ctx);
    const dataTable = await getData(URL_TABLE);
    const labels = dataTable.map(t => t.id);
    const dataBill = await getData(URL_BILL);
    const totalBill = labels.map((e) => {
        const total = dataBill.reduce((acc, curr) => {
            if (curr.idTable == e) {
                return acc + curr.total
            }
            return acc;
        }, 0);
        return total;
    });
    const data = {
        labels: labels.map(e => `Table ${e}`),
        datasets: [{
            label: 'USD',
            data: totalBill,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(130, 235, 54)',
                'rgb(156, 99, 255)',
                'rgb(192, 149, 75)',
                'rgb(255, 139, 86)',
                'rgb(202, 30, 199)',
                'rgb(54, 202, 235)',
                'rgb(54, 235, 187)',
            ],
            hoverOffset: 4
        }]
    };
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
    });
}
chartPie();

async function chartPolar() {
    const ctx = document.createElement("canvas");
    document.getElementById("polarChart").appendChild(ctx);
    const dataTable = await getData(URL_TABLE);
    const labels = dataTable.map(t => t.id);
    const dataBill = await getData(URL_BILL);
    const totalBill = labels.map((e) => {
        const total = dataBill.reduce((acc, curr) => {
            if (curr.idTable == e) {
                return acc + curr.total
            }
            return acc;
        }, 0);
        return total;
    });
    const data = {
        labels: labels.map(e => `Table ${e}`),
        datasets: [{
            label: 'USD',
            data: totalBill,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(130, 235, 54)',
                'rgb(156, 99, 255)',
                'rgb(192, 149, 75)',
                'rgb(255, 139, 86)',
                'rgb(202, 30, 199)',
                'rgb(54, 202, 235)',
                'rgb(54, 235, 187)',
            ]
        }]
    };
    new Chart(ctx, {
        type: 'polarArea',
        data: data,
        options: {}
    });

} chartPolar();

