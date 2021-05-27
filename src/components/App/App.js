import React, { useState, useEffect } from 'react';
import './App.style.scss'

import hotelResultService from '../../services/hotel-result/hotel-result.service';
import HotelFilterInput from '../HotelFilterInput';
import testData from '../../services/hotel-mock-api-data';
import HotelError from '../HotelError';

//global flags for debug console logs and test or live API backend
    //true - Test API, false - live API
const testing = false;
    //toggle debug console logs
const debug = true;
    //simulate an API error
const errorTest = false;

const App = () => {
        //local state to store the API data from GET request
    const [hotels, setHotels] = useState([]);
        //local state to hold the child component render until promise return
    const [isLoaded, setIsLoaded] = useState(false);
    const [apiErrorFlag, setApiErrorFlag] = useState(errorTest ? true : false);

    useEffect(() => {
            //check if we're testing so we don't call the live API
        if(testing){  
                //test debug logs to dev console
            console.log('APP - TESTING FLAG TRUE - USING MOCK API DATA');
            debug && console.log(`APP - TEST DEBUG: Did we succeed? ${testData.success}`);
            debug && console.log('APP - TEST DEBUG: Log the test data to console:', testData.results.hotels);
            debug && console.log(`APP - TEST DEBUG: How many hotels did we get? ${testData.results.total}`);

                //set state to the test data if testing
            setHotels(testData.results.hotels);
            setIsLoaded(true);
        }else{
            console.log('APP - TESTING FLAG FALSE - CALLING LIVE API');
                //call API
            hotelResultService.get()
                .then(response => {
                    //live debug logs to dev console
                debug && console.log(`APP - LIVE DEBUG: Did we succeed? ${response.success}`);
                debug && console.log(`APP - LIVE DEBUG: Log the test data to console: ${response.results.hotels}`);
                debug && console.log(`APP - LIVE DEBUG: How many hotels did we get? ${response.results.total}`);
                    //set state to the live API data if not testing
                setHotels(response.results.hotels);
                setIsLoaded(true);
            }).catch(err => {
                console.log('Error in public API call:', err);
                setApiErrorFlag(true);
            });
        }
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                { apiErrorFlag ? <HotelError errorFlag={ apiErrorFlag } setErrorFlag={ setApiErrorFlag } error={<span>Something Went Wrong!</span>}/> : ( isLoaded ? <HotelFilterInput hotels={hotels} /> : <p>Loading...</p> )}
            </div>
        </div>
    )
}

export default App;
