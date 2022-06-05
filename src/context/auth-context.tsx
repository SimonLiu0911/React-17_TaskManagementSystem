import React, { useState, ReactNode } from "react";
import * as auth from "auth-provider";
import { User } from "../screens/project-list/searchPanel";

interface AuthForm {
	email: string;
	password: string;
}

const AuthContext = React.createContext<{
	user: User | null,
	register: (form: AuthForm) => Promise<void>,
	login: (form: AuthForm) => Promise<void>,
	logout: () => Promise<void>,
} | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const login = (form: AuthForm) => {
		return auth.login(form).then(({email}: {email: any}) => {
			console.log('trigger'); // 沒有觸發
			setUser(email)
		})
	}
	const register = (form: AuthForm) => auth.register(form).then((user: any) => setUser(user))
	const logout = () => auth.logout().then(() => setUser(null))
	

	return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth必須在AuthProvider中使用');
	}
	return context;
}