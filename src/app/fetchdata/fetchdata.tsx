import React from "react";
// import ReactDOM from "react-dom";
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
        title: "Namespace"

    }

]

let rows = [] as any;
const Fetchdata: React.FunctionComponent<{}> = () => {
     // mock server url
     // const url = "https://c507295a-b340-4a31-a144-749e6fb4c08a.mock.pstmn.io/list_projects";
     // console.log(url);
    const url = "https://c507295a-b340-4a31-a144-749e6fb4c08a.mock.pstmn.io/list_projects";
    console.log(url);

    // store the api data in people array and searchResults
    React.useEffect(() => {
        axios.get(url).then(res => {
            cluster_data = res.data;

            rows = cluster_data.map(item => {

                const cell1 = item.namespace;
                // const cell2 = item.node;
                // const cell3 = item.period_end;
                // const cell4 = item.period_start;
                // const cell5 = item.pod;
                // const cell6 = item.pod_usage_cpu_core_seconds;
                const arr = [] as any;
                arr.push(cell1);
                return (arr)

            }

            )
            setSearchResults(cluster_data);

        }).catch(err =>{ if(err.response){
            console.log(err.response +"--"+err.message)
        }
        else{
            console.log(err.message)

        }
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


        <Table aria-label="Compact Table" variant={TableVariant.compact} cells={columns} rows={rows} caption = "List of projects">
            <TableHeader />
            <TableBody>
            </TableBody>
        </Table>

    );
}

export { Fetchdata };
