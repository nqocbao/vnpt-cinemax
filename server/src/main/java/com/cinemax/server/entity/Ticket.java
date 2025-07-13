package com.cinemax.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import com.cinemax.server.entity.Users;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "movies_id")
    private Movie movie;

    @OneToOne
    @JoinColumn(name = "theater_id")
    private Theaters theater;

    @OneToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    @OneToOne
    @JoinColumn(name = "show_time_id")
    private ShowTimes showTimes;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @JoinColumn(name = "booking_code")
    private String bookingCode;

    @Column(name = "price")
    private Integer price;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status = Status.pending;

    @Column(name = "booking_time")
    private LocalDateTime bookingTime;

    public enum Status {
        pending,
        paid,
        cancelled,
        used
    }
}
