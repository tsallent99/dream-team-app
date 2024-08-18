import { Navigate, useRoutes } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import HomePage from "../pages/home";
import ProtectedRoute from "./protectedRoute";

export const routes = [
    {
        name: 'Login',
        path: '/',
        element: <Login />
    },
    {
        name: 'Register',
        path: '/register',
        element: <Register />
    },
    {
        name: 'Home',
        path: '/home',
        element: (
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          )
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }

]
export const AppRoutes = () => {
    const element = useRoutes(routes);
    return <>{element}</>
}