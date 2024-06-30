import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import MovieList from './Components/MovieList';
import SeatSelection from './Components/SeatSelection';
import BookingConfirmation from './BookingConfirmation';
import './App.css'; // Assuming you have some basic styling

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/movies" element={<MovieList />} />
                    <Route path="/seats/:movieId" element={<SeatSelection />} />
                    <Route path="/confirmation" element={<BookingConfirmation />} />
                    <Route path="/" element={<MovieList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
