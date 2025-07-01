package com.cinemax.server.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.mapper.MovieMapper;
import com.cinemax.server.repository.MovieRepository;
import com.cinemax.server.service.MovieService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {
    private MovieRepository movieRepository;

    @Override
    public List<MovieDto> getAllMovie() {
        List<Movie> movies = movieRepository.findAll();
        return movies.stream().map(MovieMapper::mapToMovieDto).toList();
    }

}
