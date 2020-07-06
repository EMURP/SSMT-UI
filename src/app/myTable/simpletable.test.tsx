import React from 'react';
import { shallow } from 'enzyme';
import { SimpleTable } from './SimpleTable';

describe('SimpleTable tests', () => {

  test('should render default SimpleTable component', () => {
    const view = shallow(<SimpleTable />);
    expect(view).toMatchSnapshot();
  })

})