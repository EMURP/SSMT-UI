import React from 'react';
import { shallow, mount } from 'enzyme';
import { Fetchdata } from './DisplayClusterData';
import axois from 'axios';

describe('Fetchdata tests', () => {

  test('should call API when mounted', () => {
    const getSpy = jest.spyOn(axois, 'get').mockImplementation(async () => ({ data: [] }))
    shallow(<Fetchdata 
      startDate={new Date()} 
      endDate={new Date()} 
      searching={false} 
      renderCount={10} 
      changingDate={true} 
    />);
    expect(getSpy).toHaveBeenCalled();
  })

})