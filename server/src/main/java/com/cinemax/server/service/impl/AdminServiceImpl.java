package com.cinemax.server.service.impl;

import com.cinemax.server.dto.UsersDto;
import com.cinemax.server.dto.CustomerDto;
import com.cinemax.server.dto.MovieDto;
import com.cinemax.server.dto.PostDto;
import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.mapper.UsersMapper;
import com.cinemax.server.mapper.CustomerMapper;
import com.cinemax.server.mapper.MovieMapper;
import com.cinemax.server.mapper.PostMapper;
import com.cinemax.server.mapper.TicketMapper;
import com.cinemax.server.entity.Users;
import com.cinemax.server.entity.Customer;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.Post;
import com.cinemax.server.entity.Ticket;
import com.cinemax.server.repository.UsersRepository;
import com.cinemax.server.repository.CustomerRepository;
import com.cinemax.server.repository.MovieRepository;
import com.cinemax.server.repository.PostRepository;
import com.cinemax.server.repository.TicketRepository;
import com.cinemax.server.service.AdminService;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    private UsersRepository usersRepository;
    private CustomerRepository customerRepository;
    private MovieRepository movieRepository;
    private PostRepository postRepository;
    private TicketRepository ticketRepository;
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public UsersDto createUser(UsersDto userDto) {
        if (usersRepository.existsByEmail(userDto.getEmail())) {
            throw new IllegalArgumentException("Email đã tồn tại!");
        }
        Users user = UsersMapper.mapToUsers(userDto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Users saved = usersRepository.save(user);
        return UsersMapper.mapToUsersDto(saved);
    }

    @Override
    public UsersDto createAdmin(UsersDto userDto, String adminRole) {
        userDto.setRole(Users.Role.admin);
        return createUser(userDto);
    }

    @Override
    public List<UsersDto> getUsers(String email, String name, String role, int page, int limit) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<Users> usersPage = usersRepository.findAll(pageable);
        return usersPage.getContent().stream().map(UsersMapper::mapToUsersDto).collect(Collectors.toList());
    }

    @Override
    public UsersDto getUserDetail(Integer id) {
        Users user = usersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User không tồn tại!"));
        UsersDto userDto = UsersMapper.mapToUsersDto(user);
        Optional<Customer> customerOpt = customerRepository.findByUser_id(id);
        customerOpt.ifPresent(customer -> userDto.setCustomer(CustomerMapper.mapToCustomerDto(customer)));
        return userDto;
    }

    @Override
    public UsersDto updateUser(Integer id, UsersDto userDto) {
        Users user = usersRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User không tồn tại!"));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPhone(userDto.getPhone());
        user.setGender(userDto.getGender());
        user.setRole(userDto.getRole());
        Users saved = usersRepository.save(user);
        if (userDto.getCustomer() != null) {
            Optional<Customer> customerOpt = customerRepository.findByUser_id(id);
            Customer customer = customerOpt.orElseGet(Customer::new);
            customer.setUser(saved);
            customer.setCity(userDto.getCustomer().getCity());
            customer.setAddress(userDto.getCustomer().getAddress());
            customer.setRegion(userDto.getCustomer().getRegion());
            customer.setFirstName(userDto.getCustomer().getFirstName());
            customer.setLastName(userDto.getCustomer().getLastName());
            customerRepository.save(customer);
        }
        return UsersMapper.mapToUsersDto(saved);
    }

    @Override
    public void deleteUser(Integer id) {
        customerRepository.findByUser_id(id)
                .ifPresent(customer -> customerRepository.deleteById(customer.getId()));
        usersRepository.deleteById(id);
    }

    @Override
    public MovieDto createMovie(MovieDto movieDto) {
        Movie movie = MovieMapper.mapToMovie(movieDto);
        Movie saved = movieRepository.save(movie);
        return MovieMapper.mapToMovieDto(saved);
    }

    @Override
    public MovieDto updateMovie(Integer id, MovieDto movieDto) {
        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Movie không tồn tại!"));
        movie.setTitle(movieDto.getTitle());
        movie.setRunningTime(movieDto.getRunningTime());
        movie.setGenre(movieDto.getGenre());
        movie.setMovieTime(movieDto.getMovieTime());
        movie.setDirector(movieDto.getDirector());
        movie.setCast(movieDto.getCast());
        movie.setContent(movieDto.getContent());
        movie.setLanguage(movieDto.getLanguage());
        movie.setReleaseDate(movieDto.getReleaseDate());
        movie.setPosterUrl(movieDto.getPosterUrl());
        movie.setTrailerUrl(movieDto.getTrailerUrl());
        Movie saved = movieRepository.save(movie);
        return MovieMapper.mapToMovieDto(saved);
    }

    @Override
    public PostDto createPost(PostDto postDto) {
        Post post = PostMapper.mapToPost(postDto);
        Post saved = postRepository.save(post);
        return PostMapper.mapToPostDto(saved);
    }

    @Override
    public PostDto updatePost(Integer id, PostDto postDto) {
        Post post = postRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Post không tồn tại!"));
        post.setTitle(postDto.getTitle());
        post.setContent(postDto.getContent());
        post.setCreatedAt(postDto.getCreatedAt());
        post.setUpdatedAt(postDto.getUpdatedAt());
        Post saved = postRepository.save(post);
        return PostMapper.mapToPostDto(saved);
    }

    @Override
    public void deleteMovie(Integer id) {
        movieRepository.deleteById(id);
    }

    @Override
    public void deletePost(Integer id) {
        postRepository.deleteById(id);
    }

    @Override
    public List<TicketDto> getAllTickets() {
        List<Ticket> tickets = ticketRepository.findAll();
        return tickets.stream().map(TicketMapper::mapToTicketDto).toList();
    }
}