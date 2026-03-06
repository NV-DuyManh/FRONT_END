// Hàm upload ảnh lên Cloudinary và trả về đường dẫn ảnh sau khi upload thành công
async function uploadImageToCloudinary(file) {
    // Thông tin tài khoản Cloudinary (cần cấu hình sẵn)
    const cloudName = "duuujvsz7";       // Thay bằng cloud_name của bạn trên Cloudinary
    const uploadPreset = "nhahang";      // Thay bằng upload_preset đã tạo trong Cloudinary

    // Tạo một FormData để chứa file và các thông tin cấu hình
    const formData = new FormData();
    formData.append("file", file);               // Thêm file ảnh
    formData.append("upload_preset", uploadPreset); // Thêm preset để cho phép upload không cần xác thực

    try {
        // Gửi yêu cầu POST đến API của Cloudinary
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
        });

        // Nếu server trả về lỗi (status !== 200)
        if (!response.ok) {
            throw new Error("Không thể upload ảnh lên Cloudinary");
        }

        // Chuyển kết quả từ JSON sang object và lấy link ảnh
        const result = await response.json();
        return result.secure_url; // Trả về link ảnh HTTPS

    } catch (error) {
        // In lỗi ra console nếu có vấn đề trong quá trình upload
        console.error("Lỗi khi upload ảnh lên Cloudinary:", error);
        return null; // Trả về null để phía gọi xử lý tiếp (ví dụ: không hiển thị ảnh)
    }
}