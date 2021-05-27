import React from 'react';
import HotelCard from '../HotelCard';

    //global flag for debug console logs
const debug = false;

const HotelList = ( {sortedHotels} ) => {
    debug && console.log('HOTELLIST - DEBUG: sortedHotels:', sortedHotels);

    return (
        <div className="hotel-list">
            {sortedHotels.map(hotel => (
                <div key={hotel.id}>
                    <HotelCard hotel={hotel} />
                </div>
                )
            )}
        </div>
    )
}

export default HotelList;
