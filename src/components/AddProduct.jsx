import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Flex, Input, Typography } from "antd";

export default function AddProduct() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
  return (
    <div>
      <Flex vertical gap={16}>
        <div>
          <Typography.Title level={5}>Emoji count as length 1</Typography.Title>
          <Input defaultValue="🔥🔥🔥" />
        </div>
      </Flex>


      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    
    </div>
  );
}
