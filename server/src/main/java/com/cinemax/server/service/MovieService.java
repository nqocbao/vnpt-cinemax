package com.cinemax.server.service;

import java.util.List;

import com.cinemax.server.dto.MovieDto;

public interface MovieService {

    // Lấy thông tin bằng id
    MovieDto getMovieById(Integer id);

    // Laasy danh sách tất cả phim
    List<MovieDto> getAllMovie();
}
