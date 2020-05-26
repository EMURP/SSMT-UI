import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import '@app/app.css';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { Expandable } from '@patternfly/react-core';

const ExpandableDiv: React.FunctionComponent = () => (
    <Expandable toggleTextExpanded="Hide Cluster Info" toggleTextCollapsed="Show Cluster Info">
        {/* <Fetchdata /> */}
        <Fetchdata>
            
        </Fetchdata>
    </Expandable>
)
export { ExpandableDiv };