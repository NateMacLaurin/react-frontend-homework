import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import HotelFilterInput from '../HotelFilterInput';
import testData from '../../services/hotel-mock-api-data';

//global flag to either query the 
const testing = true;
const debug = true;

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        if(testing){
                //set state to the test data if testing
            setHotels(testData.results.hotels);
            debug && console.log(`TEST DEBUG: Did we succeed? ${testData.success}`);
            debug && console.log('TEST DEBUG: Log the test data to console:', testData.results.hotels);
            debug && console.log(`TEST DEBUG: How many did we get? ${testData.results.total}`);
        }else{
                //set state to the live API data if not testing
            hotelResultService.get().then(response => {
                debug && console.log(`LIVE DEBUG: Log the test data to console: ${response.results.hotels}`);
                setHotels(response.results.hotels);
            })
        }
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <HotelFilterInput hotels={hotels} />
            </div>
        </div>
    )
}

export default App;
