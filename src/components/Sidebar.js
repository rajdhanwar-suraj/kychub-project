import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const { Sider } = Layout;

const Sidebar = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const location = useLocation();

    // Get the current path and match it with the menu item keys
    const getSelectedKey = () => {
        if (location.pathname === '/') {
            return '1';
        } else if (location.pathname.includes('/compare')) {
            return '2';
        }
        return '1';
    };

    return (
        <Sider
            collapsible
            collapsed={isMobile}
            trigger={null}
            width={200}
            className="site-layout-background"
            style={{ minHeight: '100vh' }}
        >
            <Menu 
                mode="inline" 
                selectedKeys={[getSelectedKey()]} 
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">
                    <Link to="/">Product Details</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/compare">Compare Products</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
