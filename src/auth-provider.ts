// 在真實環境中，如果使用firebase這種第三方auth服務的話，本文件不需要開發者開發
import { User } from './screens/project-list/searchPanel';

const localStorageKey = '__auth_provider_token__';
const apiUrl = process.env.REACT_APP_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
	window.localStorage.setItem(localStorageKey, user.token || '')
	return user;
};

export const login = (data: { email: string, password: string }):any => {
	fetch(`${apiUrl}/login`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(
		async (response: Response) => {
			if (response.ok) {
				return handleUserResponse(await response.json());
			} else {
				return Promise.reject(data);
			}
		}
	)
}

export const register = (data: { email: string, password: string }):any => {
	fetch(`${apiUrl}/register`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(
		async (response: Response) => {
			if (response.ok) {
				handleUserResponse(await response.json())
			} else {
				return Promise.reject(data);
			}
		}
	)
}

export const logout = async () => window.localStorage.removeItem(localStorageKey);