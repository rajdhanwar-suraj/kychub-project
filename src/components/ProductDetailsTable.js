import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { getProducts } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ProductDetailsTable = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const handleCompare = () => {
        navigate('/compare', { state: { selectedProducts } });
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Discount Percentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
            sorter: (a, b) => a.discountPercentage - b.discountPercentage,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Image',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: (text, record) => (
                <img src={record.thumbnail} alt={record.title} style={{ width: '50px' }} />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button 
                    type="primary" 
                    onClick={() => setSelectedProducts([...selectedProducts, record])}
                    disabled={selectedProducts.find(product => product.id === record.id)}
                >
                    Add to Compare
                </Button>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={products} loading={loading} rowKey="id" pagination={{ pageSize: 5 }} />
            <Button 
                type="primary" 
                onClick={handleCompare} 
                disabled={selectedProducts.length === 0}
                style={{ marginTop: '16px', width: '100%' }}
            >
                Compare
            </Button>
        </>
    );
};

export default ProductDetailsTable;
