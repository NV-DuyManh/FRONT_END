const students = [
    { id: 1, name: "Nguyen Van An", age: 15, grade: "10", scores: { math: 85, english: 78, science: 92 } },
    { id: 2, name: "Tran Thi Binh", age: 16, grade: "11", scores: { math: 90, english: 88, science: 84 } },
    { id: 3, name: "Le Van Cuong", age: 14, grade: "9", scores: { math: 72, english: 65, science: 70 } },
    { id: 4, name: "Hoang Thi Dao", age: 15, grade: "10", scores: { math: 95, english: 92, science: 98 } },
    { id: 5, name: "Phan Van Em", age: 17, grade: "12", scores: { math: 67, english: 55, science: 60 } },
    { id: 6, name: "Vo Thi Hoa", age: 15, grade: "10", scores: { math: 78, english: 85, science: 80 } },
    { id: 7, name: "Dang Van Hieu", age: 16, grade: "11", scores: { math: 88, english: 75, science: 90 } },
    { id: 8, name: "Ngo Thi Lan", age: 14, grade: "9", scores: { math: 65, english: 60, science: 58 } },
    { id: 9, name: "Pham Van Minh", age: 17, grade: "12", scores: { math: 92, english: 85, science: 91 } },
    { id: 10, name: "Tran Thi Ngoc", age: 15, grade: "10", scores: { math: 81, english: 39, science: 85 } }
];

//1. Viết một hàm tìm học sinh có điểm toán cao nhất trong danh sách.
function cau1() {
    let max = students[0];
    for (let i = 0; i < students.length; i++) {
        if (max.scores.math < students[i].scores.math) {
            max = students[i];
        }

    } console.log(max);
}
// cau1();


//2. Lọc danh sách học sinh thuộc lớp "10".
function cau2() {
    let a = students.filter(students => students.grade == 10);
    console.log(a);
}
// cau2();


//3. Tính điểm trung bình của mỗi học sinh dựa trên các môn học và thêm thuộc tính average vào từng đối tượng học sinh.
function cau3() {
    let a = students.map(s => {
        let avg = (s.scores.math + s.scores.english + s.scores.science) / 3;
        s.average = parseFloat(avg.toFixed(2));
        return s;
    });
    return a;
}
// cau3();


//4. Sắp xếp danh sách học sinh theo thứ tự tăng dần của tuổi.
function cau4() {
    const sap_xep = students.sort((a, b) => a.age - b.age);
    console.log(sap_xep);
}
// cau4();


//5. Lọc danh sách học sinh có điểm trung bình lớn hơn 80.
function cau5() {
    let trung_binh = cau3().filter(s => s.average > 80);
    console.log(trung_binh);

}
// cau5();


//6. Thêm thuộc tính rank cho mỗi học sinh dựa vào điểm trung bình:
// Điểm trung bình >= 90: "Xuất sắc"
// Điểm trung bình từ 75 - 89: "Giỏi"
// Điểm trung bình từ 50 - 74: "Trung bình"
// Điểm trung bình < 50: "Yếu".
function cau6() {
    let rankk = cau3().map(s => {
        if (s.average >= 90) {
            s.rank = "Xuất sắc";
        } else if (s.average>=75 &&s.average < 90) {
            s.rank = "Giỏi";
        } else if (s.average>=50 && s.average < 75) {
            s.rank = "Trung bình";
        } else {
            s.rank = "Yếu";
        }

        return s;
    });
    console.log(rankk);

}
// cau6();


//       7.Tính số lượng học sinh trong mỗi lớp (grade).
function cau7() {
    let a = students.reduce((hs, s) => {
        if (hs[s.grade]) {
            hs[s.grade] = hs[s.grade] + 1;
        } else {
            hs[s.grade] = 1;
        }
        return hs;
    }, {});
    console.log(a);
}
// cau7();


//      8.Kiểm tra xem có học sinh nào có điểm môn bất kỳ < 40 không.
function cau8(){
    let a = students.some(s => s.scores.math <40 || s.scores.english <40 || s.scores.science <40);
    console.log(a);
}
// cau8();


//      9.Lọc danh sách học sinh có điểm >= 80 ở tất cả các môn học.
function cau9(){
    let a = students.filter(s => s.scores.math >=80 && s.scores.english >= 80 && s.scores.science >=80);
    console.log(a);
}
// cau9();


//      10.Chia học sinh thành các nhóm dựa vào điểm Toán:
// Nhóm 1: >= 90
// Nhóm 2: Từ 75 - 89
// Nhóm 3: < 75
function cau10(){
    let a = students.map(s=>{
        if(s.scores.math >=90){
            s.Group = "Nhom 1";
        }else if(s.scores.math >=75 && s.scores.math < 90){
            s.Group = "Nhom 2";
        }else{
            s.Group = "Nhom 3";
        }
        return s;
    });
    console.log(a);
    
}
// cau10();


//      11. Cập nhật tên học sinh trong danh sách sao cho mỗi tên đều được viết hoa chữ cái đầu.
//     12. Xóa các học sinh có tuổi nhỏ hơn 14 khỏi danh sách.
//     13. Lọc danh sách các học sinh có tên chứa chữ "An".
//      14. Tính tổng điểm Toán, Anh và Khoa học của tất cả học sinh trong danh sách.
//     15. Tạo một mảng mới chỉ chứa id của các học sinh.
//     16. Viết hàm để xáo trộn thứ tự ngẫu nhiên các học sinh trong danh sách.
//    17 .Tìm học sinh có tuổi nhỏ nhất trong danh sách.
//   18. Thêm một đối tượng học sinh mới vào danh sách.
//   19. Kiểm tra xem có học sinh nào thuộc lớp "12" không.
//   20. Cập nhật điểm tiếng Anh của học sinh có id = 4 thành 95.
//   21. Xóa học sinh có id = 2 khỏi danh sách.
//   22. Cập nhật tên của học sinh có id = 3 thành "Le Van Cuong Updated".
