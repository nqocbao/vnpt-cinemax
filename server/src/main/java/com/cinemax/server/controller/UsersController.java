package com.cinemax.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;
import com.cinemax.server.service.UsersService;

import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import static java.util.Map.of;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UsersController {

    private UsersService usersService;

    @PostMapping
    public ResponseEntity<UsersDto> createUsers(@RequestBody UsersDto usersDto) {
        // UsersDto createdUsers = usersService.createUsers(usersDto);
        // return ResponseEntity.ok(createdUsers);
        UsersDto savedUsers = usersService.createUsers(usersDto);
        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<UsersDto> getUsersById(@PathVariable("id") int id) {
        UsersDto usersDto = usersService.getUsersById(id);
        return ResponseEntity.ok(usersDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsersDto usersDto) {
        usersService.login(usersDto);
        return ResponseEntity.ok(of(
                "status", 200,
                "message", "Đăng nhập thành công"));
    }
}
