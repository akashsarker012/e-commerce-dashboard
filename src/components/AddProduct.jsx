import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Flex, Input, Typography } from "antd";
import Selectmenu from "./Selectmenu";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default function AddProduct() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [storeName, setStoreName] = useState('');
  const [selectStore, setSelectStore] = useState('');

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleStoreChange = (e) => {
    setSelectStore(e)
  };

  const handleProductUpload = () => {
    console.log(storeName, 'storeName');
    console.log(selectStore, 'selectStore');
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())), 'storeName');
  };

  return (
    <div>
      <Flex vertical gap={16}>
        <div>
          <Typography.Title level={5}>Store name</Typography.Title>
          <Input onChange={(e) => setStoreName(e.target.value)} defaultValue="" placeholder="Enter Store Name" />
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
