import { Navigate, useRoutes } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import HomePage from "../pages/home";
import ProtectedRoute from "./protectedRoute";
import CreateTournamentFeaturePage from "../pages/create-tournament/create-tournament-feature-page";

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
        name: 'Create Tournament',
        path: '/create-tournament',
        element: (
            <ProtectedRoute>
              <CreateTournamentFeaturePage />
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