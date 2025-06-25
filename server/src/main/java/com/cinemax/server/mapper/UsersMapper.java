package com.cinemax.server.mapper;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;

public class UsersMapper {
    
    public static UsersDto mapToUsersDto(Users users) {
        return new UsersDto(
            users.getId(),
            users.getName(),
            users.getEmail(),
            users.getPhone(),
            users.getPassword(),
            users.getRole()
        ); 
    }

    public static Users mapToUsers(UsersDto usersDto) {
        return new Users(
            usersDto.getId(),
            usersDto.getName(),
            usersDto.getEmail(),
            usersDto.getPhone(),
            usersDto.getPassword(),
            usersDto.getRole()
        );
    }
}
