import { Button, Input, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddSubCategory() {
    const [subCategoryName, setSubCategoryName] = useState();
    const [subCategoryDescription, setSubCategoryDescription] = useState();
    const [categoryName, setcategoryName] = useState('');
    const handleSubCategory = () => {
        let data = axios.post('http://localhost:3000/api/v1/category/createsubcategory',{
            name: subCategoryName,
            description: subCategoryDescription,
            category: categoryName
        })
        // console.log(subCategoryName, subCategoryDescription, categoryName, 'data');
    }
const [options,setOptions] = useState([])
    useEffect(() => {
        async function getSubCategoryData() {
            let arr = []
            let data = await axios.get('http://localhost:3000/api/v1/category/getallcategory')
            // setOptions(data.data, 'data');
                data.data.map((item) => {
                    arr.push({
                        value: item._id,
                        label: item.name
                    })
                })
                setOptions(arr)
        }
        getSubCategoryData()
    }, [])
    console.log(options, '  options');
    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <>
                <h3>Select Category Name :</h3>
                <Select
                    mode="single"
                    style={{
                        width: '100%',
                    }}
                // placeholder="Tags Mode"
                onChange={(e) => setcategoryName(e)}
                options={options}
                />
            </>
            <>
                <h3>Sub Category Name :</h3>
                <Input placeholder='Enter Category name' onChange={(e) => setSubCategoryName(e.target.value)} />
            </>
            <>
                <h3>Sub Category Description :</h3>
                <Input placeholder='Enter Category Description' onChange={(e) => setSubCategoryDescription(e.target.value)} />
            </>
            <Button onClick={handleSubCategory} style={{ marginTop: '20px', width: '100%' }} type="primary">Sub Create Category</Button>
        </div>
    )
}
