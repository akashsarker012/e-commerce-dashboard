import React, { useState } from 'react';
import { Alert, Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginInfo } from '../slices/userSlice';

const Login = () => {
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [success, setSuccess] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    console.log(values, 'values');
    const response = await axios.post('http://localhost:3000/api/v1/athentication/login', values);
    console.log(response, 'response');
    if (response.data.error) {
      setError(response.data.error);
      setPasswordError(response.data.error);
      setTimeout(() => {
        setError(null);
      }, 3000);
      console.log(response.data.error, 'error');
    } else {
      if (response.data.role === "member") {
        setError("You are not authorized")
        setTimeout(() => {
          setError(null);
        }, 3000);
      } else {
        dispatch(loginInfo(response.data)) 
        localStorage.setItem('user', JSON.stringify(loginInfo(response.data)))
        setSuccess(response.data.success);

        setTimeout(() => {
          setSuccess(null);
          setPasswordError(null);
          navigate('/');
        }, 3000);
      }
      console.log(response.data.success, 'success');
    }
  }
  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ width: '400px', margin: '0 auto' }} >
      {
        error &&
        <Alert message={error} type="error" showIcon style={{ marginBottom: '1rem', width: '400px' }} />
      }
      {
        success &&
        <Alert message={success} type="success" showIcon style={{ marginBottom: '1rem' }} />
      }

      <h2>Login</h2>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]} >
        <Input />
      </Form.Item>

      <Form.Item
        style={{ width: '100%' }}
        label="Password"
        name="password"
        rules={[{ required: true, type: 'password', message: 'Please input your password!' }]} >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
