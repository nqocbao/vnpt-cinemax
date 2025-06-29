package com.cinemax.server.service.impl;

import org.springframework.stereotype.Service;

import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.entity.Customer;
import com.cinemax.server.entity.Users;
import com.cinemax.server.mapper.CustomerMapper;
import com.cinemax.server.repository.CustomerRepository;
import com.cinemax.server.repository.UsersRepository;
import com.cinemax.server.service.CustomerService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepository customerRepository;
    private UsersRepository usersRepository;

    @Override
    public CustomerDto updateCustomer(Integer id, CustomerDto customerDto) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found with id: " + id));
        // Cập nhật các trường từ DTO
        customer.setCity(customerDto.getCity());
        customer.setAddress(customerDto.getAddress());
        customer.setRegion(customerDto.getRegion());
        customer.setFirstName(customerDto.getFirstName());
        customer.setLastName(customerDto.getLastName());

        Customer updatedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(updatedCustomer);
    }

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        // Lấy user từ DB
        Users user = usersRepository.findById(customerDto.getUser_id())
                .orElseThrow(() -> new RuntimeException("User not found with id: " + customerDto.getUser_id()));
        Customer customer = new Customer();
        customer.setUser_id(user);
        customer.setCity(customerDto.getCity());
        customer.setAddress(customerDto.getAddress());
        customer.setRegion(customerDto.getRegion());
        customer.setFirstName(customerDto.getFirstName());
        customer.setLastName(customerDto.getLastName());
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }

}
