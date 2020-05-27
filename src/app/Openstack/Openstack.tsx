import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import ReactDOM from 'react-dom';

const Openstack: React.FunctionComponent<{}> = () => (

  <PageSection>
    <Title headingLevel="h1" size="lg">Openshift Cluster Data</Title>
    <Fetchdata/>    
  </PageSection>
)

export { Openstack };