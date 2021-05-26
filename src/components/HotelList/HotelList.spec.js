import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';
import MockData from '../../services/hotel-mock-api-data';

    //pull hotels array of objects out of the Mock API call data as it is passed on props in components
const MockDataProp = MockData.results.hotels;

describe('App', () => {
        //pass the test data on props to avoid render exception
    const wrapper = shallow(<HotelList sortedHotels={ [MockDataProp[2], MockDataProp[1], MockDataProp[0]] } />);

    it('renders the HotelList component with test API data on props', () => {
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });
});