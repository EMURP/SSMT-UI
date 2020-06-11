import React from 'react';
import { Grid, GridItem, Form, ActionGroup } from '@patternfly/react-core';
import { SimpleInputGroups } from '@app/DateComponent/DateComponent';
import { DropdownComponent } from '../Dropdown/DropdownComponent';
import { Button } from '@patternfly/react-core';
import { ProjectListTable } from '@app/project_page/project_list_with_table';


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




const convertDateToUTC = (date: Date, hrs: number) => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    hrs, date.getUTCMinutes(), date.getUTCSeconds());
}

class DemoProjectDataFilterForm extends React.Component<myProps, myState> {

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
              <ProjectListTable renderCount={this.state.conditionalRender} searching={this.state.submitToggle} startDate={this.state.startDate} endDate={this.state.endDate} />
            </GridItem>
          </Grid>
        </Form>
      </React.Fragment>
    );

  }


}
export { DemoProjectDataFilterForm };