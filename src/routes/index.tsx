import { Navigate, useRoutes } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import HomePage from "../pages/home";

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
        element: <HomePage />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }

]
export const AppRoutes = () => {
    const element = useRoutes(routes);
    return <>{element}</>
}