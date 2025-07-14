package com.cinemax.server.service.impl;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cinemax.server.dto.ShowTimesDto;
import com.cinemax.server.entity.ShowTimes;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.Theaters;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.ShowTimesMapper;
import com.cinemax.server.repository.ShowTimesRepository;
import com.cinemax.server.repository.MovieRepository;
import com.cinemax.server.repository.TheatersRepository;
import com.cinemax.server.service.ShowTimesService;

import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class ShowTimesServiceImpl implements ShowTimesService {
    private ShowTimesRepository showTimesRepository;
    private MovieRepository movieRepository;
    private TheatersRepository theatersRepository;

    @Override
    public ShowTimesDto getShowTimesById(Integer id) {
        ShowTimes showTimes = showTimesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Showtimes not found with id: " + id));
        return ShowTimesMapper.mapToShowTimesDto(showTimes);
    }

    @Override
    public List<ShowTimesDto> getAllShowTimes() {
        List<ShowTimes> showTimes = showTimesRepository.findAll();
        return showTimes.stream().map(ShowTimesMapper::mapToShowTimesDto).toList();
    }

    @Override
    public List<ShowTimesDto> getShowTimesByMovieAndTheaterAndDate(Integer movieId, Integer theaterId, LocalDate date) {
        List<ShowTimes> showTimes = showTimesRepository.findByMovieIdAndTheaterIdAndDate(movieId, theaterId, date);
        return showTimes.stream().map(ShowTimesMapper::mapToShowTimesDto).toList();
    }
    
    @Override
    public ShowTimesDto createOrGetShowTime(Integer movieId, Integer theaterId, LocalDate date, String startTime) {
        // Chuyển đổi String startTime thành LocalTime
        LocalTime localStartTime = LocalTime.parse(startTime);
        
        // Tìm showtime hiện có
        Optional<ShowTimes> existingShowTime = showTimesRepository.findByMovieIdAndTheaterIdAndDateAndStartTime(
            movieId, theaterId, date, localStartTime);
        
        if (existingShowTime.isPresent()) {
            return ShowTimesMapper.mapToShowTimesDto(existingShowTime.get());
        }
        
        // Tạo showtime mới nếu chưa có
        Movie movie = movieRepository.findById(movieId)
            .orElseThrow(() -> new ResourceNotFoundException("Movie not found with id: " + movieId));
        
        Theaters theater = theatersRepository.findById(theaterId)
            .orElseThrow(() -> new ResourceNotFoundException("Theater not found with id: " + theaterId));
        
        ShowTimes newShowTime = new ShowTimes();
        newShowTime.setMovie(movie);
        newShowTime.setTheater(theater);
        newShowTime.setShow_date(date);
        newShowTime.setStart_time(localStartTime);
        newShowTime.setNumber_seat(100); // Số ghế mặc định
        
        ShowTimes savedShowTime = showTimesRepository.save(newShowTime);
        return ShowTimesMapper.mapToShowTimesDto(savedShowTime);
    }
}
