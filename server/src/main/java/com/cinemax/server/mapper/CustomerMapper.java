package com.cinemax.server.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.entity.Customer;
import com.cinemax.server.entity.Ticket;
import com.cinemax.server.entity.Users;

public class CustomerMapper {

    public static CustomerDto mapToCustomerDto(Customer customer) {
        List<Integer> tickets_id = customer.getTickets_id() != null
                ? customer.getTickets_id().stream().map(Ticket::getId).collect(Collectors.toList())
                : List.of();

        return new CustomerDto(
                customer.getId(),
                customer.getUser_id() != null ? customer.getUser_id().getId() : 0,
                tickets_id,
                customer.getCity(),
                customer.getAddress(),
                customer.getRegion(),
                customer.getFirstName(),
                customer.getLastName());
    }

    public static Customer mapToCustomer(CustomerDto customerDto) {

        Users user = new Users();
        user.setId(customerDto.getId());

        List<Ticket> tickets = customerDto.getTickets_id() != null
                ? customerDto.getTickets_id().stream().map(id -> {
                    Ticket ticket = new Ticket();
                    ticket.setId(id);
                    return ticket;
                }).collect(Collectors.toList())
                : List.of();

        return new Customer(
                customerDto.getId(),
                user,
                tickets,
                customerDto.getCity(),
                customerDto.getAddress(),
                customerDto.getRegion(),
                customerDto.getFirstName(),
                customerDto.getLastName());
    }
}
