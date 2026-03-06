const URL_TABLE = "http://localhost:3000/tables";
const URL_FOOD = "http://localhost:3000/foods";
const URL_ORDER = "http://localhost:3000/orders";
const URL_BILL = "http://localhost:3000/bills";
const URL_PROFILE = "http://localhost:3000/profile";
// bien link
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
//Chỉnh sửa data
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

//Thêm data mới
function add(url, object) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .then(data => {
      // After successful creation, refresh the post list
      fetchPosts();
    })
    .catch(error => console.error('Error creating post:', error));
}

//Xóa data
function deleted(url, id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => console.error('Lỗi khi xóa Item này', error));
}