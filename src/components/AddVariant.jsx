
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Input, Select, } from 'antd';
export default function AddVariant() {

    const [productData, setproductData] = useState([])
    const [productName, setProductName] = useState()
    console.log(productName, 'productName');
    const [image, setimage] = useState()
    useEffect(() => {
        async function getParoductData() {
            const data = await axios.get("http://localhost:3000/api/v1/product/getallproduct");
            let arr = [];
            data.data.map((item) => {
                arr.push({
                    value: item._id,
                    label: item.name,
                });
                setproductData(arr);
            })
        }
        getParoductData();
    }, [])

    const [variant, setvariant] = useState({
        color: '',
        price: '',
        quantity: '',
        stroage: '',
        image: ''
    })
    const handleImage = (e) => {
        setimage(e.target.files[0]);
    }
    const handlechange = (event) => {
       const name = event.target.name;
       const value = event.target.value;
        setvariant({ ...variant, [name]: value });
    }
    console.log(variant, 'variant');
    const handleSubmit = async () => {
        const data = await axios.post("http://localhost:3000/api/v1/product/createvariants", {
            color: variant.color,
            image: image,
            price : variant.price,
            quantity : variant.quantity,
            stroage : variant.stroage,
            product : productName
        },{
            headers: {"Content-Type": "multipart/form-data"}
        })
        console.log(data, 'data');
 
    }
    return (
        <div>
            <h4>Select Product</h4>
            <Select
                defaultValue="Select product"
                style={{ width: 120 }}
                options={productData}
                onChange={(e) => setProductName(e)}
            />
            <>
                <h4>color</h4>
                <Input onChange={handlechange} type="text" placeholder="Enter color" name='color' />
                <h4>price</h4>
                <Input onChange={handlechange} type="text" placeholder="Enter price" name='price' />
                <h4>quantity</h4>
                <Input onChange={handlechange} type="text" placeholder="Enter quantity" name='quantity' />
                <h4>stroage</h4>
                <Input onChange={handlechange} type="text" placeholder="Enter stroage" name='stroage' />
                <h4>image</h4>
                <Input onChange={handleImage} type="file" name='image' />
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </>

        </div>
    )
}
