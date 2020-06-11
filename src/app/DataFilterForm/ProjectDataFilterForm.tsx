import React from 'react';

import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';

import { SimpleInputGroups } from '@app/DateComponent/DateComponent';

import { DropdownComponent } from '../Dropdown/DropdownComponent';

import { Button } from '@patternfly/react-core';

import { Fetchdata } from '@app/fetchdata/displayclusterdata';


type myProps = {};
type myState = {
  startHrs: number;
  endHrs: number;
  startDate: Date;
  endDate: Date;
  submitToggle: boolean;
  conditionalRender: number;
};


const convertDateToUTC = (date: Date, hrs: number) => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    hrs, date.getUTCMinutes(), date.getUTCSeconds());
}

class ProjectDataFilterForm extends React.Component<myProps, myState> {

  constructor(myProps) {

    super(myProps);

    this.state = {
      startHrs: 0,
      endHrs: 0,
      startDate: convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)), 0),
      endDate: convertDateToUTC(new Date(), 0),
      submitToggle: false,
      conditionalRender: 0,
    }
  }

  shouldComponentUpdate(nextProps: myProps, nextState: myState){
    return this.state.conditionalRender!==nextState.conditionalRender;
  }

  changeToggle = () => {
    const conditionalRender: number = this.state.conditionalRender;
    if (this.state.startDate !== convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)), 0)) {
      this.setState({ ...this.state, submitToggle: true, conditionalRender: conditionalRender + 1 })
    }
  }

  setStartHrs = (hrs: number) => {
    this.setState({ ...this.state, startHrs: hrs, startDate: convertDateToUTC(new Date(this.state.startDate), hrs) });
  }

  setEndHrs = (hrs: number) => {
    this.setState({ ...this.state, endHrs: hrs, endDate: convertDateToUTC(new Date(this.state.endDate), hrs) })
  }

  setStartDate = (date: Date) => {
    this.setState({ ...this.state, startDate: convertDateToUTC(new Date(date), this.state.startHrs) })
  }

  setEndDate = (date: Date) => {
    this.setState({ ...this.state, endDate: convertDateToUTC(new Date(date), this.state.startHrs) })
  }


  render() {

    return (


      <React.Fragment>
        <Form>
          <Grid>
            <GridItem span={2}>
              <SimpleInputGroups changeDate={this.setStartDate} dateType="StartDate" key="StartDate" />
            </GridItem>
            <GridItem span={2}>
              <SimpleInputGroups changeDate={this.setEndDate} dateType="EndDate" key="EndDate" />
            </GridItem>
          </Grid>
          <Grid>
            <GridItem span={2}>
              <DropdownComponent key={"startHrs"} setHrs={this.setStartHrs} Hrs={this.state.startHrs} />
            </GridItem>
            <GridItem span={2}>
              <DropdownComponent key={"endHrs"} setHrs={this.setEndHrs} Hrs={this.state.endHrs} />
            </GridItem>
          </Grid>
          <Grid>
            <ActionGroup>
              <GridItem span={1}>
                <Button
                  isBlock
                  onClick={() => this.changeToggle()}
                  disabled={this.state.startDate !== convertDateToUTC(new Date(Date.UTC(0, 0, 0, 0, 0, 0)), 0)}>
                  Search
                </Button>
              </GridItem>
            </ActionGroup>
          </Grid>
          <Grid>
            <GridItem span={4} rowSpan={8}>
              <Fetchdata renderCount={this.state.conditionalRender} searching={this.state.submitToggle} startDate={this.state.startDate} endDate={this.state.endDate} />
            </GridItem>
          </Grid>
        </Form>
      </React.Fragment>
    );

  }


}
export { ProjectDataFilterForm };
