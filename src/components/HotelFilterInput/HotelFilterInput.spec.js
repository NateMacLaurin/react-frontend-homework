import React from 'react';
import { shallow } from 'enzyme';
import HotelFilterInput from './HotelFilterInput';

describe('App', () => {
    const wrapper = shallow(<HotelFilterInput />);

    it('renders the HotelFilterInput component', () => {
        expect(wrapper.find('.filters').exists()).toBe(true);
    });
});