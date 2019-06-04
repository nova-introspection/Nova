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
      invalidSchema: true,
      loadingState: false,
      handleUrlClick: jest.fn(),
    };
    beforeAll(() => {
      wrapper = shallow(<Landing {...props} />);
    });
    describe('loadingText', () => {
      it('Loading text contains Invalid Schema text if invalidSchema prop is true', () => {
        expect(wrapper.find('.is-size-5').text()).toEqual('Invalid GraphQL endpoint, please try again');
      });
      it('Loading text contains processing schema if loadingState prop is true', () => {
        wrapper = shallow(<Landing loadingState={true}/>);
        expect(wrapper.find('.is-size-5').text()).toEqual('Processing GraphQL Schema...');
      });
    });
  });
});