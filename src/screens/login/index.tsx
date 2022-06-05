import React, { FormEvent } from 'react';
import { useAuth } from "../../context/auth-context";

const apiUrl = process.env.REACT_APP_URL;

const LoginScreen = () => {
	const { login, user } = useAuth();


	// const login = (param: { username: string, password: string }) => {
	// 	fetch(`${apiUrl}/login`, {
	// 		method: 'POST',
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify(param)
	// 	}).then(
	// 		async (response: Response) => {
	// 			if (response.ok) {
	// 				console.log(response);
	// 				// setList(await response.json())
	// 			}
	// 		}
	// 	)
	// }

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = (event.currentTarget.elements[0] as HTMLFormElement).value;
		const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
		console.log(user);
		login({ email, password })
	}
	return <form onSubmit={handleSubmit}>
		{
			user ? <div>
				登入成功，用戶名: {user?.email}
			</div> : null
		}
		<div>
			<label htmlFor="email">用戶名</label>
			<input id="email" type="text" />
		</div>
		<div>
			<label htmlFor="password">密碼</label>
			<input id="password" type="password" />
		</div>
		<button type="submit">Login</button>
	</form>
}

export default LoginScreen;