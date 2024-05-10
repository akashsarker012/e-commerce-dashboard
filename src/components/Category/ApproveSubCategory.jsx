import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Tag, Modal, Select } from 'antd';
import axios from 'axios';

function ApproveSubCategory() {
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [statusName, setStatusName] = useState('');

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
        return isActive ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>;
      }
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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button type="primary" onClick={() => showModal(record.name)}>
            Edit Status
          </Button>
        </>
      ),
    },
  ];

  const showModal = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(statusName, 'statusName');
    console.log(selectedCategory, 'selectedCategory');


    axios.post('http://localhost:3000/api/v1/category/subcategorystatus', {
      name: selectedCategory,
      status: statusName
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function getCategoryData() {
      try {
        const categoryData = await axios.get("http://localhost:3000/api/v1/category/getallsubcategory");
        setCategoryInfo(categoryData.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
    getCategoryData();
  }, [categoryInfo]);

  return (
    <div>
      <Table columns={columns} dataSource={categoryInfo} />
      <Modal title="Edit Status" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Selected Category: {selectedCategory}</p>
        <Select
          style={{ width: 120 }}
          defaultValue={'waiting'}
          onChange={(value) => setStatusName(value)}
          options={[
            { value: 'waiting', label: 'Waiting' },
            { value: 'rejected', label: 'Rejected' },
            { value: 'approved', label: 'Approved' }
          ]}
        />
      </Modal>
    </div>
  );
}

export default ApproveSubCategory;
