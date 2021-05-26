import React from 'react';
import { shallow } from 'enzyme';
import HotelFilterInput from './HotelFilterInput';
import MockData from '../../services/hotel-mock-api-data';

describe('App', () => {
    const wrapper = shallow(<HotelFilterInput hotels={MockData.results.hotels} />);

    it('renders the HotelFilterInput component', () => {
        expect(wrapper.find('.filters').exists()).toBe(true);
    });
});