import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Flex, Input, Typography } from "antd";
import Selectmenu from "./Selectmenu";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from "axios";

export default function AddProduct() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [productName, setProductName] = useState('');
  const [selectStore, setSelectStore] = useState('');

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleStoreChange = (e) => {
    setSelectStore(e)
  };

  const handleProductUpload = () => {
    console.log(productName, 'productName');
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())), 'des');
    console.log(selectStore, 'selectStore');

    let data = axios.post('http://localhost:3000/api/v1/product/createproduct',{
      name : productName,
      description : draftToHtml(convertToRaw(editorState.getCurrentContent())),
      // "image" : "aaaaaa",
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

      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={handleEditorChange}
      />
      
      <Typography.Title level={5}>Product Variants</Typography.Title>

      {/* Pass the onChange prop to handle store selection */}
      <Selectmenu onChange={handleStoreChange} />

      <Button onClick={handleProductUpload} type="primary" style={{ marginTop: '20px' }}>Upload Primary</Button>
    </div>
  );
}
