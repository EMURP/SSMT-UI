import React from "react";
import axios from "axios";
import "@patternfly/react-core/dist/styles/base.css";
import '../app.css';
import { PageSection } from '@patternfly/react-core';
import { any } from 'prop-types';

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
const Fetchdata: React.FunctionComponent<{}> = () => {
    const url = "https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_projects";

    // store the api data in people array and searchResults
    React.useEffect(() => {
        axios.get(url).then(res => {
            cluster_data = res.data;

            
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

                cluster_item.namespace.toLowerCase().includes(searchTerm) ||
                cluster_item.node.toLowerCase().includes(searchTerm) ||
                //person.period__end.toDateString().toLowerCase().includes(searchTerm) ||
                // person.period__start.toLowerCase().includes(searchTerm) ||
                cluster_item.pod.toLowerCase().includes(searchTerm)
            //person.pod_usage_cpu_core_seconds.toLowerCase().includes(searchTerm)
        );
        
        setSearchResults(results);
        
        
    }, [searchTerm]);

    // render Table UI
    return (
        <PageSection>

            <div className="App">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />

                <table id="cluster_info">

                    <thead>
                        <tr>
                            <th>Namespace</th>
                            <th>Node</th>
                            <th>Period_End</th>
                            <th>Period_Start</th>
                            <th>Pod</th>
                            <th>Pod_Usage_Cpu_Core_seconds</th>
                        </tr>
                    </thead>
                    <tbody>

                        {searchResults.map((cluster_info: { namespace: React.ReactNode; node: React.ReactNode; period_end: React.ReactNode; period_start: React.ReactNode; pod: React.ReactNode; pod_usage_cpu_core_seconds: React.ReactNode; }) => {
                            return (
                                <React.Fragment>
                                    <tr>
                                        <td>{cluster_info.namespace}</td>
                                        <td>{cluster_info.node}</td>
                                        <td>{cluster_info.period_end}</td>
                                        <td>{cluster_info.period_start}</td>
                                        <td>{cluster_info.pod}</td>
                                        <td>{cluster_info.pod_usage_cpu_core_seconds}</td>
                                    </tr>
                                </React.Fragment>

                            )


                        })}
                    </tbody>
                </table>                
            </div>

        </PageSection>

    );
}

export { Fetchdata };
