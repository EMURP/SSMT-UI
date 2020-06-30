import React from 'react';
import { shallow } from 'enzyme';
import { Openstack } from './Openstack';

describe('Openstack tests', () => {

  test('should render default Openstack component', () => {
    const view = shallow(<Openstack />);
    expect(view).toMatchSnapshot();
  })

})