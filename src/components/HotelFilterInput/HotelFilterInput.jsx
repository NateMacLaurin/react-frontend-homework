import React, { useState, useEffect } from 'react'
import HotelList from '../HotelList';
import { hotelFilter, hotelSort } from '../../functions/hotel-input/hotel-input-functions';

    //global flag for debug console logs
const debug = true;

const HotelFilterInput = ( {hotels} ) => {

        //state variables to capture user input events
    const [nameFilterInput, setNameFilterInput] = useState("");
    const [sortSelectInput, setSortSelectInput] = useState("recommended");

        //state variables to handle filtered and sorted hotel array
        debug && console.log('HOTELFILTERINPUT - DEBUG: hotels:', hotels);
    const [filteredHotels, setFilteredHotels] = useState(hotelFilter(hotels, nameFilterInput));
        debug && console.log('HOTELFILTERINPUT - DEBUG: filteredHotels:', filteredHotels);
    const [sortedHotels, setSortedHotels] = useState(hotelSort(filteredHotels, sortSelectInput));
        debug && console.log('HOTELFILTERINPUT - DEBUG: sortedHotels', sortedHotels);

        //function to reset Input state to default values
    const resetInputs = () => {
        debug && console.log('resetInputs Clicked!');
        setNameFilterInput("");
        setSortSelectInput("recommended");
    };

        //useEffect to call sort function immediately after component render
    useEffect(() => {
        debug && console.log('HOTELFILTERINPUT - DEBUG: useEffect sortedHotels', sortedHotels);
            //after filtered array is returned, pass the returned filtered array to sort
        //setSortedHotels( hotelFilter(sortedHotels, nameFilterInput) );
        //setSortedHotels(hotels);
    },[]);

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
                        onChange={(event) => setNameFilterInput(event.target.value)}
                    />
                    <label htmlFor="select">Sort By</label>
                    <select 
                        name="sort" 
                        className="select" 
                        value={sortSelectInput}
                        onChange={(event) => setSortSelectInput(event.target.value)}
                    >
                        <option value="recommended">Recommended</option>
                        <option value="ascending">Price low-to-high</option>
                        <option value="descending">Price high-to-low</option>
                    </select>
                    <button 
                        className="button"
                        onClick={resetInputs}
                    >Reset</button>
                </div>
            </div>
            <div className="hotel-list">
                { <HotelList sortedHotels={ sortedHotels }/> }
            </div>
        </>
    )
}

export default HotelFilterInput
