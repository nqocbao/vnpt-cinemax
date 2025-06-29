package com.cinemax.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.cinemax.server.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    boolean existsByEmail(String email);

    Optional<Users> findByEmail(String email);
}
