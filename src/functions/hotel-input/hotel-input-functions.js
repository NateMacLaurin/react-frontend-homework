

export function hotelFilter(dataToFilter, filterInput) {
        //check if filter input exists
    if(!filterInput){
            //no filter input passed, so passthrough the original dataToFilter parameter (Default)
        return dataToFilter;
    } else {
            //if filter input exists, filter the input data by the filterInput parameter
        const filteredData = dataToFilter.filter((hotel) => {
                //send API name string data to lower case before the comparison
            hotel.hotelStaticContent.name.toLowerCase().includes(
                    //sanitize the user input string by culling white spaces and sending all chars to lower case
                    filterInput.trim().toLowerCase()
                );
            }
        );
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

        //initialize empty array to hold sorted data
    const sortedData = [];

        //check all cases from user select
    switch(sortSelect) {
        case 'recommended':
            //array.sort by personal "recommended" formula: [rating*numberOfReviews] descending(b-a) (Default)
            const sortedData = dataToSort.sort((a, b) => {
                b.rating*b.numberOfReviews - a.rating*a.numberOfReviews;
            });
            break;
        case 'descending':
            //array.sort by lowestAveragePrice.amount descending(b-a)
            const sortedData = dataToSort.sort((a, b) => {
                b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
            });
            break;
        case 'ascending':
            //array.sort by lowestAveragePrice.amount ascending(a-b)
            const sortedData = dataToSort.sort((a, b) => {
                a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
            });
            break;
        default: 
            //if somehow one of the select cases is not passed on sortInput param, return false for error handling
            return false;
    }
        //return sorted data
    return sortedData;
}