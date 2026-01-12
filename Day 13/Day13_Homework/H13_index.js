// tao mang chua doi tuong gom { title , img , discount }

function Grapes() {
  const listContent = [
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/22/10/18/icebear-10029029_1280.jpg",
      tieude: "Tao",
      kg: "$4.99 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/27/22/06/ship-10038606_1280.jpg",
      tieude: "Cam",
      kg: "$9 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2024/10/28/17/47/landscape-9156798_1280.jpg",
      tieude: "Mit",
      kg: "$329 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/10/07/14/20/japanese-barberry-9879260_1280.jpg",
      tieude: "Nho",
      kg: "$123 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/10/13/27/bird-10006302_1280.jpg",
      tieude: "Xoai",
      kg: "$456 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/10/08/15/autumn-district-10005775_1280.jpg",
      tieude: "Man",
      kg: "$789 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/18/21/01/royal-poodle-aurelio-10023295_1280.jpg",
      tieude: "Tao",
      kg: "$23 / kg",
    },
    {
      anh: "https://cdn.pixabay.com/photo/2025/12/18/14/06/crocodiles-10022535_1280.jpg",
      tieude: "Dao",
      kg: "$69 / kg",
    },
  ];
  const input = document.querySelector(".grapes");
  listContent.forEach((s) => {
    input.innerHTML += `<div class="col">
            <div class="card">
            <div class="anh position: relative">
                <img src="${s.anh}" class="card-img-top" alt="..." />
                <p style="position: absolute">${s.tieude}</p>
            </div>

            <div class="card-body">
                <h5 class="card-title">Grapes</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
                </p>
            </div>
            <div class="d-flex justify-content-around align-items-center cart mb-3">
                <p class="mt-2" style="font-weight: bold">${s.kg}</p>
                <div class="add d-flex text-center justify-content-center align-items-center text-success gap-2">
                <i class="fa-solid fa-lock"></i>
                <p>Add to cart</p>
                </div>
            </div>
            </div>
        </div>`;
  });
}
Grapes();

function traiCay() {
  const listTraicay = [
    {
      Title: "Tao",
      Anh: "https://cdn.pixabay.com/photo/2025/08/11/18/06/pine-cones-9768792_1280.jpg",
      Discount: "40%",
    },
    {
      Title: "Xoai",
      Anh: "https://cdn.pixabay.com/photo/2025/12/30/08/07/paraglider-10042455_1280.jpg",
      Discount: "20%",
    },
    {
      Title: "Cam",
      Anh: "https://cdn.pixabay.com/photo/2025/12/28/16/50/nature-10039545_1280.jpg",
      Discount: "90%",
    },
  ];
  let anh = document.querySelector(".fresh");
  listTraicay.forEach((s) => {
    anh.innerHTML += `<div class="col mx-auto">
            <div class="card border-warning">
            <div class="car-header position-relative">
                <img src="${s.Anh}" class="card-img-top" alt="..." />
                <div class="apples position-absolute text-center">
                <h1 class="text-light">${s.Title}</h1>
                <h2 class="text-secondary">${s.Discount} OFF</h2>
                </div>
            </div>
            <h5 class="card-title bg-warning cao m-0"></h5>
            </div>
        </div> `;
  });
}
traiCay();

function vegetable() {
  const organic = [
    {
      nhanhieu: "Orange",
      tieude: "One",
      anh: "https://cdn.pixabay.com/photo/2025/12/07/16/31/carnation-10000623_1280.jpg",
    },
    {
      nhanhieu: "Red",
      tieude: "Two",
      anh: "https://cdn.pixabay.com/photo/2025/12/10/08/15/autumn-district-10005775_1280.jpg",
    },
    {
      nhanhieu: "Yellow",
      tieude: "Three",
      anh: "https://cdn.pixabay.com/photo/2025/11/25/13/30/13-30-04-723_1280.jpg",
    },
    {
      nhanhieu: "Green",
      tieude: "Four",
      anh: "https://cdn.pixabay.com/photo/2025/10/11/18/59/autumn-leaves-9888526_1280.jpg",
    },
  ];
  const input = document.querySelector(".traicay");
  organic.forEach((s) => {
    input.innerHTML += `<div class="col">
        <div class="card the">
            <div class="anh position: relative">
                <img src="${s.anh}" class="card-img-top" alt="..." />
                <p style="position: absolute">${s.nhanhieu}</p>
            </div>

            <div class="card-body">
                <h5 class="card-title">${s.tieude}</h5>
                <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
                </p>
            </div>
            <div class="d-flex justify-content-around align-items-center cart mb-3">
                <p class="mt-2" style="font-weight: bold">$4.99 / kg</p>
                <div class="add d-flex text-center justify-content-center align-items-center text-success gap-2">
                <i class="fa-solid fa-lock"></i>
                <p>Add to cart</p>
                </div>
            </div>
            </div>
        </div>`;
  });
}
vegetable();

// bestseller card-title => thay doi chu va mau sac
// kiem Organic Veggies & Fruits Foods theo id => lam gi do tuy
// xem lai cac cach kiem id ,class , query ,querySelectorAll
