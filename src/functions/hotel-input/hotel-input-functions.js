/*
    These functions will be called in the HotelFilterInput component.
    Filter inputs will be sanitized for whitespace and compared by lowercase chars only so user input is not case-sensitive.
    Their return values will be used to build the filtered hotel array to pass down on props to HotelList.
    Filter will return boolean false for error handling if no results are found based on the filterInput parameter.
    Sort will return boolean false for error handlingif somehow a select value is passed which is not expected.
*/

//add debug boolean to flag console logs on and off
const debug = false;

export function hotelFilter(dataToFilter, filterInput) {
    debug && console.log('FUNCTIONS - FILTER - DEBUG: dataToFilter', dataToFilter);
    debug && console.log('FUNCTIONS - FILTER - DEBUG: filterInput', filterInput);
        //check if filter input is empty string
    if(filterInput === ""){
            //input filter is empty string, so passthrough the original dataToFilter parameter (Default)
        debug && console.log('FUNCTIONS - FILTER - DEBUG: Resolving empty string');
        return dataToFilter;
    }else if(!filterInput){
            //input filter is falsey and not empty string, return false for error handling
            debug && console.log('FUNCTIONS - FILTER - DEBUG: Resolving falsey and not empty string');
        return false;
    } else {
            //if filter input is not falsey, filter the input data by the filterInput parameter
            debug && console.log('FUNCTIONS - FILTER - DEBUG: dataToFilter', dataToFilter);
            debug && console.log('FUNCTIONS - FILTER - DEBUG: filterInput sanitized', filterInput.trim().toLowerCase());

            const filteredData = dataToFilter.filter(
                (hotel) => {
                    return hotel.hotelStaticContent.name.toLowerCase().includes(filterInput.trim().toLowerCase());
                }
            );
            debug && console.log('FUNCTIONS - FILTER - DEBUG: Filtered Data:', filteredData);
            if(filteredData.length === 0){
                    //if the filter returns no results, return false for error handling.
                return false;
            } else {
                    //return filtered data
                return filteredData;
        }    
    }
}

export function hotelSort(dataToSort, sortSelect) {
    debug && console.log('FUNCTIONS - SORT - DEBUG: dataToSort', dataToSort);
    debug && console.log('FUNCTIONS - SORT - DEBUG: sortSelect', sortSelect);
        //check all cases from user select
    switch(sortSelect) {
        case 'recommended': {
                //array.sort by personal "recommended" formula: [rating*numberOfReviews] descending(b-a) (Default)
            const sortedData = dataToSort.sort((a, b) => {
                return b.rating*b.numberOfReviews - a.rating*a.numberOfReviews;
            });
            return sortedData;
        }
        case 'descending': {
                //array.sort by lowestAveragePrice.amount descending(b-a)
            const sortedData = dataToSort.sort((a, b) => {
                return b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
            });
            return sortedData;
        }
        case 'ascending': {
                //array.sort by lowestAveragePrice.amount ascending(a-b)
            const sortedData = dataToSort.sort((a, b) => {
                return a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
            });
            return sortedData;
        }
        default: 
                //if somehow one of the select cases is not passed on sortInput param, return false for error handling
            return false;
    }
}