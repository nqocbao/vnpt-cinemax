package com.cinemax.server.repository;

import com.cinemax.server.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    Optional<Ticket> findFirstBySeat_IdAndTheater_IdAndMovie_IdAndBookingTimeAndStatusIsNot(Integer seatId, Integer theaterId, Integer movieId, LocalDateTime bookingTime, Ticket.Status status);
    List<Ticket> findByMovie_IdAndTheater_IdAndSeat_IdAndBookingTimeAndStatusAndUser_Id(Integer movieId, Integer theaterId, Integer seatId, LocalDateTime bookingTime, Ticket.Status status, Integer userId);
    List<Ticket> findByMovie_IdAndTheater_IdAndSeat_IdAndBookingTimeAndStatus(Integer movieId, Integer theaterId, Integer seatId, LocalDateTime bookingTime, Ticket.Status status);
    List<Ticket> findByIdAndStatusAndUser_Id(Integer id, Ticket.Status status, Integer userId);
    List<Ticket> findByIdAndUser_Id(Integer id, Integer userId);
    List<Ticket> findByIdAndStatus(Integer id, Ticket.Status status);
    List<Ticket> findByIdAndStatusAndMovie_IdAndTheater_IdAndSeat_IdAndBookingTime(Integer id, Ticket.Status status, Integer movieId, Integer theaterId, Integer seatId, LocalDateTime bookingTime);
    List<Ticket> findByUser_Id(Integer userId);
    Optional<Ticket> findFirstBySeat_IdAndTheater_IdAndMovie_IdAndStatusIsNot(Integer seatId, Integer theaterId, Integer movieId, Ticket.Status status);
    List<Ticket> findByMovie_IdAndTheater_IdAndShowTimes_IdAndStatusIn(
        Integer movieId,
        Integer theaterId,
        Integer showTimeId,
        List<Ticket.Status> statuses
    );
} 