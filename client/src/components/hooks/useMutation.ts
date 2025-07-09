import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Xóa thành công!",
        icon: "success",
        confirmButtonText: "OK",
      });
      queryClient.invalidateQueries({
        queryKey: ["USERS"],
      });
    },
    onError: (error) => {
      if (error.message) {
        Swal.fire({
          title: "Lỗi!",
          text: `Đã xảy ra lỗi khi xóa người dùng: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });
};
