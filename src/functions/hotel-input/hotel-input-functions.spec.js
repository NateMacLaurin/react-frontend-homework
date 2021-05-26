import { hotelFilter, hotelSort } from './hotel-input-functions';
import MockData from '../../services/hotel-mock-api-data';

describe('HotelInputFunctions - Filter', () => {
    
    it('exists', () => {
            //pass default value
        const filterInput = "";
        expect(hotelFilter(MockData, filterInput)).toEqual(true);
    });

    it('returns false if no results are found', () => {
            //pass a value that will not return any results
        const filterInput = "!";
        expect(hotelSort(MockData, filterInput)).toEqual(false);
    });
});

describe('HotelInputFunctions - Sort', () => {
    
    it('exists', () => {
            //pass default value
        const sortSelect = "Recommended";
        expect(hotelSort(MockData, sortSelect)).toEqual(true);
    });

    it('returns false if no results are found', () => {
            //pass an invalid select value
        const sortSelect = " x!^ ";
        expect(hotelSort(MockData, sortSelect)).toEqual(false);
    });
});