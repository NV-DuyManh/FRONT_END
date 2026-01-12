/**
*  1. Sử dụng JS trong file HTML
*  2. Comments
*  3. Khai báo biến.
*      -    Gán lại gtri  Khai báo ko gtri  Gọi trước khi khai báo if,for
*      - var       có              có                    có        có
*      - let       ko              có                    ko        ko
*      - const     ko              ko                    ko        ko
*  4. Hàm?
*    a. Định nghĩa
*       - Một khối mã.
*       - Làm 1 việc cụ thể.
*    b. Loại hàm.
*       - Built-in
*       - Tự định nghĩa
*      b1.  Một số hàm built-in.
*           - Alert
*           - Console (warn, error)
*           - Confirm
*           - Prompt
*           - Set timeout (chạy một lần sau một khoảng thời gian)
*           - Set interval (chạy đoạn code sau một khoảng thời gian và lặp lại)
*      b2. Tự đinh nghĩa.
*          b2.1 Tính chất
*             - Không thực thi khi định nghĩa
*             - Sẽ thực thi khi được gọi
*             - Có thể nhận tham số
*             - Có thể trả về 1 giá trị.
*  5. Toán tử trong JavaScript
*     - Toán tử số học - Arithmetic
*     - Toán tử gán - Assignment
*     - Toán tử so sánh - Comparison
*     - Toán tử logic - Logical
*  6. Kiểu dữ liệu trong JS
*     a. Dữ liệu nguyên thuỷ - Primitive Data
*        - Number
*        - String
*        - Boolean
*        - Undefined
*        - Null
*        - Symbol
*     b. Kiểu dữ liệu phức tạp - Complex Data
*        - Function
*        - Object
*   7. Hiển thị giá trị ra web với JS
*      - Document.write()
*      - Window.alert()
*      - Document.getElementById(id).innerHTML
//   ----------------  VIDU --------------

/**
*  1. Câu lệnh điều kiện if - else
*    - 0 , false , '' , "", undefined, NaN, null  // false
*  2. Câu lệnh rẽ nhánh - Switch - case
*  3. Toán tử 3 ngôi
*    - condition ? True : false
*  4. Vòng lặp - Loop
*     - for (Lặp với điều kiện đúng)
*     - for/in (Lặp qua key của đối tượng)
*     - for/of (Lặp qua value của đối tượng)
*     - while (Lặp khi điều kiện đúng)
*     - do/while(Lặp ít nhất một lần,sau đó lặp khi điều kiện đúng)
*  5. Break và Continue trong vòng lặp
*  6. Callback Functions
*     - Là hàm (function)
*     - Được truyền qua đối số.
*  7. Đệ quy.
*  8. Làm việc với hàm
*     - Declaration function (Có thể được gọi trước khi đinh nghĩa)
*     - Expression function (Biến gán bằng function,Ko thể được gọi trước khi đinh nghĩa)
*     - Arrow function
*/
/**
*  1. Làm việc với chuỗi
*     - Length (Trả về độ dài chuỗi)
            let name = "Mạnh"; 
            console.log(name.length); // Kết quả: 4

*     - Find indexOf(kí tự tìm, start ) (Trả về vị trí của ký tự)
            let text = "Học JavaScript";
            console.log(text.indexOf("J")); // Kết quả: 4 (vì H=0, o=1, c=2, khoảng trắng=3, J=4)
                
*     - Slice(start,end) (Hàm cắt chuỗi)
            let fruit = "Apple, Banana";
            let part = fruit.slice(0, 5); // Lấy từ 0 đến sát 5
            console.log(part); // Kết quả: "Apple"

*     - Replace(ký tự cần thay thế, ký tự thay thế) (Hàm thay thế ký tự)
            let str = "Chào bạn!";
            let newStr = str.replace("bạn", "Mạnh");
            console.log(newStr); // Kết quả: "Chào Mạnh!"

*     - ToUpperCase (Hàm trả về all in hoa)
*     - ToLowerCase ( Hàm trả về all viết thường)
*     - Trim (Hàm xoá khoảng trắng hai đầu chuỗi)
            let email = "  Manh@Gmail.com  ";
            console.log(email.trim().toLowerCase()); // Kết quả: "manh@gmail.com"

*     - Split (Hàm trả về mảng theo một điểm chung)
            let list = "Cam, Quýt, Mít";
            let array = list.split(", "); // Chặt tại chỗ có dấu phẩy và khoảng trắng
            console.log(array); // Kết quả: ["Cam", "Quýt", "Mít"]

*     - CharAt (Trả về ký tự theo index)
            let text = "Hello";
            console.log(text.charAt(1)); // Kết quả: "e" (vì H là 0, e là 1)
*  2. Làm việc với mảng
*     a. Array
*        - Cách tạo mảng
*        - Kiểu data type ? (object)
*        - Length
*        - Lấy phần tử theo index
*        - toString (trả về kiểu string và thêm dấu , giữa các phần tử)
*        - Join (gộp các phần tử của mảng lại theo ký tự )
*        - Pop (xoá phần tử cuối mảng và trả về phần tử đã xoá)
*        - Shift (xoá phần tử đầu mảng và trả về phần tử xoá)
*        - Push (thêm phần tử vào cuối mảng và trả về độ dài mới của mảng)
*        - Unshift (thêm phần tử vào đầu mảng và trả về đồ dài mới của mảng)
*        - Splice(start,số phần tử xoá, phần tử thêm)
*        - Concat (nối 2 mảng với nhau)
*        - Slice(start,end) (cắt mảng )
*     b. Array methods
*        - forEach()
*        - every() (trả về kiểu boolean,trả về false néu 1 phần tử false)
*        - some() (trả về kiểu boolean,trả về true néu 1 phần tử true)
*        - find() (chỉ trả về một phần tử theo điều kiện )
*        - filter() ( trả về list(Mảng) phần tử theo điều kiện )
*        - map()
*/


