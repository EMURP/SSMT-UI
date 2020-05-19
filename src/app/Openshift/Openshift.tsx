import * as React from 'react';
import { PageSection, Title }  from '@patternfly/react-core';
// import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';
const Openshift: React.FunctionComponent<{}> = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Openshift </Title>
    {/* <div style={{ height: '275px', width: '300px' }}>
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
  </div>  */}
  </PageSection>
)

export { Openshift };