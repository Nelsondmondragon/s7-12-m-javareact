package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.model.Booking;

@Mapper(componentModel = "spring")
public interface IBookingMapper {

    BookingDto toBookingDto(Booking booking);

    List<BookingDto> toBookingDtos(List<Booking> bookings);

    void updateBooking(BookingDto bookingDto, @MappingTarget Booking booking);

    @InheritInverseConfiguration
    Booking toBooking(BookingDto bookingDto);
}
