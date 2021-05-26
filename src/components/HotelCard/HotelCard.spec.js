import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';
import MockData from '../../services/hotel-mock-api-data';

describe('HotelCard', () => {
    const wrapper = shallow(<HotelCard hotel={MockData.results.hotels[0]}/>);

    it('renders the HotelCard component with test API data on props', () => {
        expect(wrapper.find('.hotel-details').exists()).toBe(true);
    });
});