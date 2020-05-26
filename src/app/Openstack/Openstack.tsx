import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
// import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { FilterData } from '@app/fetchdata/filterData';
import { SearchData } from '@app/fetchdata/searchData';
import { ExpandableDiv } from '@app/Expandable/ExpandableDiv';


const Openstack: React.FunctionComponent<{}> = () => (


  <PageSection>


    <Title headingLevel="h1" size="lg">Openstack </Title>
    <ExpandableDiv/>
  {/* <PaginationTop/> */}
    
  </PageSection>
)

export { Openstack };