package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinemax.server.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
} 