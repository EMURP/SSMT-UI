import React from "react";
import { PageSection, Title } from '@patternfly/react-core';
import { Card,  CardBody } from '@patternfly/react-core';

const horizontalFlex = {
    display: 'flex',
    flexDirection: 'row'
} as React.CSSProperties;

const padding= {

  marginRight: '30px'

} as React.CSSProperties;


const Dashboard: React.FunctionComponent<{}> = () => (
  <PageSection>
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



  </PageSection>
)

export { Dashboard };
