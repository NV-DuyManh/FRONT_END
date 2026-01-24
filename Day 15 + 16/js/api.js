const URL_TABLE = "http://localhost:3000/tables" ;


async function getData(url) {
     const response = await fetch(url);
     const data = await response.json();
     return data ;
}

async function editById(url, item) {
  try {
    await fetch(`${url}/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
  } catch (error) {
    console.error('Lỗi khi cập nhật', error);
    throw error; // nếu muốn nơi gọi hàm xử lý tiếp
  }
}