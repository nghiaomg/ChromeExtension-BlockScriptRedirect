# Script Redirect Block

Script Redirect Block là một extension Chrome giúp chặn các script chuyển hướng tự động mở tab mới và hiển thị số lượng lần chặn.

## Tính năng chính

- Chặn các script tự động mở tab mới
- Hiển thị số lượng lần chặn
- Nút bật/tắt để kiểm soát chức năng chặn

## Cài đặt

1. Tải về hoặc clone repository này.
2. Mở Chrome và truy cập `chrome://extensions/`.
3. Bật chế độ `Developer mode` ở góc trên bên phải.
4. Nhấn vào nút `Load unpacked` và chọn thư mục chứa các file của extension.

## Sử dụng

1. Sau khi cài đặt, bạn sẽ thấy biểu tượng của Script Redirect Block trên thanh công cụ của Chrome.
2. Nhấn vào biểu tượng để mở popup.
3. Sử dụng nút `Toggle Ad Block` để bật hoặc tắt chức năng chặn.
4. Số lượng lần chặn sẽ được hiển thị dưới nút.

## Cấu trúc thư mục

- `manifest.json`: File cấu hình của extension.
- `background.js`: Script nền để xử lý chặn chuyển hướng và lưu trữ số lượng chặn.
- `content.js`: Script nội dung để chặn các mã JavaScript mở tab mới.
- `popup.html`: Giao diện popup của extension.
- `popup.js`: Script xử lý sự kiện cho popup.

## Đóng góp

Nếu bạn muốn đóng góp cho dự án, vui lòng fork repository này và gửi pull request. Mọi đóng góp đều được hoan nghênh!

## Giấy phép

Dự án này được cấp phép theo giấy phép MIT. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.