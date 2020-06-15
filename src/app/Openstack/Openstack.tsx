import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { FetchFilterdata } from '@app/fetchdata/fetchfilterdata';
//import { TypeaheadSelectInput } from '@app/userform/timeselect';
import { SampleDashboard } from '@app/userform/dashboard';


const Openstack: React.FunctionComponent<{}> = () => (

  <PageSection>
    <Title headingLevel="h1" size="lg">Openstack</Title>
      {/* <SampleDashboard/>     */}
  </PageSection>
)

export { Openstack };
