package com.cinemax.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Integer id;
    private String title;
    private String content;
    private String postsUrl;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}