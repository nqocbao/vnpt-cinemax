package com.cinemax.server.repository;

import com.cinemax.server.entity.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Integer> {
    List<Seat> findByTheater_Id(Integer theaterId);
    Seat findByTheater_IdAndSeatRowAndSeatNumber(Integer theaterId, String seatRow, String seatNumber);
} 