package com.cinemax.server.controller;

import com.cinemax.server.dto.PostDto;
import com.cinemax.server.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Integer id) {
        PostDto post = postService.getPostById(id);
        return ResponseEntity.ok(post);
    }

    @GetMapping
    public ResponseEntity<java.util.List<PostDto>> getAllPosts() {
        var posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}