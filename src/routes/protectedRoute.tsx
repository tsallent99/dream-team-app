// ProtectedRoute.tsx
import React from "react";
import { CircularProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthGuard } from "../modules/application/guards/useAuthGuard";

interface ProtectedRouteProps {
	children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const { user, isLoading, isError } = useAuthGuard();
	const location = useLocation();
	if (isLoading) {
		return <CircularProgress />;
	}

	if (!user || isError) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
};

export default ProtectedRoute;
