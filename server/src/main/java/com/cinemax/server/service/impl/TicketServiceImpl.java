package com.cinemax.server.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cinemax.server.dto.TicketDto;
import com.cinemax.server.entity.Ticket;
import com.cinemax.server.entity.Movie;
import com.cinemax.server.entity.Theaters;
import com.cinemax.server.entity.Seat;
import com.cinemax.server.entity.ShowTimes;
import com.cinemax.server.entity.Users;
import com.cinemax.server.entity.Seat.SeatType;
import com.cinemax.server.mapper.TicketMapper;
import com.cinemax.server.repository.TicketRepository;
import com.cinemax.server.repository.MovieRepository;
import com.cinemax.server.repository.TheatersRepository;
import com.cinemax.server.repository.SeatRepository;
import com.cinemax.server.repository.ShowTimesRepository;
import com.cinemax.server.repository.UsersRepository;
import com.cinemax.server.service.TicketService;

import lombok.AllArgsConstructor;

import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@Transactional
@AllArgsConstructor
public class TicketServiceImpl implements TicketService {
    private TicketRepository ticketRepository;
    private MovieRepository movieRepository;
    private TheatersRepository theatersRepository;
    private SeatRepository seatRepository;
    private ShowTimesRepository showTimesRepository;
    private UsersRepository usersRepository;

    @Override
    public TicketDto bookTicket(TicketDto ticketDto) {

        Optional<Ticket> existing = ticketRepository
                .findFirstBySeat_IdAndTheater_IdAndMovie_IdAndBookingTimeAndStatusIsNot(
                        ticketDto.getSeatId(),
                        ticketDto.getTheaterId(),
                        ticketDto.getMovieId(),
                        ticketDto.getBookingTime(),
                        Ticket.Status.cancelled);
        if (existing.isPresent()) {
            throw new IllegalArgumentException("Ghế đã được đặt hoặc không hợp lệ!");
        }
        Ticket ticket = TicketMapper.mapToTicket(ticketDto);
        Ticket savedTicket = ticketRepository.save(ticket);

        // Load seat details đầy đủ
        if (savedTicket.getSeat() != null) {
            savedTicket.getSeat().getId(); // Trigger lazy loading
        }

        return TicketMapper.mapToTicketDto(savedTicket);
    }

    @Override
    public TicketDto updateTicketStatusByUserId(Integer ticketId, Integer userId, String status) {
        // Tìm vé theo id và userId
        var tickets = ticketRepository.findByIdAndUser_Id(ticketId, userId);
        if (tickets.isEmpty()) {
            throw new IllegalArgumentException("Không tìm thấy vé với userId tương ứng!");
        }
        Ticket ticket = tickets.get(0);
        ticket.setStatus(Ticket.Status.valueOf(status));
        Ticket saved = ticketRepository.save(ticket);

        // Load seat details đầy đủ
        if (saved.getSeat() != null) {
            saved.getSeat().getId(); // Trigger lazy loading
        }

        return TicketMapper.mapToTicketDto(saved);
    }

    @Override
    public List<TicketDto> getTicketsByUserId(Integer userId) {
        var tickets = ticketRepository.findByUser_Id(userId);
        return tickets.stream()
                .map(ticket -> {
                    // Đảm bảo seat được load đầy đủ
                    if (ticket.getSeat() != null) {
                        ticket.getSeat().getId(); // Trigger lazy loading
                    }
                    return TicketMapper.mapToTicketDto(ticket);
                })
                .toList();
    }

