package com.cinemax.server.service;

import java.util.List;
import java.util.Map;

import com.cinemax.server.dto.UsersDto;

public interface UsersService {
    // Đăng ký tài khoản, trả về map chứa thông tin người dùng và token
    Map<String, Object> createUsers(UsersDto usersDto);

    // Lấy thông tin người dùng theo ID
    UsersDto getUsersById(Integer id);

    // Lấy danh sách tất cả người dùng
    List<UsersDto> getAllUsers();

    // Đăng nhập, trả về map chứa user và token
    Map<String, Object> login(UsersDto usersDto);
}
