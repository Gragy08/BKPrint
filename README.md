# Student Smart Printing Service (HCMUT_SSPS)

## Tổng quan tài liệu

Tài liệu này dùng để chỉ rõ các yêu cầu cho hệ thống HCMUT_SSPS để cho sinh viên Đại học Bách khoa Thành phố Hồ Chí Minh in tài liệu trong khuôn viên trường.

---

## Các yêu cầu chức năng

### Yêu cầu tổng quan

1. **Xác thực đăng nhập**
    - Tất cả người dùng phải được xác thực bằng dịch vụ xác thực HCMUT_SSO trước khi sử dụng hệ thống.

2. **Đăng xuất**
    - Phải có chức năng đăng xuất được người dùng sử dụng khi không muốn dùng dịch vụ nữa.

### Cho sinh viên

1. **Chọn máy in**
    - Sinh viên có thể chọn máy in cụ thể dựa theo nhu cầu của mình để dùng.

2. **Tải tài liệu**
    - Sinh viên có thể tải nhiều tài liệu để in.

3. **Tùy chọn in ấn**
    - Sinh viên có thể chỉnh sửa các thuộc tính khi in như in một mặt hoặc hai mặt, in màu hoặc trắng đen,...

4. **Mua trang in**
    - Sinh viên có thể mua thêm trang in và thanh toán thông qua dịch vụ BKPay.

5. **Xem lịch sử in**
    - Sinh viên có thể xem lịch sử in của mình.

6. **Xem lịch sử thanh toán**
    - Sinh viên có thể xem lịch sử thanh toán khi mua các trang in.

### Cho SPSO

1. **Quản lý máy in**
    - SPSO có thể thêm, xóa, bật, tắt và chỉnh sửa thông tin máy in.

2. **Cấu hình hệ thống**
    - SPSO có thể cấu hình các mặc định của hệ thống bao gồm số trang cung cấp cho sinh viên mỗi kỳ, các loại tệp được phép tải lên,...

3. **Xem lịch sử in của sinh viên**
    - SPSO có thể xem lịch sử in của tất cả sinh viên hoặc một sinh viên trong một khoảng thời gian cụ thể.

4. **Xem lịch sử in của máy in**
    - SPSO có thể xem lịch sử in của tất cả máy in hoặc một máy in trong một khoảng thời gian cụ thể.

5. **Xem báo cáo**
    - Báo cáo hàng tháng và hàng năm sẽ được tạo tự động để SPSO xem xét.

---

## Các yêu cầu phi chức năng

1. **Bảo mật**
    - Tất cả dữ liệu phải được mã hóa và bảo vệ khỏi sự truy cập không được xác thực.

2. **Hiệu suất**
    - Hệ thống phải xử lí các tác vụ với độ trễ thấp.

3. **Đa nền tảng**
    - Hệ thống có thể được sử dụng trên cả ứng dụng web và thiết bị di dộng.

4. **Khả năng mở rộng**
    - Hệ thống phải có khả năng mở rộng để đáp ứng số lượng sinh viên và máy in ngày cảng tăng.

5. **UI/UX**
    - Giao diện phải thân thiện, dễ sử dụng.

6. **Sao lưu dữ liệu**
    - Hệ thống phải sao lưu dữ liệu định kỳ để ngăn ngừa các sự cố bất ngờ.

---

## Các cải tiến trong tương lai

1. Tích hợp với dịch vụ thư viện của trường để hỗ trợ cho sinh viên in ấn nguồn tài liệu có sẵn dễ dàng.

2. Hỗ trợ thêm nhiều phương thức thanh toán khác.

3. Mở rộng cho giảng viên sử dụng.  

---

## Các công nghệ sử dụng
1. UX/UI: Figma
2. Giao diện: Pug, Sass
3. Xử lý logic: Javascript
4. Database: Json Server (db.json)

---

## Các kho lưu trữ:
1. Source code:
`https://github.com/Gragy08/BKPrint`
2. Database:
`https://github.com/Gragy08/BKPrintDatabase`

---
## Cài đặt 

Clone repository này về máy local:

`git clone https://github.com/Gragy08/BKPrint.git`

---

Để chạy hệ thống cần hai chương trình: một chương trình cho cơ sở dữ liệu và một chương trình cho hệ thống.

## Chạy chương trình cho cơ sở dũ liệu

Chuyển vào thư mục ***database***

`cd database`

Mở terminal và gõ lệnh

`npm run start`

## Chạy chương trình cho hệ thống

Trước tiên cài extension ***open with live server***.

Sau đó click vào file index.html và nhấn vào open with live server.

---

Tài liệu này sẽ được cập nhật thường xuyên khi hệ thống có thay đổi.

16/12/2024.
