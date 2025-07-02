package com.cinemax.server.service;

import java.util.List;

import com.cinemax.server.dto.TheatersDto;

public interface TheatersService {
    // Lấy thông tin rạp bằng id
    TheatersDto getTheatersById(Integer id);

    // Lấy danh sách taast cả rạp phim
    List<TheatersDto> getALlTheater();
}