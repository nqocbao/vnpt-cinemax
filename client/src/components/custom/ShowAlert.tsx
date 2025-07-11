import Swal from "sweetalert2";

export const showSuccessAlert = (message: string) => {
  Swal.fire({
    icon: "success",
    title: "Thành công!",
    text: message,
    confirmButtonText: "OK",
    confirmButtonColor: "#4ade80",
    background: "#f0fdf4",
    iconColor: "#22c55e",
  });
};

export const showErrorAlert = (message: string) => {
  Swal.fire({
    icon: "error",
    title: "Lỗi!",
    text: message,
    confirmButtonText: "Thử lại",
    confirmButtonColor: "#f87171", 
    background: "#fef2f2",
    iconColor: "#ef4444",
  });
};