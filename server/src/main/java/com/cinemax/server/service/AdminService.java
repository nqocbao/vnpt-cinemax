package com.cinemax.server.service;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.dto.PostDto;
import com.cinemax.server.dto.TicketDto;

import java.util.List;

public interface AdminService {
    UsersDto createUser(UsersDto userDto);

    UsersDto createAdmin(UsersDto userDto, String adminRole);

    List<UsersDto> getUsers(String email, String name, String role, int page, int limit);

    UsersDto getUserDetail(Integer id);

    UsersDto updateUser(Integer id, UsersDto userDto);

    void deleteUser(Integer id);

    MovieDto createMovie(MovieDto movieDto);

    MovieDto updateMovie(Integer id, MovieDto movieDto);

    void deleteMovie(Integer id);

    PostDto createPost(PostDto postDto);

    PostDto updatePost(Integer id, PostDto postDto);

    void deletePost(Integer id);

    List<TicketDto> getAllTickets();
}