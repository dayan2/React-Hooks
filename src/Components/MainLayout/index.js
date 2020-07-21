import React, {useState} from "react"
import {Layout} from 'antd';
import Sidebar from "../Sidebar"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

import "./mainLayout.scss"

const {Header, Content} = Layout;

function MainLayout(props) {

    const [collapsed, setCollapse] = useState(false)

    const toggle = () => {
        setCollapse(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sidebar collapsed={collapsed} />

            <Layout className="site-layout main-layout">
                <Header className="site-layout-background" style={{padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger triggerExpandNav',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default React.memo(MainLayout)
