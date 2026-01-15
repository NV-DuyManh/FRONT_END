// Danh sách học sinh mẫu
let students = [
    { name: "Trần Văn A", age: 16, class: 10, math: 75, english: 58, science: 85 },
    { name: "Nguyễn Thị B", age: 15, class: 9, math: 60, english: 62, science: 91 },
    { name: "Lê Văn C", age: 17, class: 11, math: 88, english: 92, science: 87 },
    { name: "Trương Anh Thị D", age: 14, class: 9, math: 25, english: 59, science: 48 },
    { name: "Tạ Minh E", age: 13, class: 10, math: 95, english: 99, science: 82 },
];


// 1.Viết một hàm tìm học sinh có tổng điểm cao nhất (math + english + science).
function cau1() {
    let a = students.reduce((max, s) => {
        let sumMax = max.math + max.english + max.science;
        let sum = s.math + s.english + s.science;

        if (sum > sumMax) {
            return s;
        }
        return max;
    });
    console.log(a);

}
// cau1();

// 2.Lọc danh sách học sinh có điểm tiếng Anh dưới 60 và môn Khoa học trên 80.
function cau2() {
    let a = students.filter(s => s.english < 60 && s.science > 80);
    console.log(a);
}
// cau2();

// 3.Tính điểm trung bình từng môn học (math, english, science) của toàn bộ học sinh.
function cau3() {
    let a = students.reduce((sum, s) => sum += s.math, 0)
    console.log("Tong diem mon math la:", a);
    let b = students.reduce((sum, s) => sum += s.english, 0)
    console.log("Tong diem mon english la:", b);
    let c = students.reduce((sum, s) => sum += s.science, 0)
    console.log("Tong diem mon science la:", c);
}
// cau3();

// 4.Sắp xếp danh sách học sinh theo thứ tự giảm dần của điểm tiếng Anh.
function cau4() {
    let a = students.sort((a, b) => b.english - a.english);
    console.log(a);
}
// cau4();

// 5.Thêm thuộc tính pass (true/false) nếu điểm trung bình >= 60.
function cau5() {
    let a = students.map(s => {
        if ((s.math + s.english + s.science) / 3 >= 60) {
            s.pass = "true";
        } else {
            s.pass = "false";
        }
        return s;
    });
    console.log(a);
}
// cau5();

// 6.Lọc danh sách học sinh có điểm trung bình nằm trong khoảng từ 70 đến 85.
function cau6() {
    let a = students.filter(s => {
        let avg = (s.math + s.english + s.science) / 3;
        if (avg >= 70 && avg <= 85) {
            return s;
        }
    });
    console.log(a);
}
// cau6();

// 7.Tính số lượng học sinh theo từng mức xếp hạng (Xuất sắc, Giỏi, Trung bình, Yếu).
// Điểm trung bình >= 90: "Xuất sắc"
// Điểm trung bình từ 75 - 89: "Giỏi"
// Điểm trung bình từ 50 - 74: "Trung bình"
// Điểm trung bình < 50: "Yếu".
function cau7() {
    let quantity = { xs: 0, g: 0, tb: 0, y: 0 };
    let rank = students.map(s => {
        let avg = (s.math + s.english + s.science) / 3;
        if (avg >= 90) {
            quantity.xs += 1;
        } else if (avg >= 75) {
            quantity.g += 1;
        } else if (avg >= 50) {
            quantity.tb += 1;
        } else {
            quantity.y += 1;
        }

    });
    console.log(quantity);

}
// cau7();

// 8.Kiểm tra xem có học sinh nào bị điểm liệt (môn bất kỳ dưới 30) không.
function cau8() {
    let a = students.some(s => s.math < 30 || s.english < 30 || s.science < 30);
    console.log(a);
}
// cau8();

// 9.Tìm tất cả học sinh có tên bắt đầu bằng chữ "T" và học lớp 10.
function cau9() {
    let a = students.filter(s => s.name.charAt(0) == "T" && s.class == "10");
    console.log(a);
}
// cau9();

// 10.Tìm học sinh có điểm tiếng Anh cao nhất trong lớp 11.
function cau10() {
    let a = students.filter(a => a.class == "11").reduce((max, s) => max.english < s.english ? s : max);
    console.log(a);
}
// cau10();

// 11.Chuyển toàn bộ tên học sinh sang dạng viết thường.
function cau11() {
    let a = students.map(s => s.name.toLowerCase());
    console.log(a);
}
// cau11();

// 12.Tạo một danh sách mới gồm các học sinh lớn hơn 15 tuổi và có điểm trung bình > 70.
function cau12() {
    let a = students.filter(s => {
        let avg = (s.math + s.english + s.science) / 3;
        return s.age < 15 && avg > 70
    });
    console.log(a);
}
// cau12();

// 13.Tính tổng số học sinh có điểm Khoa học từ 90 trở lên.
function cau13() {
    let a = students.filter(b => b.science > 90).reduce((sum, s) => sum += 1, 0);
    console.log(a);

}
// cau13();

// 14.Tạo một bảng xếp hạng học sinh theo điểm trung bình (từ cao xuống thấp).
function cau14() {

    let sAVG = students.map(s => {
        s.avg = (s.math + s.english + s.science) / 3;
        return s;
    });
    let a = sAVG.sort((a, b) => b.avg - a.avg);
    console.log(a);
}
// cau14();

// 15.Viết một hàm kiểm tra xem có học sinh nào có tên gồm 4 từ không.
function cau15() {
    let a = students.some(s => s.name.split(" ").length === 5);
    console.log(a);
}
// cau15();

// 16.Tìm các học sinh có tên chứa ký tự "a" nhiều hơn 2 lần.
function cau16() {
    const check = students.filter(e => checkName(e.name));
    console.log(check);
}

function checkName(str) {
    let count = 0;
    str.split("").map(e => {
        if (isA(e)) {
            count++
        }
    });

    return count > 2;
}

function isA(d) {
    return d
        .normalize("NFD")              // tách dấu
        .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
        .toLowerCase() === "a";
}
// cau16();


// 17.Đổi tên tất cả học sinh lớp 9 sang dạng in hoa toàn bộ.
function cau17() {
    let a = students.map(s => {
        if (s.class == "9") {
            s.name = s.name.toUpperCase();
        }
        return s;
    });
    console.log(a);
}
// cau17();

// 18.Thêm 3 học sinh mới với thông tin đầy đủ vào danh sách.
function cau18() {
    let hsmoi = [
        { name: "Trần Văn K", age: 16, class: 10, math: 75, english: 58, science: 85 },
        { name: "Nguyễn Thị H", age: 15, class: 9, math: 60, english: 62, science: 91 },
        { name: "Lê Văn L", age: 17, class: 11, math: 88, english: 92, science: 87 },
    ];
    let a = students.push(...hsmoi);
    console.log(students);
}
// cau18();

// 19.Lọc danh sách học sinh có tất cả điểm >= 50 và tuổi <= 15.
function cau19() {
    let a = students.filter(s => s.math >= 50 && s.english >= 50 && s.science >= 50 && s.age <= 15);
    console.log(a);
}
// cau19();
