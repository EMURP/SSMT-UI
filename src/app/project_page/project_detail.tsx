import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { useParams } from 'react-router-dom';
import axios from 'axios';

let cluster_data = [] as any;
const ProjectDetail: React.FunctionComponent<{}> = () => {
    const [name,setName] = React.useState("")
    const [node,setNode] = React.useState("")
    const [start,setStart] = React.useState("")
    const [end,setEnd] = React.useState("")
    const [pod,setPod] = React.useState("")
    const [cpusage,setCpusage] = React.useState("")

    let { projectId } = useParams();
    console.log(projectId)
    React.useEffect(() => {
        axios.get("https://c507295a-b340-4a31-a144-749e6fb4c08a.mock.pstmn.io/project_list_with_activation_time/"+projectId).then(res => {
            cluster_data = res.data;

            cluster_data.map((item: { namespace: any; }) => {
                console.log(typeof(item.namespace))
                setName(item.namespace)
                setNode(item.node)
                setStart(item.period_start)
                setEnd(item.period_end)
                setPod(item.pod)
                setCpusage(item.pod_usage_cpu_core_seconds)
                
            })         

        }).catch(err =>{ if(err.response){
            console.log(err.response +"--"+err.message)
        }
        else{
            console.log(err.message)

        }
    });
    }, []);

   
    return (

        <PageSection>
            <Title headingLevel="h1" size="lg">Projectpage</Title>
            
            <div>

               {name}

            </div>
            <div>

                {node}

            </div>
            <div>

                {start}

            </div>
            <div>

                {end}

            </div>
            <div>

                {pod}

            </div>
            <div>

                {cpusage}

            </div>    
           
        </PageSection>



    )
}

export { ProjectDetail };