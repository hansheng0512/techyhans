import {Row} from "antd";
import "../css/workingExperience.css";
import {Data} from "../data/data";
import {JobItem} from "./JobItem";

const {workingExperiences} = Data;

export const WorkingExperience = () => {
    const populateJobs = workingExperiences.map(({name, src, description}) => {
        console.log("name" + name);
        console.log("src" + src);
        console.log("description" + description);
            return <JobItem name={name} src={src} description={description}/>
        });

    return(
        <>
            <div className='linear-background'>
                <Row style={{padding: '8% 15%'}}>
                    <h1 style={{color: 'white'}}>
                        My working experiences tell me more about me
                    </h1>
                </Row>
                <Row>
                    {populateJobs}
                </Row>
            </div>
        </>
    )
}