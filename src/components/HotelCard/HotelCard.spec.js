import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';
import MockData from '../../services/hotel-mock-api-data';

describe('HotelCard', () => {
    const wrapper = shallow(<HotelCard hotel={MockData.results.hotels[0]}/>);

    it('renders the HotelCard component with test API data on props', () => {
        expect(wrapper.find('.hotel-details').exists()).toBe(true);
    });

    it('click prompt on hotel-details functions and renders the rating info', () => {
        expect(wrapper.find('.hotel-clickprompt').exists());
        wrapper.find('.hotel-details').simulate('click');
        expect(wrapper.find('.hotel-rating').exists());
    });
});