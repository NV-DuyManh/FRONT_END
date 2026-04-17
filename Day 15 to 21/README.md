<div align="center">

  <img src="https://media.giphy.com/media/l2Je2skI6CVnZ0Sju/giphy.gif" width="100px">

  # 🍽️ Restaurant Manager System
  
  **Mini Restaurant Management System – Frontend + Mock API**

  <p>
    <a href="#-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-project-structure">Structure</a> •
    <a href="#-how-it-works">How it works</a> •
  </p>

</div>

---

## 📌 Overview

**Restaurant Manager System** là một project mô phỏng hệ thống quản lý nhà hàng chạy hoàn toàn ở frontend, sử dụng **json-server làm REST API giả lập**.

Project tập trung vào:
- Fetch dữ liệu từ API
- Render UI động
- Xử lý giỏ hàng (cart)
- Thao tác CRUD cơ bản

---

## 🚀 Features

- 📋 Hiển thị danh sách món ăn từ API (`/products`)
- 🛒 Thêm món vào giỏ hàng (`/cart`)
- ❌ Xóa món khỏi giỏ
- 🔄 Đồng bộ dữ liệu realtime với json-server
- 💡 UI đơn giản, dễ mở rộng

---

## 🧠 How it works

Luồng hoạt động chính:

1. `json-server` chạy tại `localhost:3000`
2. Frontend gọi API:
   - GET `/products` → lấy danh sách món
   - GET `/cart` → lấy giỏ hàng
3. Khi user:
   - Add item → POST `/cart`
   - Remove item → DELETE `/cart/:id`
4. UI tự render lại từ data mới

👉 Đây là mô hình **frontend calling REST API (mock backend)**

---

## 🛠️ Tech Stack

| Layer      | Công nghệ |
|-----------|----------|
| Frontend  | HTML, CSS, JavaScript |
| API       | JSON Server |
| Dev Tool  | Live Server, Git |

---

## 📁 Project Structure

```
Restaurant_Manager/
│── db.json          # Mock database
│── index.html
│
├── assets/          # Images, icons
├── css/             # Styles
├── js/              # Logic xử lý
└── views/
    └── Home.html    # Main UI
```

---

## ⚙️ Setup

### 1. Clone project

```bash
git clone https://github.com/NV-DuyManh/Restaurant_Manager.git
cd Restaurant_Manager
```

---

### 2. Run JSON Server

```bash
npx json-server db.json
```

👉 API chạy tại:  
http://localhost:3000

---

### 3. Run frontend

- Mở đầu tiên tại:

```
views/Register.html
```

- Chọn **Open with Live Server**

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| GET    | /products | Lấy danh sách món |
| GET    | /cart     | Lấy giỏ hàng |
| POST   | /cart     | Thêm món |
| DELETE | /cart/:id | Xóa món |

---

## ⚠️ Notes

- Đây là **mock backend**, không dùng production
- Dữ liệu lưu trong `db.json`
- Nếu lỗi → restart json-server

---

## 👨‍💻 Author

**Nguyễn Văn Duy Mạnh**

- GitHub: https://github.com/NV-DuyManh
- Facebook: https://www.facebook.com/duymanhdev

---

<div align="center">

⭐ Nếu thấy hữu ích, hãy cho mình 1 star nhé!

</div>
