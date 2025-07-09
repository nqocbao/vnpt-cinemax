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

}
