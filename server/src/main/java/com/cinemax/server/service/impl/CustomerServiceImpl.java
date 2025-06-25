package com.cinemax.server.service.impl;

import org.springframework.stereotype.Service;

import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.entity.Customer;
import com.cinemax.server.mapper.CustomerMapper;
import com.cinemax.server.repository.CustomerRepository;
import com.cinemax.server.service.CustomerService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    
    private CustomerRepository customerRepository;

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }
    
}
