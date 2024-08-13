import React from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProductDetailsTable from '../components/ProductDetailsTable';

const { Content } = Layout;

const ProductDetailsPage = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                        <ProductDetailsTable />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default ProductDetailsPage;
