import React from 'react';
import HotelCard from '../HotelCard';

const HotelList = ( {hotels} ) => {
    return (
        <div className="hotel-list">
            {hotels.map(hotel => (
                <div className="hotel-card" key={hotel.id}>
                    <HotelCard hotel={hotel} />
                </div>
                )
            )}
        </div>
    )
}

export default HotelList;
