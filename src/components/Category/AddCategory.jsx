import { Button, Input } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState();
  const [categoryDescription, setCategoryDescription] = useState();
  const handlecategory = () => {
        let data = axios.post('http://localhost:3000/api/v1/category/createcategory',{
          name : categoryName,
          description : categoryDescription,
        })
        console.log(data);
  }
  return (
    <div style={{width: '70%', margin: 'auto'}}>
      <>
      <h3>Category Name :</h3>
      <Input placeholder='Enter Category name' onChange={(e) => setCategoryName(e.target.value)}/>
      </>
      <>
      <h3>Category Description :</h3>
      <Input placeholder='Enter Category Description' onChange={(e) => setCategoryDescription(e.target.value)}/>
      </>
      <Button onClick={handlecategory} style={{marginTop: '20px', width: '100%'}} type="primary">Create Category</Button>
    </div>
  )
}
