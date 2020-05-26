import ReactDOM from 'react-dom';
import React from 'react';
import "@patternfly/react-core/dist/styles/base.css";
import '@app/app.css';
import { Fetchdata } from '@app/fetchdata/fetchdata';
import { SearchData } from '@app/fetchdata/searchData';

//import React from 'react';
import { Expandable } from '@patternfly/react-core';
import { PaginationTop } from '@app/fetchdata/paginationTop';

//import axios from 'axios';





const ExpandableDiv: React.FunctionComponent = () => (




    <Expandable toggleTextExpanded="Hide Cluster Info" toggleTextCollapsed="Show Cluster Info">
        {/* <Fetchdata /> */}
        <SearchData>
            
        </SearchData>
    </Expandable>


)






export { ExpandableDiv };