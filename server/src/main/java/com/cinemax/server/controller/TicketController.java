package com.cinemax.server.controller;

import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/status/{ticketId}")
    public ResponseEntity<TicketDto> updateTicketStatus(@PathVariable Integer ticketId, @RequestParam Integer userId, @RequestParam String status) {
        TicketDto updated = ticketService.updateTicketStatusByUserId(ticketId, userId, status);
        return ResponseEntity.ok(updated);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<java.util.List<TicketDto>> getTicketsByUserId(@PathVariable Integer userId) {
        var tickets = ticketService.getTicketsByUserId(userId);
        return ResponseEntity.ok(tickets);
    }
} 