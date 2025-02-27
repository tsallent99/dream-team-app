// Login.tsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useLogin } from "../modules/application/auth/mutations/useLogin";
import { AuthForm } from "../widgets/authForm";

import { useAuth } from "../modules/application/auth/useAuth";
import { AuthCard, AuthContainer } from "../widgets/authContainer";

const Login: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { login } = useAuth();
	const {
		mutate: loginMutate,
		isPending: loginLoading,
		isSuccess: loginSuccess,
		error: loginError,
	} = useLogin();

	const handleLogin = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		loginMutate({ email, password });
	};

	useEffect(() => {
		if (loginSuccess) {
			const token = localStorage.getItem("token");
			if (token) {
				login(token);
				const from = location.state?.from?.pathname || "/home";
				navigate(from);
			}
		}
	}, [loginSuccess, navigate, location.state, login]);

	return (
		<AuthContainer direction="column" justifyContent="space-between">
			<AuthCard variant="outlined">
				<Typography component="h1" variant="h4" gutterBottom>
					Login
				</Typography>
				<AuthForm
					onSubmit={handleLogin}
					isRegister={false}
					error={loginError}
					loading={loginLoading}
				/>
				<Typography variant="subtitle1" component="h5" gutterBottom>
					Don't have an account? <a href="/register">Register</a>
				</Typography>
			</AuthCard>
		</AuthContainer>
	);
};

export default Login;
