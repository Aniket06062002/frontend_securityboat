import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies', error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Available Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>{movie.showtimes.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
