# Báo cáo công việc — 12/11/2026

## 1. Chuẩn hóa cấu trúc dự án

- Tổ chức lại ứng dụng Next.js theo các lớp route, feature, component dùng chung và thư viện hạ tầng.
- Bổ sung các trạng thái giao diện cấp ứng dụng như loading, error và not found.
- Chuẩn hóa API client và các component UI dùng chung theo quy ước shadcn/ui, sử dụng Radix UI cho các tương tác phù hợp.
- Tạo [checklist thêm màn hình](./feature-screen-checklist.md) và cập nhật README để hướng dẫn cách phát triển, kiểm tra và vận hành.

## 2. Cải thiện giao diện và biểu mẫu

- Làm mới màn đăng nhập và quên mật khẩu theo cùng hệ thống màu sắc và nhận diện.
- Sắp xếp lại màn đăng ký thành một view trên desktop thông dụng; chuyển liên kết “BACK TO SIGN IN” xuống hàng cuối, căn giữa dòng bản quyền và đặt nút gửi ở cuối hàng.
- Bỏ nhãn “FACEBOOK” phía trên nút mở Facebook.
- Tăng kích thước khu vực ảnh hồ sơ, đồng thời hiển thị ảnh trọn vẹn thay vì cắt ảnh.
- Khôi phục màu xanh cho nút chính, trạng thái hover và focus.

## 3. Logo và nhận diện

- Thay asset logo bằng hình IKAK mới nhất do người dùng cung cấp.
- Đồng bộ component nhận diện trên màn đăng nhập, đăng ký và quên mật khẩu.
- Bỏ nền tròn trắng và bóng đổ trang trí quanh logo.
- Tăng kích thước tên tổ chức và dòng chữ Hán/Nhật; giữ nội dung nhận diện thống nhất trên ba màn hình.

## 4. Chạy ứng dụng

- Thêm `run.bat` để chạy dự án bằng cách nhấp đúp trên Windows.
- Đổi lệnh phát triển ở thư mục gốc sang `npm run dev`, không yêu cầu cài `pnpm` trong PATH.
- Cập nhật README với hướng dẫn khởi động nhanh.

## 5. Kiểm tra

- ESLint: đạt.
- TypeScript typecheck: đạt.
- Prettier: đạt.
- Production build: đạt sau các thay đổi giao diện và logo.
- `git diff --check`: đạt.
- Kiểm tra trình duyệt: các màn đăng nhập, đăng ký và quên mật khẩu hiển thị logo/nhận diện thống nhất; màn đăng ký desktop 1366 × 768 không phát sinh cuộn trang.
- Kiểm tra lệnh `npm run dev`: ứng dụng phản hồi HTTP 200. Khi cổng 3000 đã bận, Next.js tự chọn cổng khác.

## 6. Việc cần theo dõi

- Cách dừng tiến trình dev server trên Windows bằng `Ctrl+C` chưa được xác nhận là hoạt động ổn định. Cần kiểm tra việc truyền tín hiệu dừng qua các tiến trình npm lồng nhau và cập nhật `run.bat` nếu cần.
- Thay đổi hiện nằm trong worktree và chưa được commit.
