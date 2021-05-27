import React from 'react';

const HotelError = ( {errorFlag, setErrorFlag, error} ) => {

    const handleClick = () => {
        setErrorFlag(!errorFlag);
    }

    return (
        <div className="error">
            {/*Display the error context information passed on props from the failing component to the user*/}
            {error}
            {/*If an error flag is passed on props from failing component, flip the flag to */}
            { errorFlag && <button className="button" onClick={handleClick}>Retry</button>}
        </div>
    )
}

export default HotelError;
