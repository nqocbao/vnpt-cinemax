package com.cinemax.server.service;

import java.util.List;

import com.cinemax.server.dto.MovieDto;

public interface MovieService {
    // Laasy danh sách tất cả phim
    List<MovieDto> getAllMovie();
}
