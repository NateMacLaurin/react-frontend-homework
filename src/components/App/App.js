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
            //check if we're testing so we don't call the live API
        if(testing){  
                //test debug logs to dev console
            console.log('TESTING FLAG TRUE - USING MOCK API DATA');
            debug && console.log(`TEST DEBUG: Did we succeed? ${testData.success}`);
            debug && console.log('TEST DEBUG: Log the test data to console:', testData.results.hotels);
            debug && console.log(`TEST DEBUG: How many hotels did we get? ${testData.results.total}`);

                //set state to the test data if testing
            setHotels(testData.results.hotels);
        }else{
            console.log('TESTING FLAG FALSE - CALLING LIVE API');
                //call API
            hotelResultService.get().then(response => {
                    //live debug logs to dev console
                debug && console.log(`LIVE DEBUG: Did we succeed? ${response.success}`);
                debug && console.log(`LIVE DEBUG: Log the test data to console: ${response.results.hotels}`);
                debug && console.log(`LIVE DEBUG: How many hotels did we get? ${response.results.total}`);
                    //set state to the live API data if not testing
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
