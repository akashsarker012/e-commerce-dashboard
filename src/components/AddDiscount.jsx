import { Button, Input, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddDiscount() {
  const [productData, setproductData] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [discount, setDiscount] = useState({
    cash: "",
    discount: "",
  })

  useEffect(() => {
    async function getParoductData() {
      const data = await axios.get(
        "http://localhost:3000/api/v1/product/getallproduct"
      );
      let arr = [];
      data.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.name,
        });
        setproductData(arr);
      });
    }
    getParoductData();
  }, []);
  useEffect(() => {
    async function getParoductData() {
      const data = await axios.get(
        "http://localhost:3000/api/v1/category/getallcategory"
      );
      let arr = [];
      data.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.name,
        });
        setAllCategory(arr);
      });
    }
    getParoductData();
  }, []);
  useEffect(() => {
    async function getParoductData() {
      const data = await axios.get(
        "http://localhost:3000/api/v1/category/getallsubcategory"
      );
      let arr = [];
      data.data.map((item) => {
        arr.push({
          value: item._id,
          label: item.name,
        });
        setAllSubCategory(arr);
      });
    }
    getParoductData();
  }, []);


  const handlechange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    setDiscount({ ...discount, [name]: value });
  }

  const handleSubmit = (e) => {
      console.log(discount.cash);
      console.log(discount.discount);
      console.log(category);
      console.log(subCategory);
      console.log(product);

      const data = axios.post('http://localhost:3000/api/v1/discount/adddiscount', {
        cash : discount.cash,
        discount : discount.discount,
        category : category,
        subCategory : subCategory,
        product : product
      })

  }
  return (
    <div>
      <h5>Cash</h5>
      <Input onChange={handlechange} name="cash" type="number" placeholder="Enter Amount" />
      <h5>Persent</h5>
      <Input onChange={handlechange} name="discount" type="number" placeholder="Enter Persent" />
      <h5>Select product</h5>
      <Select
        defaultValue="Select product"
        style={{ width: 120 }}
        options={productData}
        name="product"
        onChange={(e) => setProduct(e)}
      />

        <div style={{display:'flex', gap:'30px'}}>
        <div>
        <h5>Select Category</h5>
        <Select
          defaultValue="Select Category"
          style={{ width: 120 }}
          options={allCategory}
          onChange={(e) => setCategory(e)}
          name="category"
        />
      
      </div>

        <div>
          <h5>Select Sub Category</h5>
          <Select
            defaultValue="Select Sub Category"
            style={{ width: 120 }}
            options={allSubCategory}
            onChange={(e) => setSubCategory(e)}
            name="subCategory"
          />
        </div>
        </div>
<Button onClick={handleSubmit} style={{marginTop: '20px',}} type="primary">Submit</Button>

    </div>
  );
}
