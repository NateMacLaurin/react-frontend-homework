import React from 'react';

const HotelError = ( {errorFlag, error} ) => {
    return (
        <div className="error">
            {error}
        </div>
    )
}

export default HotelError;
