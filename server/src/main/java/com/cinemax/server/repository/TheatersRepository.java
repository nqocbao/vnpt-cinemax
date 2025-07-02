package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinemax.server.entity.Theaters;

public interface TheatersRepository extends JpaRepository<Theaters, Integer> {

}