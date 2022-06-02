import React, { FormEvent } from 'react';

const apiUrl = process.env.REACT_APP_URL;

const LoginScreen = () => {

	const login = (param: { email: string, password: string }) => {
		fetch(`${apiUrl}/login`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(param)
		}).then(
			async (response: Response) => {
				if (response.ok) {
					// setList(await response.json())
				}
			}
		)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = (event.currentTarget.elements[0] as HTMLFormElement).value;
		const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
		login({ email, password })
	}
	return <form onSubmit={handleSubmit}>
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