package com.cinemax.server.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "theater_id", nullable = false)
    private Theaters theater;

    @OneToOne
    @JoinColumn(name = "show_times_id", nullable = false)
    private ShowTimes showTimes;

    @Column(name = "seat_row", nullable = false)
    private String seatRow;

    @Column(name = "seat_number", nullable = false)
    private String seatNumber;

    @Column(name = "seat_type")
    @Enumerated(EnumType.STRING)
    private SeatType seatType = SeatType.standard;

    public enum SeatType {
        standard,
        vip
    }
}
