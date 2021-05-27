import React, { useState } from 'react';
import DefaultImage from '../../public/Image404-Rocket-Orange-RYB-Complement.jpg';
    //global flag for debug console logs
const debug = true;

const HotelCard = ( {hotel} ) => {
    debug && console.log('hotel:', hotel);
        //state to conditionally render select/unselect button
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelect = () => {
        debug && console.log('HOTELCARD - DEBUG: In handleSelect', hotel.id);
        setIsSelected(!isSelected);

    }

    const toggleBooking = () => {
        debug && console.log('HOTELCARD - DEBUG: In toggleBooking', hotel.id);
        //from here we can pass info on to book the user for the hotel
        console.log('Book It! Clicked!');
    }

    return (
        <div className="hotel-card">
            {/* Adding ternary to handle missing photos and secondary image to handle the 404s*/}
            { hotel.hotelStaticContent.mainImage.url ? 
            <div
                className="image"
                style={{ 
                    backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url}), url(${DefaultImage})`}}
            >
            </div> : 
            <div 
            className="image"
            >
                No Image Available
            </div> 
            }
            <div className="hotel-details" onClick={toggleSelect}>
                <div className="hotel-name">
                    {hotel.hotelStaticContent.name}
                </div>
                <div className="location">
                    {hotel.hotelStaticContent.neighborhoodName}
                </div>
                { isSelected ?
                <>
                <div className="hotel-rating">
                    Rating: {hotel.hotelStaticContent.rating} / 10
                    <div className="hotel-reviews">
                        Reviews: {hotel.hotelStaticContent.numberOfReviews}
                    </div>
                </div>
                <div className="hotel-description">
                    {hotel.hotelStaticContent.description}
                </div>
                </> : 
                <div className="hotel-clickprompt">
                    Click for Details
                </div>
                }
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
                <button className="button" onClick={toggleBooking}>Book It!</button>
            </div>
        </div>
    )
}

export default HotelCard;
