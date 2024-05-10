import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: 'Sub Category Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Active',
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

export default function SubCategoryStatus() {
  const [subCategoryInfo, setSubCategoryInfo] = useState([]);

  useEffect(() => {
    async function getSubCategoryData() {
      try {
        const subCategoryData = await axios.get(
          "http://localhost:3000/api/v1/category/getallsubcategory"
        );
        setSubCategoryInfo(subCategoryData.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
    getSubCategoryData();
  }, []);

  console.log(subCategoryInfo, 'categoryInfo');

  return (
    <div>
      <Table columns={columns} dataSource={subCategoryInfo} />
    </div>
  );
}
