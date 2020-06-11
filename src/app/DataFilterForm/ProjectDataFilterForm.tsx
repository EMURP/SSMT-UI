import React from 'react';

//import  { useState } from 'react';

import { Card, CardBody } from '@patternfly/react-core';

import { SimpleInputGroups } from '@app/DateComponent/DateComponent';

import { DropdownComponent } from '../Dropdown/DropdownComponent';

//import { SimpleTable } from '../myTable/SimpleTable';

import { Button } from '@patternfly/react-core';

//import {InputGroup, TextInput, Dropdown, DropdownToggle, DropdownItem} from '@patternfly/react-core';


import  {Fetchdata} from '@app/Fetchdata/DisplayClusterData';


type myProps = {};
type myState = {
  startHrs: number;
  endHrs: number;
  startDate: Date;
  endDate: Date;
  submitToggle: boolean;
  conditionalRender: number;
  changingDate: boolean;
};

const horizontalFlex = {
  display: 'flex',
  flexDirection: 'row'
} as React.CSSProperties;

const padding = {
  marginRight: '30px'
} as React.CSSProperties;

const convertDateToUTC = (date: Date) => {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), 0, 0,0));
};

class ProjectDataFilterForm extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);

    const startDate = new Date();
    startDate.setHours((new Date().getHours()) - 1 )
    startDate.setMinutes(0);
    startDate.setSeconds(0);

    const endDate = new Date();
    endDate.setHours(new Date().getHours())
    endDate.setMinutes(0);
    endDate.setSeconds(0);

    // console.log(startDate);
    // console.log(endDate);

    this.state = {
      startHrs: ((new Date().getHours() - 1 +24) % 24), // javascript Modulo function is buggy
      endHrs: (new Date().getHours() % 24),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      submitToggle: false,
      conditionalRender: 0,
      changingDate: true
    };

  }


  changeToggle = () => {
    const conditionalRender: number = this.state.conditionalRender;
      this.setState({
        ...this.state,
        changingDate: false,
        submitToggle: true,
        conditionalRender: conditionalRender + 1
      });
  };

  setStartHrs = (hrs: number) => {
    const date=new Date(this.state.startDate)
    date.setHours(hrs)
    this.setState({
      ...this.state,
      changingDate: true,
      startHrs: hrs % 24,
      startDate: new Date(date),
    });
  };

  setEndHrs = (hrs: number) => {
    const date=new Date(this.state.endDate)
    date.setHours(hrs)
    this.setState({
      ...this.state,
      changingDate: true,
      endHrs: hrs % 24,
      endDate: new Date(date)
    });
  };

  setStartDate = (date: Date) => {
    date=new Date(date)
    date.setHours(this.state.startHrs)
    date.setDate(date.getDate()+1)
    // console.log(date)
    this.setState({ ...this.state, changingDate: true, startDate: new Date(date) });
  };

  setEndDate = (date: Date) => {
    date=new Date(date)
    date.setHours(this.state.endHrs)
    date.setDate(date.getDate()+1)
    // console.log(date)
    this.setState({ ...this.state, changingDate: true, endDate: new Date(date) });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Active Time </h1>
        </div>

        <div style={horizontalFlex}>
          <div style={padding}>
            <Card>
              <CardBody> Start Date: </CardBody>
            </Card>

            <SimpleInputGroups changeDate={this.setStartDate} dateType="startDate" key="startDate"   />
           
            
            {convertDateToUTC(this.state.startDate).toISOString()}

            <Card>
              <CardBody> Start Time: </CardBody>
            </Card>

            <DropdownComponent key={'startHrs'} setHrs={this.setStartHrs} Hrs={this.state.startHrs} />
            {this.state.startHrs}
          </div>

          <div style={padding}>
            <Card>
              <CardBody> End Date: </CardBody>
            </Card>

            <SimpleInputGroups changeDate={this.setEndDate} dateType="endDate" key="endDate"  />
            {convertDateToUTC(this.state.endDate).toISOString()}
            <Card>
              <CardBody> End Time: </CardBody>
            </Card>

            <DropdownComponent key={'endHrs'} setHrs={this.setEndHrs} Hrs={this.state.endHrs} />
            {this.state.endHrs}
          </div>

          <div>
            <Button
              isBlock
              onClick={() => this.changeToggle()}
            >
              Search
            </Button>
          </div>
        </div>


            <Fetchdata
              key={'Data'}
              changingDate={this.state.changingDate}
              renderCount={this.state.conditionalRender}
              searching={this.state.submitToggle}
              startDate={convertDateToUTC(this.state.startDate)}
              endDate={convertDateToUTC(this.state.endDate)}
            />
          
            </div>
    );
  }
}
export { ProjectDataFilterForm };
