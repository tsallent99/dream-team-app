import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, CircularProgress, Alert } from "@mui/material";

interface AuthFormProps {
  onSubmit: (data: any) => void;
  isRegister: boolean;
  error: any;
  loading: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isRegister, error, loading }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      onSubmit({ username, email, password });
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {isRegister && (
        <TextField
          name="username"
          label="Username"
          value={username}
          onChange={handleChange}
          fullWidth
        />
      )}
      <TextField
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : isRegister ? "Register" : "Login"}
      </Button>
      {error && <Alert severity="error">{error.message}</Alert>}
    </form>
  );
};
