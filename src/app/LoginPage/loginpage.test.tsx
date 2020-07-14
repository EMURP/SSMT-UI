import * as React from 'react';
import { LoginPage } from './LoginPage';
import { shallow } from 'enzyme';
import { Role } from '..';

describe('LoginPage tests', () => {
  test('should render default LoginPage component', () => {
    const view = shallow(<LoginPage setRole={() => {}} />);
    expect(view).toMatchSnapshot();
  });

  test('should login after CILogon redirect', () => {
    const setRole = jest.fn();
    delete window.location;
    // @ts-ignore mock window location to include CILogon code
    window.location = {
        href: 'http://localhost:9000/?code=123',
    };
    shallow(<LoginPage setRole={setRole} />);
    expect(setRole).toBeCalledWith(Role.ADMIN)
  })
});
