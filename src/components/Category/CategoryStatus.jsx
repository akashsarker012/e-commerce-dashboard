import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Category Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'IsActive',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (isActive) => {
      if (isActive) {
        return <Tag color="green">Active</Tag>;
      } else {
        return <Tag color="red">Inactive</Tag>;
      }
    }
        
        // {isActive ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>},
  },
  {
    title: 'Status',
    key: 'status',
    render: (text, record) => (
      <Space size="middle">
        <a>{record.status}</a>
      </Space>
    ),
  },
];

export default function CategoryStatus() {
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    async function getCategoryData() {
      try {
        const categoryData = await axios.get(
          "http://localhost:3000/api/v1/category/getallcategory"
        );
        setCategoryInfo(categoryData.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
    getCategoryData();
  }, []);

  // console.log(categoryInfo, 'categoryInfo'); 

  return (
    <div>
      <Table columns={columns} dataSource={categoryInfo} />
    </div>
  );
}
