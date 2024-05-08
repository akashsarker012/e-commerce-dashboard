import React from "react";
import {
  AppstoreOutlined,
  ProductOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Col, Divider, Menu, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  //   getItem('Products', 'sub1', <MailOutlined />, [
  //     getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //     getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  //   ]),
  getItem("Product", "sub1", <ProductOutlined />, [
    getItem("Add Product", "/addproduct"),
    getItem("All Product", "/allproduct"),
    getItem("All Variant", "/allvariant"),
  ]),
  {
    type: "divider",
  },

  getItem("Category", "sub2", <UsergroupAddOutlined />, [
    getItem("T-Shirt", "3"),
    getItem("Electronic", "4"),
  ]),
  {
    type: "divider",
  },
];
const Home = () => {

  const data = useSelector(state => state.user.value)
  console.log(data, 'data');  
  const navigate = useNavigate();

  useEffect(()=>{
    if (!data) {
      navigate('/login')
    }
  },[])
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <Row gutter={[24, 16]}>
        <Col  span={8}>
          {" "}
          <Menu
            onClick={onClick}
           
            //   defaultSelectedKeys={['1']}
            //   defaultOpenKeys={['sub1']}
            mode="inline"
            items={items} />
        </Col>
        <Col span={14}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </>
  );
};
export default Home;
