import { Button, Space, Table } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

export default function AllVariant() {
  const [variantData, setVariantData] = useState([]);

  useEffect(() => {
    async function getAllVariant() {
      try {
        const response = await axios.get('https://e-commerce-backend-phi-eight.vercel.app/api/v1/product/getvariants');
        setVariantData(response.data);
      } catch (error) {
        console.error('Error fetching variant data:', error);
      }
    }
    getAllVariant();
  }, []);

  const columns = [
    {
      title: 'Serial No.',
      dataIndex: 'index',
      key: 'index',
      render: (_, record, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'product',
      key: 'product',
      render: (_, record, ) => (
        <h4>{record?.product?.name}</h4>
        // console.log(record?.product?.name, 'record')
      ),
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (_, record, ) => (
        <img width={50} src={record.image} alt="image"/>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  // console.log(variantData);

  return (
    <div>
      <h1>All Variant</h1>
      <Table columns={columns} dataSource={variantData} />
    </div>
  );
}
