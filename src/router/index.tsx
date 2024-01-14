import { NotFound } from '@/components/error/not-found';
import AppLayout from '@/components/layouts/app-layout';
import AuthLayout from '@/components/layouts/auth-layout';
import GuestLayout from '@/components/layouts/guest-layout';
import Dashboard from '@/pages/auth/dashboard';
import About from '@/pages/general/about';
import Home from '@/pages/general/home';
import Login from '@/pages/guest/login';
import Register from '@/pages/guest/register';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
