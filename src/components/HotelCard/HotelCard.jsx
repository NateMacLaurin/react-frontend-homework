import React from 'react';

    //global flag for debug console logs
const debug = true;

const HotelCard = ( {hotel} ) => {
    debug && console.log('hotel:', hotel);

    const handleSelect = () => {
        debug && console.log('HOTELCARD - DEBUG: In handleSelect', hotel.id);
    }
    return (
        <>
            <div
                className="image"
                style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`}}
            >
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
                    <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}>
                    </span>
                    {hotel.lowestAveragePrice.amount}
                </span>
                <span className="rewards">
                    {hotel.rewards.miles} miles
                </span>
                <button className="button" onClick={handleSelect}>Select</button>
            </div>
        </>
    )
}

export default HotelCard;
