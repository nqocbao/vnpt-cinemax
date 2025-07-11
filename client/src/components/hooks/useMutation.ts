import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import type { Movies } from "../interface/movies";
import { useNavigate } from "react-router-dom";
import { showErrorAlert, showSuccessAlert } from "../custom/ShowAlert";
import type { User } from "@/page/Admin/User/Columns";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string | number) => {
      const result = await Swal.fire({
        title: "Bạn có chắc chắn?",
        text: "Bạn sẽ không thể hoàn tác thao tác này!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Không, hủy bỏ!",
      });
      if (result.isConfirmed) {
        const res = await axios.delete(`/api/admin/users/${id}`);
        return res.data;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Đã hủy");
        throw new Error("UserCancelledDeletion");
      }
    },
    onSuccess: () => {
      showSuccessAlert("Xóa thành công");

      queryClient.invalidateQueries({
        queryKey: ["USERS"],
      });
    },
    onError: (error) => {
      if (error.message) {
        showErrorAlert(`Đã xảy ra lỗi: ${error.message}`);
      }
    },
  });
};

export const useDeleteMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string | number) => {
      const result = await Swal.fire({
        title: "Bạn có chắc chắn?",
        text: "Bạn sẽ không thể hoàn tác thao tác này!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Không, hủy bỏ!",
      });
      if (result.isConfirmed) {
        const res = await axios.delete(`/api/admin/movies/${id}`);
        return res.data;
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Đã hủy");
        throw new Error("UserCancelledDeletion");
      }
    },
    onSuccess: () => {
      showSuccessAlert("Xóa thành công");
      queryClient.invalidateQueries({
        queryKey: ["MOVIES"],
      });
    },
    onError: (error) => {
      if (error.message) {
        showErrorAlert(`Đã xảy ra lỗi: ${error.message}`);
      }
    },
  });
};

export const useAddMovie = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (movie: Movies) => {
      const res = await axios.post("/api/admin/movies", movie);
      return res.data;
    },
    onSuccess: () => {
      showSuccessAlert("Tạo phim thành công!");
      navigate("/admin/movie");
    },
    onError: (error) => {
      if (error.message) {
        showErrorAlert(`Đã xảy ra lỗi: ${error.message}`);
      }
    },
  });
};

export const useUpdateMovie = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (movie: Movies) => {
      const res = await axios.put(`/api/admin/movies/${movie.id}`, movie);
      return res.data;
    },
    onSuccess: () => {
      showSuccessAlert("Cập nhật phim thành công!");
      navigate("/admin/movie");
    },
    onError: (error) => {
      if (error.message) {
        showErrorAlert(`Đã xảy ra lỗi: ${error.message}`);
      }
    },
  });
};

export const useUpdateUser = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: async (user: User) => {
      const res = await axios.put(`/api/admin/users/${user.id}`, user);
      return res.data;
    },
    onSuccess: () => {
      showSuccessAlert("Cập nhật người dùng thành công!");

        navigate("/admin/user");
    },
    onError: (error) => {
       if (error.message) {
        showErrorAlert(`Đã xảy ra lỗi: ${error.message}`);
      }
    },
  });
}
