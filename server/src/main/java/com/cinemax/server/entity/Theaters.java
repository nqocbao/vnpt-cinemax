package com.cinemax.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "theaters")
public class Theaters {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "location", nullable = false)
    private String location;

    // @ManyToOne
    // @JoinColumn(name = "movies_id")
    // private List<Movie> movies_id;
    @ManyToMany
    @JoinTable(name = "theater_movies", joinColumns = @JoinColumn(name = "theater_id"), inverseJoinColumns = @JoinColumn(name = "movie_id"))
    private List<Movie> movies;

    @Column(name = "create_at")
    private LocalDateTime createAt;
}
