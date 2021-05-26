import { hotelFilter, hotelSort } from './hotel-input-functions';
import MockData from '../../services/hotel-mock-api-data';

describe('HotelInputFunctions - Filter', () => {
    
    it('exists', () => {
            //pass default value
        const filterInput = "";
        expect(hotelFilter(MockData, filterInput)).toEqual(true);
    });
});

describe('HotelInputFunctions - Sort', () => {
    
    it('exists', () => {
            //pass default value
        const sortSelect = "Recommended";
        expect(hotelSort(MockData, sortSelect)).toEqual(true);
    });
});