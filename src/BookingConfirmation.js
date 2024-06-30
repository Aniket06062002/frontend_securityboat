import React from 'react';

function BookingConfirmation({ bookingDetails }) {
    return (
        <div>
            <h1>Booking Confirmation</h1>
            <p>Movie: {bookingDetails.movie.title}</p>
            <p>Showtime: {bookingDetails.showtime}</p>
            <p>Seats: {bookingDetails.seats.join(', ')}</p>
            <p>Total Price: ${bookingDetails.totalPrice}</p>
        </div>
    );
}

export default BookingConfirmation;
