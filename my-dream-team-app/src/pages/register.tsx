import { Container, Typography } from "@mui/material";
import { AuthForm } from "../widgets/authForm";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useRegister } from "../modules/application/auth/useRegister";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const { mutate: register, isPending: registerLoading, isSuccess: registerSuccess, error: registerError } = useRegister();
  
    const handleRegister = async ({ username, email, password }: { username: string, email: string, password: string }) => {
      register({ username, email, password });
    };
    useEffect(() => {
        if (registerSuccess) {
            navigate("/login");
        }
      }, [registerSuccess, navigate]);
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          Register
        </Typography>
        <AuthForm onSubmit={handleRegister} isRegister={true} error={registerError} loading={registerLoading} />
      </Container>
    );
  };
  
  export default Register;