import React, { useState } from 'react'
import { LocaleProvider, Layout, Menu, Icon } from 'antd'
import zhCN from 'antd/es/locale-provider/zh_CN'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    withRouter
} from 'react-router-dom'
import 'antd/dist/antd.css'
import Client from './routes/Client'
import Order from './routes/Order'
const { Header, Content, Footer, Sider } = Layout

function SiderMenu({ location }) {
    return (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname.split('/')[1]]}
        >
            <Menu.Item key="client">
                <Icon type="form" />
                <span>客户管理</span>
                <Link to="/client" />
            </Menu.Item>
            <Menu.Item key="order">
                <Icon type="edit" />
                <span>订单管理</span>
                <Link to="/order" />
            </Menu.Item>
        </Menu>
    )
}
SiderMenu = withRouter(SiderMenu)
function Index() {
    return <Redirect to="/client" />
}

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => setCollapsed(!collapsed)
    return (
        <LocaleProvider locale={zhCN}>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                        <div className="logo">{collapsed ? 'D' : 'Demo'}</div>
                        <SiderMenu />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                            <Icon
                                className="trigger"
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                style={{ cursor: 'pointer' }}
                                onClick={toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280
                            }}
                        >
                            <Route path="/" exact component={Index} />
                            <Route path="/client" component={Client} />
                            <Route path="/order" component={Order} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Created</Footer>
                    </Layout>
                </Layout>
            </Router>
        </LocaleProvider>
    )
}

export default App
