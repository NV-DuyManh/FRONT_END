let currentChart = null;

async function renderChart(type) {
    const container = document.getElementById("chartContainer");
    container.innerHTML = "";

    const ctx = document.createElement("canvas");
    container.appendChild(ctx);

    const tables = await getData(URL_TABLE);
    const bills = await getData(URL_BILL);

    const labels = tables.map(t => `Table ${t.id}`);

    const data = tables.map(t => {
        return bills.reduce((sum, b) => {
            if (b.idTable == t.id) return sum + b.total;
            return sum;
        }, 0);
    });

    const gradientColors = [
        "#ff6b6b",
        "#feca57",
        "#48dbfb",
        "#1dd1a1",
        "#5f27cd",
        "#ee5253",
        "#10ac84",
        "#341f97",
        "#ff9ff3",
        "#00d2d3",
        "#54a0ff",
        "#c8d6e5"
    ];

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: "Revenue ($)",
                data: data,
                backgroundColor: gradientColors,
                borderRadius: 10,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#333",
                        font: {
                            size: 13
                        }
                    }
                }
            },
            scales: type === "bar" ? {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "rgba(0,0,0,0.1)"
                    }
                }
            } : {}
        }
    });
}

// 👉 nút click
function showChart(type) {
    renderChart(type);
}

// 👉 mặc định load Bar
renderChart("bar");