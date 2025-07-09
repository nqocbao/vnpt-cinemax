package com.cinemax.server.mapper;

import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.entity.Ticket;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.Theaters;
import com.cinemax.server.entity.Seat;
import com.cinemax.server.entity.Users;

public class TicketMapper {
    public static Ticket mapToTicket(TicketDto dto) {
        Ticket ticket = new Ticket();
        ticket.setId(dto.getId());
        if (dto.getMovieId() != null) {
            Movie movie = new Movie();
            movie.setId(dto.getMovieId());
            ticket.setMovie(movie);
        }
        if (dto.getTheaterId() != null) {
            Theaters theater = new Theaters();
            theater.setId(dto.getTheaterId());
            ticket.setTheater(theater);
        }
        if (dto.getSeatId() != null) {
            Seat seat = new Seat();
            seat.setId(dto.getSeatId());
            ticket.setSeat(seat);
        }
        if (dto.getUserId() != null) {
            Users user = new Users();
            user.setId(dto.getUserId());
            ticket.setUser(user);
        }
        ticket.setPrice(dto.getPrice());
        ticket.setBookingTime(dto.getBookingTime());
        if (dto.getStatus() != null) {
            ticket.setStatus(Ticket.Status.valueOf(dto.getStatus()));
        }
        return ticket;
    }

    public static TicketDto mapToTicketDto(Ticket ticket) {
        TicketDto dto = new TicketDto();
        dto.setId(ticket.getId());
        dto.setPrice(ticket.getPrice());
        dto.setBookingTime(ticket.getBookingTime());
        dto.setStatus(ticket.getStatus() != null ? ticket.getStatus().name() : null);
        dto.setMovieId(ticket.getMovie() != null ? ticket.getMovie().getId() : null);
        dto.setTheaterId(ticket.getTheater() != null ? ticket.getTheater().getId() : null);
        dto.setSeatId(ticket.getSeat() != null ? ticket.getSeat().getId() : null);
        dto.setUserId(ticket.getUser() != null ? ticket.getUser().getId() : null);
        return dto;
    }
} 