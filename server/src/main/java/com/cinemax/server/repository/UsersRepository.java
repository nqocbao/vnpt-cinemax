package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cinemax.server.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
}
