package com.cinemax.server.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShowTimesDto {
    private int id;
    private int movieId;
    private int theaterId;
    private LocalDate showDate;
    private LocalTime startTime;
    private int numberSeat;
    private LocalDateTime createAt;
}
