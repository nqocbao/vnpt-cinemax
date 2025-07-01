package com.cinemax.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.service.MovieService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@AllArgsConstructor
@RestController
@RequestMapping("/api/movie")
public class MovieController {
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<MovieDto>> getAllMovie() {
        try {
            List<MovieDto> movies = movieService.getAllMovie();
            if (movies.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(movies);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
