import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import axios from "axios";

export default function AllProduct() {
  const [productInfo, setProductInfo] = useState();

  console.log(productInfo);

  useEffect(() => {
    async function getProductData() {
      try {
        const productData = await axios.get("http://localhost:3000/api/v1/product/getallproduct");
        setProductInfo(productData.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }
    getProductData();
  }, [productInfo]);

  const handleDelete = async (id) => {
    let data = await axios.post("http://localhost:3000/api/v1/product/deleteproduct", {
      id
    })
    console.log(id)
    console.log(data,'aaaaaaa')
  }

  const uniqueStoreNames = productInfo ? [...new Set(productInfo.map(record => record.store.storeName))] : [];
  const storeFilters = uniqueStoreNames.map(storeName => ({
    text: storeName,
    value: storeName,
  }));



  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (_, record) => (
        <img width={100} src="https://cdn.shopify.com/s/files/1/0471/6039/3896/products/MacBooK-Air-M1-Space-Gray-iStockBD.png?v=1649504754&width=600" alt="image" />
      ),
    },
    {
      title: "Store Name",
      dataIndex: "storename",
      render: (_, record) => <p>{record.store.storeName}</p>,
      filters: storeFilters,
      onFilter: (value, record) => record.store.storeName === value,
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button onClick={()=> handleDelete(record._id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table columns={columns} dataSource={productInfo} onChange={onChange} />
    </div>
  );
}
