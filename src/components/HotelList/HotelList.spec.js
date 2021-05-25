import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';

describe('App', () => {
    const wrapper = shallow(<HotelList />);

    it('renders the HotelList component', () => {
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });
});