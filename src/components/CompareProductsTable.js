import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { getProducts } from '../services/api';

const CompareProductsTable = ({ selectedProducts, setSelectedProducts }) => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            responsive: ['md'], // Show on medium screens and up
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            responsive: ['md'],
        },
        {
            title: 'Discount Percentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
            responsive: ['md'],
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            responsive: ['sm'], // Show on small screens and up
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            responsive: ['sm'],
        },
        {
            title: 'Image',
            dataIndex: 'thumbnail',
            key: 'thumbnail',
            render: (text, record) => (
                <img src={record.thumbnail} alt={record.title} style={{ width: '50px', height: '50px' }} />
            ),
            responsive: ['xs'], // Show on extra small screens and up
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="danger" onClick={() => removeProduct(record.id)}>
                    Remove
                </Button>
            ),
            responsive: ['xs'],
        },
    ];

    const removeProduct = (id) => {
        setSelectedProducts(selectedProducts.filter((product) => product.id !== id));
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    const showAddMoreModal = async () => {
        setIsModalVisible(true);
        const data = await getProducts();
        setAllProducts(data);
    };

    const handleOk = (product) => {
        if (selectedProducts.length < 4) {
            setSelectedProducts([...selectedProducts, product]);
        }
        setIsModalVisible(false);
    };

    return (
        <>
            <Table 
                columns={columns} 
                dataSource={selectedProducts} 
                rowKey="id" 
                pagination={{ pageSize: 5 }} 
                scroll={{ x: true }} // Enable horizontal scrolling on small screens
            />
            <Button 
                type="primary" 
                onClick={showAddMoreModal} 
                disabled={selectedProducts.length >= 4} 
                style={{ marginTop: '16px', width: '100%' }}
            >
                Add More
            </Button>
            <Modal
                title="Add More Products"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                width={800} // Set the modal width
            >
                <Table
                    columns={columns.slice(0, -1).concat({
                        title: 'Action',
                        key: 'action',
                        render: (text, record) => (
                            <Button type="primary" onClick={() => handleOk(record)}>
                                Add
                            </Button>
                        ),
                    })}
                    dataSource={allProducts}
                    rowKey="id"
                    pagination={{ pageSize: 5 }}
                    scroll={{ x: true }} // Enable horizontal scrolling on small screens
                />
            </Modal>
        </>
    );
};

export default CompareProductsTable;
