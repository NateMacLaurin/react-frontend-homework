import React from 'react';
import { shallow } from 'enzyme';
import HotelCard from './HotelCard';
import MockData from '../../services/hotel-mock-api-data';

describe('HotelCard', () => {
    const wrapper = shallow(<HotelCard hotel={MockData.results.hotels[0]}/>);

    it('renders the HotelCard component with test API data on props', () => {
        expect(wrapper.find('.hotel-details').exists()).toBe(true);
    });

    it('has a button which toggles select state on click', () => {
        expect(wrapper.find('button')).toEqual('Select');
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button')).toEqual('Book It!');
    });
});