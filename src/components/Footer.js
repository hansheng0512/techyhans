import {Menu, Col, Row} from 'antd';
import "../css/profileDescription.css"
import logo from '../data/logo.png'
import {Data} from '../data/data'

const { Item } = Menu;
const { footerMenu1, footerMenu2,footerMenu3 } = Data;

export const Footer = () => {
    const menuItem = (data) => {
        return data.map((item) => <Item key={item.name} className='menu-text'>
            {item.name}
        </Item>)
    }
    return (
        <Row className='white-background' gutter={16} style={{padding: '8% 15%'}}>
            <Col md={6} sm={24}>
                <div className='logo'>
                    <img src={logo} alt='logo' style={{width:"80%"}}/>
                </div>
                <br/>
                <h2>Hello! I’m Han Sheng. Experienced in various Artificial Intelligent based project.</h2>
            </Col>
            <Col md={6} sm={24}>
                <h2>About me</h2>
                <Menu className='navigation navbar-menu' mode='vertical'>
                    {menuItem(footerMenu1)}
                </Menu>
            </Col>
            <Col md={6} sm={24}>
                <h2>Portfolio</h2>
                <Menu className='navigation navbar-menu' mode='vertical'>
                    {menuItem(footerMenu2)}
                </Menu>
            </Col>
            <Col md={6} sm={24}>
                <h2>Contact</h2>
                <Menu className='navigation navbar-menu' mode='vertical'>
                    {menuItem(footerMenu3)}
                </Menu>
            </Col>
        </Row>
        
    )
}