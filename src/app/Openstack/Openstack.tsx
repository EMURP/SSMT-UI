import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
// import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import { ExpandableDiv } from '@app/Expandable/ExpandableDiv';


const Openstack: React.FunctionComponent<{}> = () => (


  <PageSection>


    <Title headingLevel="h1" size="lg">Openstack </Title>
    <ExpandableDiv/>
  {/* <PaginationTop/> */}
    
  </PageSection>
)

export { Openstack };