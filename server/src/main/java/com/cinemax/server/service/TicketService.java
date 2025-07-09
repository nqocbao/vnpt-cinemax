package com.cinemax.server.service;

import com.cinemax.server.dto.TicketDto;
import java.util.List;

public interface TicketService {
    TicketDto bookTicket(TicketDto ticketDto);
    TicketDto updateTicketStatusByUserId(Integer ticketId, Integer userId, String status);
    List<TicketDto> getTicketsByUserId(Integer userId);
} 