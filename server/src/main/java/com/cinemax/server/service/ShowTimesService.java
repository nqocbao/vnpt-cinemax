package com.cinemax.server.service;

import java.util.List;

import com.cinemax.server.dto.ShowTimesDto;

public interface ShowTimesService {
    // Laấy thông tin của khung giờ chiếu showtime bằng id
    ShowTimesDto getShowTimesById(Integer id);

    // Lấy danh sách khung giờ chiếu
    List<ShowTimesDto> getAllShowTimes();
}
