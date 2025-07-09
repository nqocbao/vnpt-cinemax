package com.cinemax.server.mapper;

import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.entity.Movie;

public class MovieMapper {

    public static MovieDto mapToMovieDto(Movie movie) {
        return new MovieDto(
                movie.getId(),
                movie.getTitle(),
                movie.getRunningTime(),
                movie.getGenre(),
                movie.getMovieTime(),
                movie.getDirector(),
                movie.getCast(),
                movie.getContent(),
                movie.getLanguage(),
                movie.getReleaseDate(),
                movie.getPosterUrl(),
                movie.getTrailerUrl(),
                movie.getAgeLimit(),
                movie.getCreateAt());
    }

    public static Movie mapToMovie(MovieDto MovieDto) {
        return new Movie(
                MovieDto.getId(),
                MovieDto.getTitle(),
                MovieDto.getRunningTime(),
                MovieDto.getGenre(),
                MovieDto.getMovieTime(),
                MovieDto.getDirector(),
                MovieDto.getCast(),
                MovieDto.getContent(),
                MovieDto.getLanguage(),
                MovieDto.getReleaseDate(),
                MovieDto.getPosterUrl(),
                MovieDto.getTrailerUrl(),
                MovieDto.getAgeLimit(),
                MovieDto.getCreateAt());
    }

}
