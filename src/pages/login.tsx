import { Container, Typography } from "@mui/material";
import { AuthForm } from "../widgets/authForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../modules/application/user/useUser";
import { useLogin } from "../modules/application/mutations/auth/useLogin";

const Login: React.FC = () => {
    const navigate = useNavigate();
   const { mutate: login, isPending: loginLoading, isSuccess: loginSuccess, error: loginError } = useLogin()
    const { getUser } = useUser();
    const handleLogin = async ({ email, password }: { email: string, password: string }) => {
      login({ email, password });
    };
useEffect(() => {
    if (loginSuccess) {
        getUser(undefined);
        navigate("/home");
    }
  }, [loginSuccess, navigate, getUser]);
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