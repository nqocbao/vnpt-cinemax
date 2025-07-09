package com.cinemax.server.mapper;

import com.cinemax.server.dto.ShowTimesDto;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.ShowTimes;
import com.cinemax.server.entity.Theaters;

public class ShowTimesMapper {

    public static ShowTimesDto mapToShowTimesDto(ShowTimes showTimes) {
        return new ShowTimesDto(
                showTimes.getId(),
                showTimes.getMovie().getId(),
                showTimes.getTheater().getId(),
                showTimes.getShow_date(),
                showTimes.getStart_time(),
                showTimes.getNumber_seat(),
                showTimes.getCreateAt());
    }

    public static ShowTimes mapToShowTimes(ShowTimesDto showTimesDto) {
        Movie movie = new Movie();
        movie.setId(showTimesDto.getId());

        Theaters theaters = new Theaters();
        theaters.setId(showTimesDto.getId());

        return new ShowTimes(
                showTimesDto.getId(),
                movie,
                theaters,
                showTimesDto.getShowDate(),
                showTimesDto.getStartTime(),
                showTimesDto.getNumberSeat(),
                showTimesDto.getCreateAt());
    }
}
