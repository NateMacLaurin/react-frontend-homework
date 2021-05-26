import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';

describe('HotelCard', () => {
    const wrapper = shallow(<HotelCard />);

    it('renders the HotelCard component', () => {
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
    });
});