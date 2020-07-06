import React from 'react';
import { shallow } from 'enzyme';
import { DropdownComponent } from './DropdownComponent';

describe('Dropdown tests', () => {

  test('should render Dropdown component', () => {
    const dropdown = shallow(<DropdownComponent setHrs={() => {}} Hrs={2} />);
    expect(dropdown.find('option')).toHaveLength(24);
    expect(dropdown.find('select').prop('value')).toEqual(2);
  });

  test('should handle Dropdown change', () => {
    // eslint-disable-next-line no-undef
    const callback = jest.fn();
    const dropdown = shallow(<DropdownComponent setHrs={callback} Hrs={2} />);

    // simulate user changing value of dropdown
    dropdown.find('select').simulate('change', { currentTarget: { value: 3 } });
    
    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0][0]).toBe(3); // callback should be called with new value
  })

})