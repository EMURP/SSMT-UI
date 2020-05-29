import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import ReactDOM from 'react-dom';
import {Fetchdynamicdata} from '@app/userform/fetchdynamicdata';
//import { TypeaheadSelectInput } from '@app/userform/timeselect';
import { DateForm_displaydata } from '@app/userform/userform';

const Openstack: React.FunctionComponent<{}> = () => (

  <PageSection>
    <Title headingLevel="h1" size="lg">Openshift Cluster Data</Title>
    <DateForm_displaydata/>    
  </PageSection>
)

export { Openstack };