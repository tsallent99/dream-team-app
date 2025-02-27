import { Typography } from "@mui/material";
import { AuthForm } from "../widgets/authForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../modules/application/auth/mutations/useRegister";
import { AuthContainer, AuthCard } from "../widgets/authContainer";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const {
		mutate: register,
		isPending: registerLoading,
		isSuccess: registerSuccess,
		error: registerError,
	} = useRegister();

	const handleRegister = async ({
		username,
		email,
		password,
	}: {
		username: string;
		email: string;
		password: string;
	}) => {
		register({
			username,
			email,
			password,
		});
	};
	useEffect(() => {
		if (registerSuccess) {
			navigate("/login");
		}
	}, [registerSuccess, navigate]);
	return (
		<AuthContainer direction="column" justifyContent="space-between">
			<AuthCard variant="outlined">
				<Typography component="h1" variant="h4" gutterBottom>
					Register
				</Typography>
				<AuthForm
					onSubmit={handleRegister}
					isRegister={true}
					error={registerError}
					loading={registerLoading}
				/>
			</AuthCard>
		</AuthContainer>
	);
};

export default Register;
