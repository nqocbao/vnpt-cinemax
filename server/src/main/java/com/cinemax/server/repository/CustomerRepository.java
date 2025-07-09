package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.cinemax.server.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    Optional<Customer> findByUser_id(Integer userId);
}