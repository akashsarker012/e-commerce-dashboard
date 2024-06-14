import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Flex, Input, Typography } from "antd";
import Selectmenu from "./Selectmenu";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

export default function AddProduct() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [productName, setProductName] = useState('');
  const [selectStore, setSelectStore] = useState('');
  const [des, setDes] = useState('');



  const handleStoreChange = (e) => {
    setSelectStore(e)
  };

  const onChange = (e) => {
    setDes(e.target.value);
  };

  const handleProductUpload = () => {
    let data = axios.post('http://localhost:3000/api/v1/product/createproduct',{
      name : productName,
      description : des,
      store : selectStore
    })
  };

  return (
    <div>
      <Flex vertical gap={16}>
        <div>
          <Typography.Title level={5}>Product name</Typography.Title>
          <Input onChange={(e) => setProductName(e.target.value)} defaultValue="" placeholder="Enter Product Name" />
        </div>
      </Flex>
      <Typography.Title level={5}>Product Descriptio</Typography.Title>
      <TextArea  placeholder="Product description" allowClear onChange={onChange} />
      
      <Typography.Title level={5}>Product Variants</Typography.Title>

      {/* Pass the onChange prop to handle store selection */}
      <Selectmenu onChange={handleStoreChange} />

      <Button onClick={handleProductUpload} type="primary" style={{ marginTop: '20px' }}>Upload product</Button>
    </div>
  );
}
