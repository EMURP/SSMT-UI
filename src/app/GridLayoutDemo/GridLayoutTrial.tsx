import React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Card, CardBody } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';

import { GridProjectDataFilterForm } from '@app/GridLayoutDemo/GridProjectDataFilterForm';

// import  {ProjectInfoTableComponent}  from '../ProjectInfo/ProjectInfoTableComponent';

const horizontalFlex = {
  display: 'flex',
  flexDirection: 'row'
} as React.CSSProperties;

const padding = {
  marginRight: '30px'
} as React.CSSProperties;


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

class GridLayoutTrial extends React.Component<myProps, myState> {
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


        {/* <Grid>

          <GridItem span={10} rowSpan={3} >

            <Card>
              <CardBody>Total Node: 37</CardBody>
            </Card>

            <Card>
              <CardBody>Total Pods: 68</CardBody>
            </Card>

            <Card>
              <CardBody> Total Projects: 12</CardBody>
            </Card>

        </GridItem> */}


        <GridProjectDataFilterForm />

        {/* </Grid> */}

      </PageSection>
    );
  }
}
export { GridLayoutTrial };

