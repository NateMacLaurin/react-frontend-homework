import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';
import MockData from '../../services/hotel-mock-api-data';

describe('App', () => {
        //pass the test data on props to avoid render exception
    const wrapper = shallow(<HotelList hotels={MockData.results.hotels} />);

    it('renders the HotelList component with test API data on props', () => {
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });
});