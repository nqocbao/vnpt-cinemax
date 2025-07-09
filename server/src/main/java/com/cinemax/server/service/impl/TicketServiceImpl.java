package com.cinemax.server.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.entity.Ticket;
import com.cinemax.server.mapper.TicketMapper;
import com.cinemax.server.repository.TicketRepository;
import com.cinemax.server.service.TicketService;

import java.util.List;
import java.util.Optional;

@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public TicketDto bookTicket(TicketDto ticketDto) {

        Optional<Ticket> existing = ticketRepository
                .findFirstBySeat_IdAndTheater_IdAndMovie_IdAndBookingTimeAndStatusIsNot(
                        ticketDto.getSeatId(),
                        ticketDto.getTheaterId(),
                        ticketDto.getMovieId(),
                        ticketDto.getBookingTime(),
                        Ticket.Status.cancelled);
        if (existing.isPresent()) {
            throw new IllegalArgumentException("Ghế đã được đặt hoặc không hợp lệ!");
        }
        Ticket ticket = TicketMapper.mapToTicket(ticketDto);
        Ticket savedTicket = ticketRepository.save(ticket);
        return TicketMapper.mapToTicketDto(savedTicket);
    }

    @Override
    public TicketDto updateTicketStatusByUserId(Integer ticketId, Integer userId, String status) {
        // Tìm vé theo id và userId
        var tickets = ticketRepository.findByIdAndUser_Id(ticketId, userId);
        if (tickets.isEmpty()) {
            throw new IllegalArgumentException("Không tìm thấy vé với userId tương ứng!");
        }
        Ticket ticket = tickets.get(0);
        ticket.setStatus(Ticket.Status.valueOf(status));
        Ticket saved = ticketRepository.save(ticket);
        return TicketMapper.mapToTicketDto(saved);
    }

    @Override
    public java.util.List<TicketDto> getTicketsByUserId(Integer userId) {
        var tickets = ticketRepository.findByUser_Id(userId);
        return tickets.stream().map(TicketMapper::mapToTicketDto).toList();
    }
}