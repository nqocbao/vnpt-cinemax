package com.cinemax.server.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TheatersDto {
    private int id;
    private String name;
    private String location;
    private List<Integer> moviesId;
    private LocalDateTime createAt;
}
