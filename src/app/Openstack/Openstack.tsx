import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import ReactDOM from 'react-dom';
import {Fetchdynamicdata} from '@app/userform/fetchdynamicdata';
import { SimpleForm } from '@app/userform/userform';

const Openstack: React.FunctionComponent<{}> = () => (

  <PageSection>
    <Title headingLevel="h1" size="lg">Openshift Cluster Data</Title>
    <SimpleForm/>    
  </PageSection>
)

export { Openstack };