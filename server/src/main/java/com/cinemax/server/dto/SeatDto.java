package com.cinemax.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatDto {
    private Integer id;
    private String seatRow;
    private String seatNumber;
    private String seatType;
    private Integer theaterId;
    private Integer showTimeId;
} 