import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import HotelList from '../HotelList/HotelList';
import HotelFilterInput from '../HotelFilterInput/HotelFilterInput';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <div>
                <HotelFilterInput />
                </div>
                <HotelList hotels={hotels} />
            </div>
        </div>
    )
}

export default App;
