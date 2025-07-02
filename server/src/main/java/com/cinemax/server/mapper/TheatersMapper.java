package com.cinemax.server.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.cinemax.server.dto.TheatersDto;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.Theaters;

public class TheatersMapper {

    public static TheatersDto mapToTheaterDto(Theaters theaters) {
        List<Integer> movies_id = theaters.getMovies() != null
                ? theaters.getMovies().stream().map(Movie::getId).collect(Collectors.toList())
                : List.of();

        return new TheatersDto(
                theaters.getId(),
                theaters.getName(),
                theaters.getLocation(),
                movies_id,
                theaters.getCreateAt());
    }

    public static Theaters mapToTheaters(TheatersDto theatersDto) {

        List<Movie> movies = theatersDto.getMoviesId() != null
                ? theatersDto.getMoviesId().stream().map(id -> {
                    Movie movie = new Movie();
                    movie.setId(id);
                    return movie;
                }).collect(Collectors.toList())
                : List.of();

        return new Theaters(
                theatersDto.getId(),
                theatersDto.getName(),
                theatersDto.getLocation(),
                movies,
                theatersDto.getCreateAt());

    }
}
