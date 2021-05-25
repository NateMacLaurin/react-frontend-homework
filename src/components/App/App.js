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
                <HotelList />
                <div className="hotel-list">
                    {hotels.map(hotel => (
                        <div className="hotel-card" key={hotel.id}>
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`}}>
                            </div>
                            <div className="hotel-details">
                                <div className="hotel-name">
                                    {hotel.hotelStaticContent.name}
                                </div>
                                <div className="location">
                                    {hotel.hotelStaticContent.neighborhoodName}
                                </div>
                            </div>
                            <div className="price-details">
                                <span className="price">
                                    <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                                    {hotel.lowestAveragePrice.amount}
                                </span>
                                <span className="rewards">
                                    {hotel.rewards.miles} miles
                                </span>
                                <button className="button">Select</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;
