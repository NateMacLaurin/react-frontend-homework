import React from 'react';
import HotelCard from '../HotelCard';

    //global flag for debug console logs
const debug = true;

const HotelList = ( {sortedHotels} ) => {
    debug && console.log('HOTELLIST - DEBUG: sortedHotels:', sortedHotels);

    return (
        <div className="hotel-list">
            {sortedHotels.map(hotel => (
                <div className="hotel-card" key={hotel.id}>
                    <HotelCard hotel={hotel} />
                </div>
                )
            )}
        </div>
    )
}

export default HotelList;
