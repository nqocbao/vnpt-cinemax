package com.cinemax.server.service.impl;

import java.util.List;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.UsersMapper;
import com.cinemax.server.repository.UsersRepository;
import com.cinemax.server.service.UsersService;

import jakarta.annotation.Resource;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UsersServiceImpl implements UsersService {

    private UsersRepository usersRepository;

    @Override
    public UsersDto createUsers(UsersDto usersDto) {
        Users users = UsersMapper.mapToUsers(usersDto);
        Users savedUsers = usersRepository.save(users);
        return UsersMapper.mapToUsersDto(savedUsers);
    }

    @Override
    public UsersDto getUsersById(Integer id) {
        Users users = usersRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return UsersMapper.mapToUsersDto(users);
    }

    @Override
    public List<UsersDto> getAllUsers() {
        List<Users> users = usersRepository.findAll();
        return users.stream()
                .map(UsersMapper::mapToUsersDto)
                .toList();
    }
    
}