/* 2. Math object
*    - Math.PI
*    - Math.round() (làm tròn trên nếu >= 5 và ngược lại )
*    - Math.abs() (Giá trị tuyệt đối)
*    - Math.ceil() (Chỉ làm tròn trên)
*    - Math.floor() (Chỉ làm tròn dưới)
*    - Math.random() (Trả về con số trong khoảng 0 -> 1)
*    - Math.min()
*    - Math.max()
*    - Math.pow(x,y) (Trả về giá trị của x mũ y)
*    - Math.sqrt(x) (Trả về căng bậc hai của x)
* 3. Đối tượng Date
* 4. Làm việc với số
*    - Tostring (Trả về kiểu string)
*    - ToFixed (Trả về kiểu string và làm tròn số >=5 lên 1 đơn vị và ngược lại)
*    - Lưu ý ToFixed nếu có sau thập phân thì làm tròn trên nếu > 5 và ngược lại.
*/


/**
*  HTML DOM
*   1. Element: ID, class, tag, css selector
*                  HTML collection  NoList
*   2. Attribute
*   3. Text
*      - innerText (Lấy ra các text trong thẻ không quan tâm thẻ con,và bỏ qua các thẻ bị hidden)
*      - textContent (Lấy ra nguyên bản text node,có thể lấy cả các phần tử hidden )
*      - innerHTML
*/
// ---------------- VIDU --------------

/**
*  1. DOM CSS
*     a. Style
*     b. ClassList
*        - add
*        - contains (Kiểm tra sự tồn tại của tên class trả về kiểu boolean)
*        - remove (xoá tên class )
*        - toggle (nếu có thì xoá và thêm nếu không có)
*  2. DOM event
*     1. Attribute events
*     2. Asign event using the element node
*     3. preventDefault (Ngăn chặn hành vi mặt định của trình duyệt)
*     4. stopPropagation (Ngăn chặn sự kiện nổi bọt )
*  3. Event listener
*     - Xử lý nhiều việc khi 1 event xảy ra
*     - Lắng nghe / huỷ bỏ lắng nghe
*/

/**
*  1. LocalStorage
*     - Lưu trữ trên trình duyệt theo dạng key - value
*     - Sẽ tồn tại trên trình duyệt không bị mất đi
*     - Các giá trị dữ liệu cũng được chuyển đổi thành chuỗi trước khi lưu trữ.
*  2. SessionStorage
*     - Lưu trữ trên trình duyệt theo dạng key - value
*     - Lưu trữ dưới dạng string
*     - Sẽ bị mất đi khi đóng trình duyệt
*  3. Cookie
*     - Lưu trữ trên trình duyệt Browser và server
*     - Sent with requests
*     - Lưu trữ dưới dạng string
*/
// ----------- VIDU --------------

/**
*  1. Fetch
*     - JSON server: API Server (Fake) --> Oke
*     - URUD
*       - Create: Tạo mới --> POST
*       - Read: Lấy dữ liệu --> GET
*       - Update: Chỉnh sửa --> PUT/ PATCH
*       - Delete: Xoá -->DELETE
*  2. Postman
*     - body --> x-www-form-urlencoded
*/
// ------------- VIDU --------------
