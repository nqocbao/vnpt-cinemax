package com.cinemax.server.service;

import java.time.LocalDate;
import java.util.List;

import com.cinemax.server.dto.ShowTimesDto;

public interface ShowTimesService {
    // Laấy thông tin của khung giờ chiếu showtime bằng id
    ShowTimesDto getShowTimesById(Integer id);

    // Lấy danh sách khung giờ chiếu
    List<ShowTimesDto> getAllShowTimes();

    // Lấy danh sách showtime theo movie, theater và date
    List<ShowTimesDto> getShowTimesByMovieAndTheaterAndDate(Integer movieId, Integer theaterId, LocalDate date);
    
    // Tạo hoặc lấy showtime theo movie, theater, date và startTime
    ShowTimesDto createOrGetShowTime(Integer movieId, Integer theaterId, LocalDate date, String startTime);
}