    @Override
    public Map<String, Object> bookTickets(Map<String, Object> bookingRequest) {
        try {
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> seats = (List<Map<String, Object>>) bookingRequest.get("seats");
            if (seats == null || seats.isEmpty()) {
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "Vui lòng chọn ít nhất một ghế");
                return response;
            }

            // Get movie, theater, and user
            Integer movieId = (Integer) bookingRequest.get("movieId");
            Integer theaterId = (Integer) bookingRequest.get("theaterId");
            Integer showTimeId = (Integer) bookingRequest.get("showTimeId");

            Movie movie = movieRepository.findById(movieId)
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy phim"));

            Theaters theater = theatersRepository.findById(theaterId)
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy rạp"));

            ShowTimes showTimes = showTimesRepository.findById(showTimeId)
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy khung giờ chiếu"));

            Users user = usersRepository.findById(1) // Placeholder - should get from JWT token
                    .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy người dùng"));

            List<Integer> ticketIds = new ArrayList<>();
            LocalDateTime bookingTime = LocalDateTime.now();

            String bookingCode = UUID.randomUUID().toString().substring(0, 8).toUpperCase();

            // Tạo tickets
            for (Map<String, Object> seatRequest : seats) {
                String row = (String) seatRequest.get("row");
                String col = (String) seatRequest.get("col");

                // Find seat
                Seat seat = seatRepository.findByTheater_IdAndSeatRowAndSeatNumber(
                        theaterId,
                        row,
                        col.toString());

                // Check nếu chưa có ghế trong db thì tạo ghế đó
                if (seat == null) {
                    Seat newSeat = new Seat();
                    newSeat.setTheater(theater);
                    newSeat.setShowTimes(showTimes);
                    newSeat.setSeatNumber(col);
                    newSeat.setSeatRow(row);

                    int colNum = Integer.parseInt(col);
                    if ((colNum >= 3 && colNum <= 10) && (row.compareTo("E") >= 0 && row.compareTo("H") <= 0)) {
                        newSeat.setSeatType(SeatType.standard);
                    } else {
                        newSeat.setSeatType(SeatType.vip);
                    }
                    seat = seatRepository.save(newSeat);
                }

                // Check seat đã được book
                Optional<Ticket> existingTicket = ticketRepository
                        .findFirstBySeat_IdAndTheater_IdAndMovie_IdAndStatusIsNot(
                                seat.getId(),
                                theaterId,
                                movieId,
                                Ticket.Status.cancelled);

                if (existingTicket.isPresent()) {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", false);
                    response.put("message", "Ghế " + row + col + " đã được đặt");
                    return response;
                }

                // Tạo ticket
                Ticket ticket = new Ticket();
                ticket.setMovie(movie);
                ticket.setTheater(theater);
                ticket.setShowTimes(showTimes);
                ticket.setBookingCode(bookingCode);
                ticket.setSeat(seat);
                ticket.setUser(user);
                ticket.setPrice(calculateSeatPrice(seat, (Integer) bookingRequest.get("totalPrice"), seats.size()));
                ticket.setStatus(Ticket.Status.paid);
                ticket.setBookingTime(bookingTime);

                Ticket savedTicket = ticketRepository.save(ticket);
                ticketIds.add(savedTicket.getId());
            }

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Đặt vé thành công");
            response.put("ticketIds", ticketIds);
            response.put("bookingCode", bookingCode);

            // Thêm thông tin tickets với seat details
            List<TicketDto> ticketDtos = ticketIds.stream()
                    .map(id -> {
                        Ticket ticket = ticketRepository.findById(id).orElse(null);
                        if (ticket != null && ticket.getSeat() != null) {
                            ticket.getSeat().getId(); // Trigger lazy loading
                        }
                        return ticket != null ? TicketMapper.mapToTicketDto(ticket) : null;
                    })
                    .filter(dto -> dto != null)
                    .toList();
            response.put("tickets", ticketDtos);

            return response;

        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Có lỗi xảy ra: " + e.getMessage());
            return response;
        }
    }

    @Override
    public List<Map<String, String>> getBookedSeats(Integer movieId, Integer theaterId, Integer showTimeId) {
        List<Ticket.Status> statuses = List.of(Ticket.Status.pending, Ticket.Status.paid);
        List<Ticket> tickets = ticketRepository.findByMovie_IdAndTheater_IdAndShowTimes_IdAndStatusIn(
            movieId, theaterId, showTimeId, statuses
        );
        return tickets.stream()
            .map(ticket -> {
                Map<String, String> seat = new HashMap<>();
                seat.put("row", ticket.getSeat().getSeatRow());
                seat.put("col", ticket.getSeat().getSeatNumber());
                return seat;
            })
            .toList();
    }

    private Integer calculateSeatPrice(Seat seat, Integer totalPrice, Integer seatCount) {
        if (seat.getSeatType() == Seat.SeatType.vip) {
            return 75000;
        } else {
            return 50000;
        }
    }
}