import React from 'react';
import { shallow } from 'enzyme';
import HotelError from './HotelError';

describe('HotelError', () => {
    const wrapper = shallow(<HotelError />);

    it('renders the HotelError component', () => {
        expect(wrapper.find('.hotel-error').exists()).toBe(true);
    });
});