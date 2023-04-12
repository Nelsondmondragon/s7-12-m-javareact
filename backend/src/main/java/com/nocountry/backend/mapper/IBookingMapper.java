package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.Condition;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.model.Booking;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IBookingMapper {

    BookingDto toBookingDto(Booking booking);

    List<BookingDto> toBookingDtos(List<Booking> bookings);

    void updateBooking(BookingDto bookingDto, @MappingTarget Booking booking);

    @Condition
    default boolean isNotEmpty(String value) {
        return value != null && !value.isEmpty();
    }

    @InheritInverseConfiguration
    Booking toBooking(BookingDto bookingDto);
}
