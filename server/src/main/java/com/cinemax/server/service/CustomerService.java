package com.cinemax.server.service;

import com.cinemax.server.dto.CustomerDto;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customerDto);

    CustomerDto updateCustomer(Integer id, CustomerDto customerDto);
}