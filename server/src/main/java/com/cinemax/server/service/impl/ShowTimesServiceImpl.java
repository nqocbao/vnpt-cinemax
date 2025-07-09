package com.cinemax.server.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cinemax.server.dto.ShowTimesDto;
import com.cinemax.server.entity.ShowTimes;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.ShowTimesMapper;
import com.cinemax.server.repository.ShowTimesRepository;
import com.cinemax.server.service.ShowTimesService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ShowTimesServiceImpl implements ShowTimesService {
    private ShowTimesRepository showTimesRepository;

    @Override
    public ShowTimesDto getShowTimesById(Integer id) {
        ShowTimes showTimes = showTimesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Showtimes not found with id: " + id));
        return ShowTimesMapper.mapToShowTimesDto(showTimes);
    }

    @Override
    public List<ShowTimesDto> getAllShowTimes() {
        List<ShowTimes> showTimes = showTimesRepository.findAll();
        return showTimes.stream().map(ShowTimesMapper::mapToShowTimesDto).toList();
    }

}
