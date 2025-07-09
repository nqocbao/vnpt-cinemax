package com.cinemax.server.mapper;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;

public class UsersMapper {

    public static UsersDto mapToUsersDto(Users users) {
        UsersDto usersDto = new UsersDto();
        usersDto.setId(users.getId());
        usersDto.setName(users.getName());
        usersDto.setEmail(users.getEmail());
        usersDto.setPhone(users.getPhone());
        usersDto.setPassword(users.getPassword());
        usersDto.setGender(users.getGender());
        usersDto.setRole(users.getRole());
        return usersDto;
    }

    public static Users mapToUsers(UsersDto usersDto) {
        return new Users(
                usersDto.getId(),
                usersDto.getName(),
                usersDto.getEmail(),
                usersDto.getPhone(),
                usersDto.getPassword(),
                usersDto.getGender(),
                usersDto.getRole());
    }
}
