package com.cinemax.server.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.entity.Users;
import com.cinemax.server.exception.ResourceNotFoundException;
import com.cinemax.server.mapper.UsersMapper;
import com.cinemax.server.repository.UsersRepository;
import com.cinemax.server.service.UsersService;
import com.cinemax.server.service.CustomerService;
import com.cinemax.server.security.JwtUtil;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UsersServiceImpl implements UsersService {
    private UsersRepository usersRepository;
    private CustomerService customerService;

    @Override
    public Map<String, Object> createUsers(UsersDto usersDto) {
        // Kiểm tra email đã tồn tại
        if (usersRepository.existsByEmail(usersDto.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email đã tồn tại!");
        }
        Users users = UsersMapper.mapToUsers(usersDto);
        Users savedUsers = usersRepository.save(users);
        // Lấy từ đầu tiên trong name -> first name
        String name = users.getName() != null ? users.getName().trim() : "";
        int spaceIdx = name.indexOf(" ");
        String firstName = spaceIdx > -1 ? name.substring(0, spaceIdx) : name;
        String lastName = spaceIdx > -1 ? name.substring(spaceIdx + 1) : "";
        // Tạo CustomerDto từ thông tin user
        CustomerDto customerDto = new CustomerDto();
        customerDto.setUser_id(savedUsers.getId());
        customerDto.setFirstName(firstName);
        customerDto.setLastName(lastName);
        customerDto.setCity("");
        customerDto.setAddress("");
        customerDto.setRegion("");
        customerService.createCustomer(customerDto);
        // Sinh token cho user mới đăng ký
        String token = JwtUtil.generateToken(savedUsers.getEmail());

        Map<String, Object> result = new HashMap<>();
        result.put("user", UsersMapper.mapToUsersDto(savedUsers));
        result.put("token", token);
        return result;
    }

    @Override
    public UsersDto getUsersById(Integer id) {
        Users users = usersRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return UsersMapper.mapToUsersDto(users);
    }

    @Override
    public List<UsersDto> getAllUsers() {
        List<Users> users = usersRepository.findAll();
        return users.stream()
                .map(UsersMapper::mapToUsersDto)
                .toList();
    }

    @Override
    public Map<String, Object> login(UsersDto usersDto) {
        Users user = usersRepository.findByEmail(usersDto.getEmail())
                .orElseThrow(() -> new ResponseStatusException(org.springframework.http.HttpStatus.UNAUTHORIZED,
                        "Email hoặc mật khẩu không đúng!"));
        if (!user.getPassword().equals(usersDto.getPassword())) {
            throw new ResponseStatusException(org.springframework.http.HttpStatus.UNAUTHORIZED,
                    "Email hoặc mật khẩu không đúng!");
        }
        String token = JwtUtil.generateToken(user.getEmail());
        Map<String, Object> result = new HashMap<>();
        result.put("user", UsersMapper.mapToUsersDto(user));
        result.put("token", token);
        return result;
    }

}
