import * as React from 'react';
import {
    PageSection,
    Title,
    Stack,
    StackItem,
    Button
} from '@patternfly/react-core';
import { ReportsDataFilterForm } from './ReportsDataFilterForm';

type myProps = {};
type myState = {
    startHrs: number;
    endHrs: number;
    startDate: Date;
    endDate: Date;
};

class Reports extends React.Component<myProps, myState> {
    constructor(myProps) {
        super(myProps);
        this.state = {
            startHrs: 0,
            endHrs: 0,
            startDate: new Date(),
            endDate: new Date(),
        }
    }

    render() {
        return (
            <PageSection>
                <Title headingLevel="h1" size="lg">
                    Reports
          </Title>
                <Stack>
                    <StackItem>
                        <ReportsDataFilterForm />
                    </StackItem>
                </Stack>
            </PageSection>
        );
    }
}

export { Reports };
