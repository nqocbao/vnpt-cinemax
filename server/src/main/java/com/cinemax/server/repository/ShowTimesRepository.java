package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cinemax.server.entity.ShowTimes;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

public interface ShowTimesRepository extends JpaRepository<ShowTimes, Integer> {
    @Query("SELECT st FROM ShowTimes st WHERE st.movie.id = :movieId AND st.theater.id = :theaterId AND st.show_date = :date")
    List<ShowTimes> findByMovieIdAndTheaterIdAndDate(
        @Param("movieId") Integer movieId,
        @Param("theaterId") Integer theaterId,
        @Param("date") LocalDate date
    );
    
    @Query("SELECT st FROM ShowTimes st WHERE st.movie.id = :movieId AND st.theater.id = :theaterId AND st.show_date = :date AND st.start_time = :startTime")
    Optional<ShowTimes> findByMovieIdAndTheaterIdAndDateAndStartTime(
        @Param("movieId") Integer movieId,
        @Param("theaterId") Integer theaterId,
        @Param("date") LocalDate date,
        @Param("startTime") LocalTime startTime
    );
}
