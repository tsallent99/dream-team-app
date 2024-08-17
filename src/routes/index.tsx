
import TournamentsView from "../pages/tournaments-view";
import { Navigate, useRoutes } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";

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
        element: <TournamentsView />
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