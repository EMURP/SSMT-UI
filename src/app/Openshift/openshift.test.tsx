import React from 'react';
import { shallow } from 'enzyme';
import { Openshift } from './Openshift';

describe('Openshift tests', () => {

  test('should render default Openshift component', () => {
    const view = shallow(<Openshift />);
    expect(view).toMatchSnapshot();
  })

})