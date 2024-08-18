// pages/Login.tsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material'; // Importa los componentes necesarios
import { useLogin } from '../modules/application/mutations/auth/useLogin';
import { AuthForm } from '../widgets/authForm';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: login, isPending: loginLoading, isSuccess: loginSuccess, error: loginError } = useLogin();

  const handleLogin = async ({ email, password }: { email: string, password: string }) => {
    login({ email, password });
  };

  useEffect(() => {
    if (loginSuccess) {
      // Redirige a la ruta de origen si existe, de lo contrario, redirige a /home
      const from = location.state?.from?.pathname || '/home';
      console.log(from)
      navigate(from);
    }
  }, [loginSuccess, navigate, location.state]);

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
