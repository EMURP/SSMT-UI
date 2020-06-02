import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';

// import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

import {SimpleTable} from '@app/myTable/SimpleTable'
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

//import {Table}from 'react-bootstrap-table';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import { Card,  CardBody } from '@patternfly/react-core';
import {  } from '@patternfly/react-table';
import { Fetchdata } from '@app/fetchdata/fetchdata';

const horizontalFlex= {
  display: "flex",
  flexDirection: "row",
  marginRight: "30px",
  marginLeft: "30px"
} as React.CSSProperties

const padding= {

marginBottom: "30px",
marginRight: "30px",
marginLeft: "30px"

} as React.CSSProperties

const paddingChart= {

  marginBottom: "30px",
  marginRight: "30px",
  marginLeft: "30px",
  height: '275px',
  width: '300px'

} as React.CSSProperties


const Openshift: React.FunctionComponent<{}> = () => (


  <PageSection>


    <Title headingLevel="h1" size="lg">Openshift </Title>

  <div style={horizontalFlex}>

      <div style={padding}>
  
          <Card>
            <CardBody>Node Info Table </CardBody>
          </Card>

          <SimpleTable/>

      </div>

      <div style={padding}>

        <Card>
        <CardBody> Pod Info Table  </CardBody>
        </Card>

        <SimpleTable/>

    </div>
  
  </div>

  <div style={horizontalFlex}>

      <div style={padding}>
  
          <Card>
            <CardBody>Project Info Table </CardBody>
          </Card>

          <SimpleTable/>

      </div>

      <div style={paddingChart}>

     
      <ChartPie
      ariaDesc="Average number of Pods"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Running', y: 35 }, { x: 'Failed', y: 55 }, { x: 'Terminated', y: 10 }]}
      height={275}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Running: 35' }, { name: 'Failed: 55' }, { name: 'Terminated: 10' }]}
      legendPosition="bottom"
      padding={{
        bottom: 65,
        left: 20,
        right: 20,
        top: 20
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={400}
    />

    </div>
  
  </div>



  </PageSection>
)

export { Openshift };