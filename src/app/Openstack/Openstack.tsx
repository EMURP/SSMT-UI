import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { FetchFilterdata } from '@app/fetchdata/fetchfilterdata';
//import { TypeaheadSelectInput } from '@app/userform/timeselect';


const Openstack: React.FunctionComponent<{}> = () => (

  <PageSection>
<<<<<<< HEAD


    <Title headingLevel="h1" size="lg">Openstack </Title>

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
        left: 40,
        right: 20,
        top: 20
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={400}
    />

    </div>
  
  </div>

  

=======
    <Title headingLevel="h1" size="lg">Openshift Cluster Data</Title>
      <Fetchdata/>    
>>>>>>> f9e7744e16778c5999de3be184c4d7eef72228ae
  </PageSection>
)

export { Openstack };