package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinemax.server.entity.ShowTimes;

public interface ShowTimesRepository extends JpaRepository<ShowTimes, Integer> {

}
