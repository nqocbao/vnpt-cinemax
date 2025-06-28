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
    public CustomerDto createCustomer(CustomerDto customerDto) {
        // Lấy user từ DB, nếu chưa có thì tạo mới
        Users user = usersRepository.findById(customerDto.getUserId()).orElse(null);
        if (user == null) {
            // Tạo user mới với quyền customer
            user = new Users();
            user.setName(customerDto.getFirstName() + " " + customerDto.getLastName());
            user.setEmail(customerDto.getEmail()); // cần bổ sung trường email vào DTO nếu muốn
            user.setPhone(customerDto.getPhone()); // cần bổ sung trường phone vào DTO nếu muốn
            user.setPassword(customerDto.getPassword()); // cần bổ sung trường password vào DTO nếu muốn
            user.setRole(Users.Role.customer);
            user = usersRepository.save(user);
        }
        // Tạo customer, tickets có thể null hoặc rỗng
        Customer customer = CustomerMapper.mapToCustomer(customerDto);
        customer.setUser(user);
        // Không set tickets nếu chưa có
        Customer savedCustomer = customerRepository.save(customer);
        return CustomerMapper.mapToCustomerDto(savedCustomer);
    }
    
}
