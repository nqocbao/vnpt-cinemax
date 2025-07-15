# Website Chuỗi rạp phim Cinemax

[![ReactJS](https://img.shields.io/badge/ReactJS-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Shadcn](https://img.shields.io/badge/Shadcn-000000.svg?style=for-the-badge&logo=shadcn&logoColor=white)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 🎬 Giới thiệu

Website Chuỗi rạp phim Cinemax là nền tảng đặt vé, quản lý và tra cứu thông tin phim, rạp, suất chiếu, blog sự kiện... dành cho chuỗi rạp phim Cinemax. Website hướng tới trải nghiệm **hiện đại**, **thân thiện**, **dễ sử dụng** cho cả khách hàng và quản trị viên.

---

## 🛠️ Công nghệ sử dụng

### 1. **Frontend**

- ReactJS
- TypeScript
- Shadcn UI
- TailwindCSS
- React Router

### 2. **Backend**

- Spring Boot
- Java 17+
- MySQL
- JPA/Hibernate

---

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống

- **Node.js:** >= 16
- **Java:** >= 17
- **MySQL:** >= 8
- **Git**

### Các bước cài đặt

1. **Clone repository** 📥

   ```bash
   git clone https://github.com/nqocbao/cinemax-cinema.git
   cd cinemax-cinema
   ```

2. **Cài đặt Frontend** ⚛️

   ```bash
   cd client
   npm install
   npm run dev
   ```

   Truy cập: [http://localhost:5173](http://localhost:5173)

3. **Cài đặt Backend** ☕
   ```bash
   cd ../server
   # Cấu hình database trong src/main/resources/application.properties
   ./mvnw spring-boot:run
   ```
   API chạy tại: [http://localhost:8080](http://localhost:8080)

---

## :twisted_rightwards_arrows: Quy trình làm việc nhóm

### 1. **Chiến lược branch**

- **main:** Mã nguồn ổn định, không commit trực tiếp.
- **dev:** Nhánh phát triển chung.
- **feature/**: Nhánh cho từng tính năng, ví dụ: `feature/booking-flow`, `feature/admin-dashboard`.

#### Quy trình:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/ten-tinh-nang
# Làm việc, commit, push lên remote
git push origin feature/ten-tinh-nang
# Tạo pull request để review và merge vào dev/main
```

### 2. **Quy tắc commit**

- **feat:** Thêm mới tính năng
- **fix:** Sửa lỗi
- **refactor:** Cải tiến code
- **chore:** Công việc phụ trợ
- **docs:** Tài liệu

Ví dụ:

```bash
feat: Thêm chức năng đặt vé online
fix: Sửa lỗi hiển thị danh sách phim
```

---

## 💡 Hướng dẫn sử dụng

- Đăng ký/đăng nhập tài khoản để đặt vé, quản lý thông tin cá nhân.
- Duyệt, tìm kiếm phim, xem chi tiết, chọn suất chiếu và đặt vé trực tuyến.
- Quản trị viên có thể quản lý phim, rạp, suất chiếu, người dùng, blog, sự kiện...
- Giao diện responsive, hỗ trợ tốt trên cả desktop và mobile.

---

## :computer: Chạy thử ứng dụng

- Chạy backend và frontend như hướng dẫn trên.
- Truy cập [http://localhost:5173](http://localhost:5173) để trải nghiệm website đặt vé rạp phim Cinemax.

---
