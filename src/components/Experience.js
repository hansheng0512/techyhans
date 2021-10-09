import {Col,Row, Button} from "antd";
import { Bar } from "@ant-design/charts";
import "../css/workingExperience.css";
import {Data} from "../data/data";

const {skillLevel} = Data;



export const Experience = () => {
    var config = {
        data: skillLevel,
        xField: 'score',
        yField: 'skill',
        legend: false,
        // barBackground: { style: { fill: 'rgba(0,0,0,0.1)' } },
        seriesField: 'skill',
        interactions: [
          {
            type: 'active-region',
            enable: false,
          },
        ],
      };
    

    return(
        <>
            <div className='linear-background'>
                <Row style={{padding: '5% 15%'}}>
                    <Col md={4} sm={24}>
                        <h1 style={{color: 'white'}}>
                            Why Choose Me?<br/>
                            Because Skills Matters!!!
                        </h1>
                        <Button type="primary" shape="round" >What I did?</Button>
                    </Col>
                    <Col md={20} sm={24}>
                        <Bar {...config}></Bar>
                    </Col>
                </Row>

            </div>
        </>
    )
}