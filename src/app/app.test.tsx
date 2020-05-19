import * as React from 'react';
import { App } from '@app/index';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Openshift } from '@app/Openshift/Openshift';
import { mount, shallow } from 'enzyme';
import { Button } from '@patternfly/react-core';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

describe('App tests', () => {
  test('should render default App component', () => {
    const view = shallow(<App />);
    expect(view).toMatchSnapshot();
  });

  it('should render a nav-toggle button', () => {
    const wrapper = mount(<App />);
    const button = wrapper.find(Button);
    expect(button.exists()).toBe(true);
  });

  it('should hide the sidebar when clicking the nav-toggle button', () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('#nav-toggle').hostNodes();
    expect(wrapper.find('#page-sidebar').hasClass('pf-m-expanded')).toBeTruthy();
    
    button.simulate('click');
    expect(wrapper.find('#page-sidebar').hasClass('pf-m-collapsed')).toBeTruthy();
    
    
    expect(wrapper.find('#page-sidebar').hasClass('pf-m-exapnaded')).toBeFalsy();
  });

  it('should render the dashboard page', () => {
    const view = shallow(<Dashboard />);
    expect(view).toMatchSnapshot();
   
  });

  // it('should render the openshift page', () => {
  //   const view = shallow(<Openshift />);
  //   expect(view).toMatchSnapshot();
   
  // });

  // it('should render the pie chart on openshift page', () => {
  //   const wrapper = mount(<Openshift />);
    
  //   const pie_chart = wrapper.find(ChartPie);
  //   expect(pie_chart.exists()).toBe(true);
   
  // });

  

});
