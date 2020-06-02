// import React from 'react';

import { PageSection, Title } from '@patternfly/react-core';
import { Card,  CardBody } from '@patternfly/react-core';

import { SimpleInputGroups } from '@app/DateComponent/DateComponent';

import {DropdownComponent} from '../Dropdown/DropdownComponent';

import {SimpleTable} from '../myTable/SimpleTable';


import { TimesIcon, PlusCircleIcon } from '@patternfly/react-icons';

import {
  Button,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem
} from '@patternfly/react-core';

import { Fetchdata } from '@app/fetchdata/Fetchdatatemp';


// import  {ProjectInfoTableComponent}  from '../ProjectInfo/ProjectInfoTableComponent';

const horizontalFlex = {
    display: 'flex',
    flexDirection: 'row'
} as React.CSSProperties;

const padding= {

  marginRight: '30px'

} as React.CSSProperties;


const Dashboardold React.FunctionComponent<{}> = () => {

  const [startHrs,setStartHrs]=useState(0);
  const [startMins,setStartMins]=useState(0);
  const [endHrs,setEndHrs]=useState(0);
  const [endMins,setEndMins]=useState(0);


  return(<PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title</Title>
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
      </div>

      <div>
        <h1>Active Time </h1>
      </div>


      <div style={horizontalFlex}>

        <div style = {padding}>
          <Card>
            <CardBody> Start Time From: </CardBody>
          </Card>

          <SimpleInputGroups/> 
          
       
          {/* <DropdownComponent setHrs={setStartHrs} setMins={setStartMins}/>         
          {startHrs}
          {startMins}  */}

        </div>

        <div style = {padding}>
          <Card>
            <CardBody> End Time To: </CardBody>
          </Card>

          <SimpleInputGroups/> 
{/* 
         <DropdownComponent setHrs={setEndHrs} setMins={setEndMins}/>
         {endHrs}
         {endMins} */}
          
            
         </div>

         <div>

         <Button isBlock>Search</Button>;
          
          </div>

      
      </div>
      
      <div>

      <h2 >Data from Fetch Data </h2>

        <Fetchdata/>

       
      </div> 

      {/* <div>
        <ProjectInfoTableComponent/>
      </div> */}

      
     



  </PageSection>)
}

export { Dashboardold};
