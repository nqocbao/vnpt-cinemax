package com.cinemax.server.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cinemax.server.dto.PostDto;
import com.cinemax.server.entity.Post;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.PostMapper;
import com.cinemax.server.repository.PostRepository;
import com.cinemax.server.service.PostService;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public PostDto getPostById(Integer id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post not found with id: " + id));
        return PostMapper.mapToPostDto(post);
    }

    @Override
    public java.util.List<PostDto> getAllPosts() {
        return postRepository.findAll().stream().map(PostMapper::mapToPostDto).toList();
    }
} 