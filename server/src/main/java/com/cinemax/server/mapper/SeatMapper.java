package com.cinemax.server.mapper;

import com.cinemax.server.dto.SeatDto;
import com.cinemax.server.entity.Seat;

public class SeatMapper {
    public static SeatDto mapToSeatDto(Seat seat) {
        if (seat == null) {
            return null;
        }
        
        SeatDto dto = new SeatDto();
        dto.setId(seat.getId());
        dto.setSeatRow(seat.getSeatRow());
        dto.setSeatNumber(seat.getSeatNumber());
        dto.setSeatType(seat.getSeatType() != null ? seat.getSeatType().name() : null);
        dto.setTheaterId(seat.getTheater() != null ? seat.getTheater().getId() : null);
        dto.setShowTimeId(seat.getShowTimes() != null ? seat.getShowTimes().getId() : null);
        return dto;
    }

    public static Seat mapToSeat(SeatDto dto) {
        if (dto == null) {
            return null;
        }
        
        Seat seat = new Seat();
        seat.setId(dto.getId());
        seat.setSeatRow(dto.getSeatRow());
        seat.setSeatNumber(dto.getSeatNumber());
        if (dto.getSeatType() != null) {
            seat.setSeatType(Seat.SeatType.valueOf(dto.getSeatType()));
        }
        return seat;
    }
} 