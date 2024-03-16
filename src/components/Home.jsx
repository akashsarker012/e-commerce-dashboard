import React from 'react';
import { AppstoreOutlined, ProductOutlined,UsergroupAddOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
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
  getItem('Product', 'sub1', <ProductOutlined /> , [
    getItem('Add Product', '/login'),
    getItem('All Product', '2'),]),
  {
    type: 'divider',
  },
  
  getItem('Category', 'sub2', <UsergroupAddOutlined />, [
    getItem('T-Shirt', '3'),
    getItem('Electronic', '4'),]),
  {
    type: 'divider',
  },
];
const Home = () => {
    const navigate = useNavigate()
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Home;