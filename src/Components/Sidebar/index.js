import React from "react"
import {Link} from "react-router-dom"
import {Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import "./sidebar.scss"
import logo from '../../../assets/images/undraw_logo_design_bjnx.svg'

const {Sider} = Layout;

function Sidebar({collapsed}) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <Link to="/dashboard">
                        nav 1
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined/>}>
                    nav 3
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default React.memo(Sidebar)
