package com.cinemax.server.mapper;

import com.cinemax.server.dto.PostDto;
import com.cinemax.server.entity.Post;

public class PostMapper {
    public static PostDto mapToPostDto(Post post) {
        return new PostDto(
                post.getId(),
                post.getTitle(),
                post.getContent(),
                post.getPosts_url(),
                post.getCreatedAt(),
                post.getUpdatedAt());
    }

    public static Post mapToPost(PostDto dto) {
        Post post = new Post();
        post.setId(dto.getId());
        post.setTitle(dto.getTitle());
        post.setContent(dto.getContent());
        post.setPosts_url(dto.getPostsUrl());
        post.setCreatedAt(dto.getCreatedAt());
        post.setUpdatedAt(dto.getUpdatedAt());
        return post;
    }
}