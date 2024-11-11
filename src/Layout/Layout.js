// Layout.js
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';
import srm from './srm.png';  // Logo for expanded view
import seal from './seal.png'; // Logo for collapsed view

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle the collapsed state
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" theme='light'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: collapsed ? '10px' : '24px 16px' }}>
          {/* Conditionally render logo based on collapsed state */}
          <img 
            src={collapsed ? seal : srm} 
            alt="Logo" 
            style={{ maxHeight: collapsed ? '40px' : '60px', width: 'auto' }} 
          />
        </div>

        <Menu theme="light" mode="inline" defaultSelectedKeys={['/']}>
          {/* Menu Items */}
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Area */}
      <Layout>
        {/* Navbar */}
        <Header style={{ padding: 0, background: '#1976D2' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleCollapsed,
            style: { paddingLeft: 24 },
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {/* Routed Components Rendered Here */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
