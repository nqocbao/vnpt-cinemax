package com.cinemax.server.controller;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.dto.PostDto;
import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.service.AdminService;
import com.cinemax.server.service.TicketService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static java.util.Map.of;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    // --- USERS ---
    @GetMapping("/users")
    public ResponseEntity<List<UsersDto>> getUsers(
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int limit) {
        List<UsersDto> users = adminService.getUsers(email, name, role, page, limit);
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UsersDto> getUserDetail(@PathVariable Integer id) {
        UsersDto user = adminService.getUserDetail(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody UsersDto userDto) {
        adminService.updateUser(id, userDto);
        return ResponseEntity.ok(of("message", "Cập nhật thông tin của tài khoản" + userDto.getName() + " thành công"));
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        adminService.deleteUser(id);
        return ResponseEntity.ok(of(
                "message", "Xoá tài khoản thành công"));
    }

    // --- ADMINS ---
    @PostMapping("/admins")
    public ResponseEntity<?> createAdmin(@RequestBody UsersDto userDto, @RequestParam String adminRole) {
        adminService.createAdmin(userDto, adminRole);
        return ResponseEntity.ok(of("message", "Tạo tài khoản admin thành công"));
    }

    // --- MOVIES ---
    @PostMapping("/movies")
    public ResponseEntity<?> createMovie(@RequestBody MovieDto movieDto) {
        adminService.createMovie(movieDto);
        return ResponseEntity.ok(of("message", "Tạo phim thành công"));
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<?> updateMovie(@PathVariable Integer id, @RequestBody MovieDto movieDto) {
        adminService.updateMovie(id, movieDto);
        return ResponseEntity.ok(of("message", "Cập nhật thông tin phim thành công"));
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity<?> deleteMovie(@PathVariable Integer id) {
        adminService.deleteMovie(id);
        return ResponseEntity.ok("Xóa phim thành công");
    }

    // --- POSTS ---
    @PostMapping("/posts")
    public ResponseEntity<?> createPost(@RequestBody PostDto postDto) {
        adminService.createPost(postDto);
        return ResponseEntity.ok(of("message", "Tạo bài viết thành công"));
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<?> updatePost(@PathVariable Integer id, @RequestBody PostDto postDto) {
        adminService.updatePost(id, postDto);
        return ResponseEntity.ok(of("message", "Cập nhật bài viết thành công"));
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Integer id) {
        adminService.deletePost(id);
        return ResponseEntity.ok().body("Xóa bài viết thành công");
    }

    // --- TICKETS ---
    @GetMapping("/tickets")
    public ResponseEntity<List<TicketDto>> getAllTickets() {
        var tickets = adminService.getAllTickets();
        return ResponseEntity.ok(tickets);
    }

}