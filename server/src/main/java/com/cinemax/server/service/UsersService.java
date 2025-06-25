package com.cinemax.server.service;

import java.util.List;

import com.cinemax.server.dto.UsersDto;

public interface UsersService {
    UsersDto createUsers(UsersDto usersDto);

    UsersDto getUsersById(Integer id);

    List<UsersDto> getAllUsers();
}
