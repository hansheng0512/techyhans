import {Card, Col} from "antd";

const {Meta} = Card;

export const JobItem = ({name, src, description}) => {
    const img = require("../data/workingExperience/" + src).default;
    console.log(src);
    console.log(img);

    return (
        <>
            <Col md={6}>
                <Card
                    hoverable
                    style={{padding: '0% 5%'}}
                    cover={<img alt={name} src={img}/>}
                >
                    <Meta title={description}/>
                </Card>
            </Col>
        </>
    )
}