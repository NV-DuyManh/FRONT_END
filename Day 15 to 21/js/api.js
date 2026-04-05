const URL_TABLE = "http://localhost:3000/tables";
const URL_FOOD = "http://localhost:3000/foods";
const URL_ORDER = "http://localhost:3000/orders";
const URL_BILL = "http://localhost:3000/bills";
const URL_PROFILE = "http://localhost:3000/profile";

// Lấy data
async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Chỉnh sửa data
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
    throw error;
  }
}

function add(url, object) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(response => response.json())
    .catch(error => console.error('Error creating post:', error));
}

// Xóa data
function deleted(url, id) {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.error('Lỗi khi xóa Item này', error));
}
