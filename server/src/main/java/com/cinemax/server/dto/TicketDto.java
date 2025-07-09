package com.cinemax.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    private Integer id;
    private Integer movieId;
    private Integer theaterId;
    private Integer seatId;
    private Integer userId;
    private Integer price;
    private String status;
    private LocalDateTime bookingTime;
} 