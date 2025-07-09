package com.cinemax.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "running_time", nullable = false)
    private int runningTime;

    @Column(name = "genre", nullable = false)
    private String genre;

    @Column(name = "movie_time")
    private LocalDateTime movieTime;

    @Column(name = "director")
    private String director;

    @Column(name = "cast", columnDefinition = "TEXT")
    private String cast;

    @Column(name = "content", columnDefinition = "LONGTEXT")
    private String content;

    @Column(name = "language")
    private String language;

    @Column(name = "release_date")
    private LocalDate releaseDate;

    @Column(name = "poster_url")
    private String posterUrl;

    @Column(name = "trailer_url")
    private String trailerUrl;

    @Column(name = "age_limit")
    private String ageLimit;

    @Column(name = "create_at")
    private LocalDateTime createAt;
}
