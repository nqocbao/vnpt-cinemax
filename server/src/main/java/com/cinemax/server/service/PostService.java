package com.cinemax.server.service;

import com.cinemax.server.dto.PostDto;
import java.util.List;

public interface PostService {
    PostDto getPostById(Integer id);
    List<PostDto> getAllPosts();
} 