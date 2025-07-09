package com.cinemax.server.dto;

import com.cinemax.server.entity.Users.Gender;
import com.cinemax.server.entity.Users.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsersDto {
    private int id;
    private String name;
    private String email;
    private String phone;
    private String password;
    private Gender gender;
    private Role role;
    private CustomerDto customer;
}
