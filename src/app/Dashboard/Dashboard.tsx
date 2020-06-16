import React from 'react';
import { PageSection, Title, Stack, StackItem } from '@patternfly/react-core';

//import { ProjectDataFilterForm } from '@app/DataFilterForm/ProjectDataFilterForm';
import { DemoProjectDataFilterForm } from '@app/project_page/demoProjectfilterform';

// import  {ProjectInfoTableComponent}  from '../ProjectInfo/ProjectInfoTableComponent';


type myProps = {};
type myState = {
    startHrs: number;
    endHrs: number;
    startDate: Date;
    endDate: Date;
};

const convertDateToUTC = (date: Date )=> { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
     date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); }

class Dashboard extends React.Component<myProps, myState> {
  constructor(myProps) {
    super(myProps);
    this.state={
        startHrs: 0,
        endHrs: 0,
        startDate: new Date(Date.UTC(0, 0, 0, 0, 0, 0)),
        endDate: convertDateToUTC(new Date()),
    }
  }

  render() {
    return (
      <PageSection>
        <Title headingLevel="h1" size="lg">
          Dashboard Page Title
        </Title>

        <Stack>
                   
          {/* <StackItem> <ProjectDataFilterForm /></StackItem> */}
          <StackItem> <DemoProjectDataFilterForm /></StackItem>
        </Stack>
        

       
      </PageSection>
    );
  }
}
export { Dashboard };
