package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.model.Booking;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface IBookingMapper {

    BookingDto toBookingDto(Booking booking);
    List<BookingDto> toBookingDtos(List<Booking> bookings);

    @InheritInverseConfiguration
    Booking toBooking(BookingDto bookingDto);

}
