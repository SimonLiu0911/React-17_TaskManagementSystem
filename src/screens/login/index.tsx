import React, { FormEvent } from 'react';
import { useAuth } from "../../context/auth-context";
import { Form, Input, Button } from 'antd';

const apiUrl = process.env.REACT_APP_URL;

const LoginScreen = () => {
	const handleSubmit = (event: {username: string, password: string}) => {}
	return <Form onFinish={handleSubmit}>
		<Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
			<label htmlFor="username">Username</label>
			<Input id="username" type="text" />
		</Form.Item>
		<Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
			<label htmlFor="password">Password</label>
			<Input id="password" type="password" />
		</Form.Item>
		<Form.Item>
			<Button htmlType='submit' type="primary">Login</Button>
		</Form.Item>
	</Form>
}

export default LoginScreen;