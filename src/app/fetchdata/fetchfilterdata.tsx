import React from "react";
import axios from "axios";
import "@patternfly/react-core/dist/styles/base.css";
import {
    Table,
    TableHeader,
    TableBody,
    TableVariant
} from '@patternfly/react-table';
import '../app.css';

let cluster_data = [] as any;

const columns = [

    {
        title: "namespace"

    }, {
        title: 'node'

    }, {
        title: 'period_end'

    },
    {
        title: 'period_start'

    },
    {
        title: 'pod'

    },
    {
        title: 'pod_usage_cpu_core_seconds'

    },

]

let rows = [] as any;
const FetchFilterdata: React.FunctionComponent<{}> = (props) => {
    const url = "https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects/2020-05-15/2020-05-28";

    // store the api data in people array and searchResults
    React.useEffect(() => {

        console.log(props.startDate);
        console.log(props.endDate);
        axios.get(url).then(res => {
            cluster_data = res.data;

            rows = cluster_data.map(item => {

                const cell1 = item.namespace;
                
                const cell2 = item.node;
                const cell3 = item.period_end;
                const cell4 = item.period_start;
                const cell5 = item.pod;
                const cell6 = item.pod_usage_cpu_core_seconds;
                const arr = [] as any;
                arr.push(cell1, cell2, cell3, cell4, cell5, cell6);
                

                return (arr)

            })
            setSearchResults(cluster_data);
            
        });
    }, []);
    
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    // habdlechange function to be called when we enter any string in the searchbox, stores the input in varialbe searchTerm
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    // apply filter on cluster_data and store results in searchResults
    React.useEffect(() => {
        const results = cluster_data.filter(
            cluster_item =>

                cluster_item.namespace.toLowerCase().includes(searchTerm)
               
        );
        
        setSearchResults(results);
        console.log(results);
        
    }, [searchTerm]);

    // render Table UI
    return (

        <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows}>
            <TableHeader />
            <TableBody>
            </TableBody>
        </Table>
    );
}

export { FetchFilterdata };
