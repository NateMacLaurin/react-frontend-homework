import React, { useState } from 'react';
import DefaultImage from '../../public/Image404.jpg';
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
            <div className="hotel-details">
                <div className="hotel-name">
                    {hotel.hotelStaticContent.name}
                </div>
                <div className="location">
                    {hotel.hotelStaticContent.neighborhoodName}
                </div>
                { isSelected && (<>
                <div className="hotel-rating">
                    Rating: {hotel.hotelStaticContent.rating}/10    <span className="reviews">Reviews: {hotel.hotelStaticContent.numberOfReviews}</span>
                </div>
                <div className="hotel-description">
                    {hotel.hotelStaticContent.description}
                </div></>)}
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
                { isSelected? <button className="button" onClick={toggleSelect}>Book It!</button> : <button className="button" onClick={toggleSelect}>Select</button>}
            </div>
        </div>
    )
}

export default HotelCard;
