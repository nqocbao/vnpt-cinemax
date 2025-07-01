package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinemax.server.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

}