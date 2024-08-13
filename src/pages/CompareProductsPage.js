import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CompareProductsTable from '../components/CompareProductsTable';
import { useLocation } from 'react-router-dom';

const { Content } = Layout;

const CompareProductsPage = () => {
    const location = useLocation();
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        if (location.state && location.state.selectedProducts) {
            setSelectedProducts(location.state.selectedProducts);
        }
    }, [location.state]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280, backgroundColor: '#fff' }}>
                        <CompareProductsTable 
                            selectedProducts={selectedProducts} 
                            setSelectedProducts={setSelectedProducts} 
                        />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default CompareProductsPage;
