import React, { useEffect, useState } from 'react';
import { Select, Tag } from 'antd';
import axios from "axios";

const Selectmenu = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    async function fetchStoreData() {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/merchant/allstore");
        setStoreData(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    }
    fetchStoreData();
  }, []);

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginInlineEnd: 4,
          // Add your custom styles here
          padding: '4px 8px',
          borderRadius: '4px',
          background: '#f0f0f0',
          color: '#333',
          fontWeight: 'bold',
        }}>
        {label}
      </Tag>
    );
  };

  return (
    <Select
      mode="multiple"
      tagRender={tagRender}
      style={{
        width: '100%',
      }}
      options={storeData.map(item => ({
        value: item._id,
        label: item.storeName
      }))}
    />
  );
};

export default Selectmenu;
