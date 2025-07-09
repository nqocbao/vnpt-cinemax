package com.cinemax.server.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {
    
    private int id;
    private int user_id;
    private List<Integer> tickets_id;
    private String city;
    private String address;
    private String region;
    private String firstName;
    private String lastName;
    private UsersDto user;
}
