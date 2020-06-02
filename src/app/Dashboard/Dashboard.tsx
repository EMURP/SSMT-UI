import React, { useState } from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { Card, CardBody } from '@patternfly/react-core';
<<<<<<< HEAD
// import {SimpleInputGroups} from '@app/DateComponent/DateComponent.tsx';

import { SimpleInputGroups } from '@app/DateComponent/DateComponent';

import { DropdownComponent } from '../Dropdown/DropdownComponent';

import { SimpleTable } from '../myTable/SimpleTable';

import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

import { Button, InputGroup, TextInput, Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { ProjectDataFilterForm } from '@app/DataFilterForm/ProjectDataFilterForm';

// import  {ProjectInfoTableComponent}  from '../ProjectInfo/ProjectInfoTableComponent';

const horizontalFlex = {
  display: 'flex',
  flexDirection: 'row'
} as React.CSSProperties;

const padding = {
  marginRight: '30px'
} as React.CSSProperties;

=======
const horizontalFlex = {
  display: 'flex',
  flexDirection: 'row'
} as React.CSSProperties;

const padding = {
  marginRight: '30px'
} as React.CSSProperties;

>>>>>>> f9e7744e16778c5999de3be184c4d7eef72228ae
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
        <div style={horizontalFlex}>
          <div style={padding}>
            <Card>
              <CardBody>Total Node: 37</CardBody>
            </Card>
          </div>
          <div style={padding}>
            <Card>
              <CardBody>Total Pods: 68</CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardBody> Total Projects: 12</CardBody>
            </Card>
          </div>
<<<<<<< HEAD
        </div>

        <ProjectDataFilterForm />
=======
        </div>        
>>>>>>> f9e7744e16778c5999de3be184c4d7eef72228ae
      </PageSection>
    );
  }
}
<<<<<<< HEAD
export { Dashboard };
=======
export { Dashboard };
>>>>>>> f9e7744e16778c5999de3be184c4d7eef72228ae
