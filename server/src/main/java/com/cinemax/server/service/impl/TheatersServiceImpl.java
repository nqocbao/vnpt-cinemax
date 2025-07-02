package com.cinemax.server.service.impl;

import java.util.List;

import com.cinemax.server.dto.TheatersDto;
import com.cinemax.server.entity.Theaters;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.TheatersMapper;
import com.cinemax.server.repository.TheatersRepository;
import com.cinemax.server.service.TheatersService;

public class TheatersServiceImpl implements TheatersService {
    private TheatersRepository theatersRepository;

    @Override
    public TheatersDto getTheatersById(Integer id) {
        Theaters theaters = theatersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Theater not found with id: " + id));
        return TheatersMapper.mapToTheaterDto(theaters);
    }

    @Override
    public List<TheatersDto> getALlTheater() {
        List<Theaters> theaters = theatersRepository.findAll();
        return theaters.stream().map(TheatersMapper::mapToTheaterDto).toList();
    }

}
