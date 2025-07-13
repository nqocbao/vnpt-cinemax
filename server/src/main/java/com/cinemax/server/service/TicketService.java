package com.cinemax.server.service;

import com.cinemax.server.dto.TicketDto;
import java.util.List;
import java.util.Map;

public interface TicketService {
    TicketDto bookTicket(TicketDto ticketDto);
    Map<String, Object> bookTickets(Map<String, Object> bookingRequest);
    TicketDto updateTicketStatusByUserId(Integer ticketId, Integer userId, String status);
    List<TicketDto> getTicketsByUserId(Integer userId);
    List<Map<String, String>> getBookedSeats(Integer movieId, Integer theaterId, Integer showTimeId);
} 