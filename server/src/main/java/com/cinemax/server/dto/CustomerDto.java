package com.cinemax.server.dto;

import com.cinemax.server.entity.Ticket;
import com.cinemax.server.entity.Users;
import com.cinemax.server.entity.Customer.Gender;

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
    private Users user_id;
    private Ticket tickets_id;
    private String city;
    private String address;
    private String region;
    private String firstName;
    private String lastName;
    private Gender gender;
}
