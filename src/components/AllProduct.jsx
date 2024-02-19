import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import axios from "axios";
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
    render: (_, record) => ( <p>{record.store.storeName}</p>
    //  console.log(record.store.storeName)
    ),
    filters: [
      {
        text: "London",
        value: "London",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button>Edit</Button>
        <Button>Delete</Button>
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
      </Space>
    ),
  },
];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },

// ];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

export default function AllProduct() {

  const [productInfo,setProductInfo] = useState()

  console.log(productInfo);

  useEffect(()=>{
async function Product() {
 let productData = await axios.get("http://localhost:3000/api/v1/product/getallproduct")

 setProductInfo(productData.data);
}
 Product()
 
  },[])
  return (
    <div>

      <Table columns={columns} dataSource={productInfo} onChange={onChange} />

    </div>
   
  )
}

