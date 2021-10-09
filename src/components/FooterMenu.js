import {Col, Menu, Row} from 'antd';
import {CopyrightCircleOutlined}from '@ant-design/icons';
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined} from "@ant-design/icons";
import "../css/profileDescription.css"

const { Item } = Menu;

export const FooterMenu = () => {

    const socialMediaIcon = () => (
        <>
            <Item key="facebook" style={{padding: "0 10px"}}>
                <FacebookOutlined />
            </Item>
            <Item key="instagram" style={{padding: "0 10px"}}>
                <InstagramOutlined />
            </Item>
            <Item key="youtube" style={{padding: "0 10px"}}>
                <YoutubeOutlined />
            </Item>
            <Item key="linkedIn" style={{padding: "0 10px"}}>
                <LinkedinOutlined />
            </Item>
        </>
    );

    return (
        <>
            <Row className='white-background'>
                <Col offset={3} md={13} sm={12}>
                    <Menu mode='horizontal'>
                        <h3>Copyright <CopyrightCircleOutlined /> 2021 <a href="#home">hanshengliang</a>. All Rights Reserved</h3>
                    </Menu>
                </Col>
                <Col offset={3} md={5} sm={12}>
                    <Menu mode='horizontal'>
                        {socialMediaIcon()}
                    </Menu>
                </Col>
            </Row>
        </>
    )
}