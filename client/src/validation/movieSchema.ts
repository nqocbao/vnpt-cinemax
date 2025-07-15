import z from "zod";

export const movieSchema = z.object({
  title: z
    .string()
    .min(1, "Vui lòng nhập tên phim")
    .max(100, "Tên phim không được vượt quá 100 ký tự"),

  trailerUrl: z
    .string()
    .url("Trailer phải là URL hợp lệ")
    .max(255, "URL trailer quá dài"),

  runningTime: z
    .number()
    .min(30, "Thời lượng tối thiểu là 30 phút")
    .max(300, "Thời lượng tối đa là 300 phút"),

  genre: z
    .string()
    .min(1, "Vui lòng nhập thể loại")
    .max(50, "Tên thể loại quá dài"),

  director: z
    .string()
    .min(1, "Vui lòng nhập tên đạo diễn")
    .max(50, "Tên đạo diễn không được quá 50 ký tự"),

  cast: z
    .string()
    .min(1, "Vui lòng nhập tên diễn viên")
    .max(200, "Danh sách diễn viên quá dài"),
  ageLimit: z
      .string()
      .min(1, "Vui lòng nhập tuổi")
      .max(200, "Tuổi quá dài"),
  content: z
    .string()
    .min(20, "Nội dung phim phải ít nhất 20 ký tự")
    .max(2000, "Nội dung phim không được vượt quá 2000 ký tự"),

  language: z
    .string()
    .min(1, "Vui lòng nhập ngôn ngữ")
    .max(30, "Tên ngôn ngữ quá dài"),

  releaseDate: z
    .string()
    .refine(
      (val) => !isNaN(Date.parse(val)),
      { message: "Ngày phát hành không hợp lệ (YYYY-MM-DD)" }
    ),

  posterUrl: z
    .string()
    .url("Poster phải là URL hợp lệ")
    .max(255, "URL poster quá dài"),
});

export type MovieForm = z.infer<typeof movieSchema>;