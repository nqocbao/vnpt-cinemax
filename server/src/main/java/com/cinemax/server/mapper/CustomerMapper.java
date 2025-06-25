package com.cinemax.server.mapper;

import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.entity.Customer;

public class CustomerMapper {
    
    public static CustomerDto mapToCustomerDto(Customer customer) {
        return new CustomerDto(
            customer.getId(),
            customer.getUser_id(),
            customer.getTickets_id(),
            customer.getCity(),
            customer.getAddress(),
            customer.getRegion(),
            customer.getFirstName(),
            customer.getLastName(),
            customer.getGender()
        );
    }

    public static Customer mapToCustomer(CustomerDto customerDto) {
        return new Customer(
            customerDto.getId(),
            customerDto.getUser_id(),
            customerDto.getTickets_id(),
            customerDto.getCity(),
            customerDto.getAddress(),
            customerDto.getRegion(),
            customerDto.getFirstName(),
            customerDto.getLastName(),
            customerDto.getGender()
        );
    }
}
