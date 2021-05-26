import React from 'react'
import HotelList from '../HotelList';

const HotelFilterInput = ({ hotels }) => {
    return (
        <>
            <div className="filters">
                <div className="filters">
                    Hotel Name
                    <input type="text" className="input" maxLength={1}/>
                    Price
                    <select name="" className="select">
                        <option value="">Recommended</option>
                        <option value="">Price low-to-high</option>
                        <option value="">Price high-to-low</option>
                    </select>
                    <button className="button">Reset</button>
                </div>
            </div>
            <div className="hotel-list">
                <HotelList hotels={hotels} />
            </div>
        </>
    )
}

export default HotelFilterInput
