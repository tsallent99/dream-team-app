import { Container, Typography } from "@mui/material";
import { AuthForm } from "../widgets/authForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../modules/application/user/useUser";
import { useLogin } from "../modules/application/auth/useLogin";

const Login: React.FC = () => {
    const navigate = useNavigate();
   const { mutate: login, isPending: loginLoading, isSuccess: loginSuccess, error: loginError } = useLogin()
    const { refetch: refetchUser, } = useUser();
    const handleLogin = async ({ email, password }: { email: string, password: string }) => {
      login({ email, password });
    };
useEffect(() => {
    if (loginSuccess) {
        refetchUser();
        navigate("/home");
    }
  }, [loginSuccess, navigate, refetchUser]);
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Login
        </Typography>
        <AuthForm onSubmit={handleLogin} isRegister={false} error={loginError} loading={loginLoading} />
      </Container>
    );
  };
  
  export default Login;