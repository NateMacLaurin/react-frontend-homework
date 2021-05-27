import React, { useState, useEffect } from 'react'
import HotelList from '../HotelList';
import HotelError from '../HotelError';

import { hotelFilter, hotelSort } from '../../functions/hotel-input/hotel-input-functions';

    //global flag for debug console logs
const debug = true;
    //set true to test the error handler
const errorTest = false;

const HotelFilterInput = ( {hotels} ) => {

        //state variables to capture user input events
    const [nameFilterInput, setNameFilterInput] = useState("");
    const [sortSelectInput, setSortSelectInput] = useState("");
        //state variable to hold the filtered and sorted hotel array (default value sort the full API list by empty string);
    const [sortedHotels, setSortedHotels] = useState(errorTest ? false : hotelSort(hotels, sortSelectInput));

        //functions to handle filtering and sorting
    const filterFunction = (e) => {
        setNameFilterInput(e);
        debug && console.log('HOTELFILTERINPUT - DEBUG: In filterFunction');
            //always call with the full api prop array so that we can recover filtered hotels if we backspace the input
            //filter first then sort once the array size has been altered with nested functions
            //nested functions are necessary to re-filter the unfiltered prop array.
        setSortedHotels(
            hotelSort(
                //we can use the state value of sortSelectInput because this handler was called on filter change not sort change.
                hotelFilter(hotels, e), sortSelectInput
            )
        );
    }

    const sortFunction = (e) => {
        setSortSelectInput(e);
        debug && console.log('HOTELFILTERINPUT - DEBUG: In sortFunction');
            //Only changing the sort method, and not the search filter; 
            //The array size won't change so we can pass the pre-filtered array instead of the full api prop array.
        setSortedHotels(hotelSort(sortedHotels, e));
    }

        //function to reset Input state to default values
    const resetInputs = () => {
        debug && console.log('resetInputs Clicked!');
        setSortedHotels(hotels);
        setSortSelectInput("");
        setNameFilterInput("");
    };

    return (
        <>
            <div className="filters">
                <div className="filters">
                    <label htmlFor="input">Search</label>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Hotel Name"
                        value={nameFilterInput}
                        onChange={(event) => filterFunction(event.target.value)}
                    />
                    <label htmlFor="select">Sort By</label>
                    <select 
                        name="sort" 
                        className="select" 
                        value={sortSelectInput}
                        onChange={(event) => sortFunction(event.target.value)}
                    >
                        <option value="recommended">Recommended</option>
                        <option value="ascending">Price low-to-high</option>
                        <option value="descending">Price high-to-low</option>
                    </select>
                    <button 
                        className="button"
                        onClick={() => resetInputs()}
                    >Reset</button>
                </div>
            </div>
            <div className="hotel-list">
                { sortedHotels? <HotelList sortedHotels={ sortedHotels }/> : <HotelError error={<span>No Results available!</span>}/> }
            </div>
        </>
    )
}

export default HotelFilterInput
