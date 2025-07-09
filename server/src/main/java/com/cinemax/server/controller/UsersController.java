package com.cinemax.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;
import com.cinemax.server.service.UsersService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import static java.util.Map.of;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UsersController {

    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<?> createUsers(@RequestBody UsersDto usersDto) {
        var result = usersService.createUsers(usersDto);
        UsersDto userDto = (UsersDto) result.get("user");
        return ResponseEntity.ok(of(
                "message", "Tạo tài khoản thành công",
                "token", result.get("token"),
                "userId", userDto.getId()));
    }

    @GetMapping("{id}")
    public ResponseEntity<UsersDto> getUsersById(@PathVariable("id") int id) {
        UsersDto usersDto = usersService.getUsersById(id);
        return ResponseEntity.ok(usersDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsersDto usersDto) {
        var result = usersService.login(usersDto);
        UsersDto userDto = (UsersDto) result.get("user");
        return ResponseEntity.ok(of(
                "status", 200,
                "message", "Đăng nhập thành công",
                "token", result.get("token"),
                "userId", userDto.getId()));
    }
}
