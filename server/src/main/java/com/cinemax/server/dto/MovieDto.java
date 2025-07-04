package com.cinemax.server.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieDto {
    private int id;
    private String title;
    private int runningTime;
    private String genre;
    private LocalDateTime movieTime;
    private String director;
    private String cast;
    private String content;
    private String language;
    private LocalDate releaseDate;
    private String posterUrl;
    private String trailerUrl;
    private LocalDateTime createAt;
}
