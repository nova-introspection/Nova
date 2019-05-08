import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Landing from '../client/Components/Landing.jsx';
import LandingModal from '../client/Components/LandingSections/LoadingModal.jsx';

configure({ adapter: new Adapter() });

describe('React unit testing', () => {
  describe('Landing Page', () => {
    let wrapper;
    const props = {
      // invalidSchema: true,
      // loadingState: false,
      // handleUrlClick: jest.fn()
      isActive: true
    };
    beforeAll(() => {
      wrapper = shallow(<LandingModal {...props} />);
    });
    it('Loading text contains Invalid Schema text if invalidScheme prop is true', () => {
      //expect(wrapper.find('.is-size-5').text()).toEqual('hi');
    });
  });
});