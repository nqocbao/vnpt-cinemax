package com.cinemax.server.controller;

import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @PostMapping("/book")
    public ResponseEntity<TicketDto> bookTicket(@RequestBody TicketDto ticketDto) {
        TicketDto booked = ticketService.bookTicket(ticketDto);
        return ResponseEntity.ok(booked);
    }

    @PostMapping("/booking")
    public ResponseEntity<Map<String, Object>> bookTickets(@RequestBody Map<String, Object> bookingRequest) {
        Map<String, Object> response = ticketService.bookTickets(bookingRequest);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/status/{ticketId}")
    public ResponseEntity<TicketDto> updateTicketStatus(@PathVariable Integer ticketId, @RequestParam Integer userId,
            @RequestParam String status) {
        TicketDto updated = ticketService.updateTicketStatusByUserId(ticketId, userId, status);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<java.util.List<TicketDto>> getTicketsByUserId(@PathVariable Integer userId) {
        var tickets = ticketService.getTicketsByUserId(userId);
        return ResponseEntity.ok(tickets);
    }

    @GetMapping("/booked-seats")
    public ResponseEntity<java.util.List<Map<String, String>>> getBookedSeats(
            @RequestParam Integer movieId,
            @RequestParam Integer theaterId,
            @RequestParam Integer showTimeId) {
        var seats = ticketService.getBookedSeats(movieId, theaterId, showTimeId);
        return ResponseEntity.ok(seats);
    }
}