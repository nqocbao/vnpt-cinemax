package com.cinemax.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cinemax.server.dto.ShowTimesDto;
import com.cinemax.server.service.ShowTimesService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.time.LocalDate;

@AllArgsConstructor
@RestController
@RequestMapping("/api/show_times")
public class ShowTimesController {
    private ShowTimesService showTimesService;

    @GetMapping("/{id}")
    public ResponseEntity<ShowTimesDto> getShowTimesById(@PathVariable("id") int id) {
        ShowTimesDto showTimesDto = showTimesService.getShowTimesById(id);
        if (showTimesDto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(showTimesDto);
    }

    @GetMapping
    public ResponseEntity<List<ShowTimesDto>> getAllShowTimes() {
        List<ShowTimesDto> showTimesDto = showTimesService.getAllShowTimes();
        if (showTimesDto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(showTimesDto);
    }

    @GetMapping("/movie/{movieId}/theater/{theaterId}")
    public ResponseEntity<List<ShowTimesDto>> getShowTimesByMovieAndTheater(
            @PathVariable("movieId") Integer movieId,
            @PathVariable("theaterId") Integer theaterId,
            @RequestParam("date") String date) {
        try {
            LocalDate localDate = LocalDate.parse(date);
            List<ShowTimesDto> showTimesDto = showTimesService.getShowTimesByMovieAndTheaterAndDate(movieId, theaterId, localDate);
            return ResponseEntity.ok(showTimesDto);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/create-or-get")
    public ResponseEntity<ShowTimesDto> createOrGetShowTime(
            @RequestParam Integer movieId,
            @RequestParam Integer theaterId,
            @RequestParam String date,
            @RequestParam String startTime) {
        try {
            LocalDate localDate = LocalDate.parse(date);
            ShowTimesDto showTime = showTimesService.createOrGetShowTime(movieId, theaterId, localDate, startTime);
            return ResponseEntity.ok(showTime);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
