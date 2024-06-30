import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SeatSelection({ movieId }) {
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await axios.get(`/api/movies/${movieId}/seats`);
                setSeats(response.data);
            } catch (error) {
                console.error('Error fetching seats', error);
            }
        };
        fetchSeats();
    }, [movieId]);

    const handleSeatClick = (seat) => {
        setSelectedSeats(prevSelectedSeats => {
            if (prevSelectedSeats.includes(seat)) {
                return prevSelectedSeats.filter(s => s !== seat);
            } else {
                return [...prevSelectedSeats, seat];
            }
        });
    };

    const handleBooking = async () => {
        try {
            const response = await axios.post(`/api/movies/${movieId}/book`, { seats: selectedSeats });
            console.log('Booking successful', response.data);
        } catch (error) {
            console.error('Error booking seats', error);
        }
    };

    return (
        <div>
            <h1>Select Seats</h1>
            <div className="seats">
                {seats.map(seat => (
                    <div
                        key={seat.id}
                        className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(seat)}
                    >
                        {seat.number}
                    </div>
                ))}
            </div>
            <button onClick={handleBooking}>Book Seats</button>
        </div>
    );
}

export default SeatSelection;
