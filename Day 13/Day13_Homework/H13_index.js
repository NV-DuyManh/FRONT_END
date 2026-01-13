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

function product() {
  const listSP = [
    {
      name: "Cam",
      cost: "3.12 $",
      anh: "https://cdn.pixabay.com/photo/2019/04/28/18/34/orange-4163953_1280.jpg",
    },
    {
      name: "Chuoi",
      cost: "6.12 $",
      anh: "https://cdn.pixabay.com/photo/2015/05/21/16/57/vegetable-777473_1280.jpg",
    },

    {
      name: "Man",
      cost: "2.12 $",
      anh: "https://cdn.pixabay.com/photo/2020/03/02/15/22/porridge-4896002_1280.jpg",
    },

    {
      name: "Mit",
      cost: "1.12 $",
      anh: "https://cdn.pixabay.com/photo/2021/04/02/09/14/fruit-6144399_1280.jpg",
    },

    {
      name: "Xoai",
      cost: "8.12 $",
      anh: "https://cdn.pixabay.com/photo/2024/06/16/16/34/celery-8833805_1280.jpg",
    },

    {
      name: "Tao",
      cost: "9.12 $",
      anh: "https://cdn.pixabay.com/photo/2021/07/05/04/08/banana-tree-in-garden-6388092_1280.jpg",
    },
  ];
  const input = document.querySelector(".banana");
  listSP.forEach((s) => {
    input.innerHTML += `<div class="col">
            <div class="card mb-3 bg-light">
              <div class="row mt-3 mb-3 g-0">
                <div class="col-6 mt-3 mt-md-0 d-flex align-items-center justify-content-center anh">
                  <img src="${s.anh}" />
                </div>
                <div class="col-6 text-start">
                  <div class="card-body">
                    <h5 class="card-title">${s.name}</h5>
                    <ul class="d-flex p-0 m-0 sao">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star text-secondary"></i></li>
                    </ul>
                    <h4 class="card-title mt-2">${s.cost}</h4>
                    <div class="add d-flex text-center justify-content-center align-items-center text-success gap-2">
                      <i class="fa-solid fa-lock"></i>
                      <p>Add to cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  });
}
product();

function khoaitay(){
  const listTomato = [
    {
      anh: "https://cdn.pixabay.com/photo/2019/12/26/09/31/nature-4720041_1280.jpg",
      cost: "2.3",
      name: "Chicken"
    },
    {
      anh: "https://cdn.pixabay.com/photo/2021/12/22/00/28/city-6886266_1280.jpg",
      cost: "4.3", name: "Elephent"
    },
    {
      anh: "https://cdn.pixabay.com/photo/2019/05/31/16/40/landscapes-4242555_1280.jpg",
      cost: "6.3",name: "Duck"
    },
    {
      anh: "https://cdn.pixabay.com/photo/2021/07/16/09/32/landscape-6470419_1280.jpg",
      cost: "9.3", name: "Tiger"
    },
  ]
  const input = document.querySelector(".khoai");
  listTomato.forEach(s=>{
    input.innerHTML += `          <div class="col">
            <div class="cardd mb-3">
              <div class="row g-0">
                <div class="col-12 mt-3 mt-md-0 d-flex align-items-center justify-content-center anh">
                  <img src="${s.anh}" />
                </div>
                <div class="col-12 text-center">
                  <div class="card-body">
                    <h5 class="card-title mt-3 mb-2">${s.name}</h5>
                    <ul class="d-flex justify-content-center p-0 m-1 sao">
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star"></i></li>
                      <li><i class="fa-solid fa-star text-secondary"></i></li>
                    </ul>
                    <h4 class="card-title">${s.cost} $</h4>
                    <div
                      class="add d-flex text-center justify-content-center align-items-center text-success mt-2 gap-2">
                      <i class="fa-solid fa-lock"></i>
                      <p>Add to cart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
  })
}
khoaitay();

// bestseller card-title => thay doi chu va mau sac
// kiem Organic Veggies & Fruits Foods theo id => lam gi do tuy
// xem lai cac cach kiem id ,class , query ,querySelectorAll
