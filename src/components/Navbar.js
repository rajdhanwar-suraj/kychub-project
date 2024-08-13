import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';

const Navbar = () => {
    const menu = (
        <Menu>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Products</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
    );

    return (
        <Layout.Header style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
            <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
                My App
            </div>
            <div>
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button type="primary">Menu</Button>
                </Dropdown>
            </div>
        </Layout.Header>
    );
};

export default Navbar;
