import React, { useState } from 'react';
import { Alert, Button, Form, Input } from 'antd';
import axios from 'axios';

const Registration = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState();
//   console.log(error,'error');
//   console.log(success,'success');

  const onFinish = async (values) => {
      const response = await axios.post('https://e-commerce-backend-phi-eight.vercel.app/api/v1/athentication/registration', values);
      if(response.data.error){
          setError(response.data.error);
          setTimeout(() => {
            setError(null);
          }, 3000);
        // console.log(response.data.error, 'error');
        }else{
            setSuccess(response.data.success);
            // setTimeout(() => {
            //     setSuccess(null);
            //   }, 3000);
            // console.log(response.data.success, 'success');
        }
    }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: '600px', margin: '0 auto' }} >
      {
      error && 
      <Alert  message={error} type="error" showIcon style={{ marginBottom: '1rem', width: '400px' }} />
      }
      {
      success && 
      <Alert  message={success} type="success" showIcon style={{ marginBottom: '1rem' }} />
      }

      <Form.Item
      
        label="First Name"
        name="firstname"
        rules={[{ required: true, message: 'Please input your first name!' }]} >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Telephone"
        name="telephone"
        rules={[{ required: true, message: 'Please input your telephone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[ { required: true, type: 'email', message: 'Please input a valid email address!' }]} >
        <Input />
      </Form.Item>

      <Form.Item
      style={{ width: '100%' }}
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Registration;
