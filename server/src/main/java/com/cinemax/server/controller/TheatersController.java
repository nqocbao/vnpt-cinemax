package com.cinemax.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cinemax.server.dto.TheatersDto;
import com.cinemax.server.service.TheatersService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@AllArgsConstructor
@RestController
@RequestMapping("/api/theaters")
public class TheatersController {
    private TheatersService theatersService;

    @GetMapping("/{id}")
    public ResponseEntity<TheatersDto> getTheatersById(@PathVariable("id") int id) {
        TheatersDto theatersDto = theatersService.getTheatersById(id);
        if (theatersDto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(theatersDto);
    }

    @GetMapping
    public ResponseEntity<List<TheatersDto>> getAllTheaters() {
        List<TheatersDto> theater = theatersService.getALlTheater();
        if (theater.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(theater);
    }

}
