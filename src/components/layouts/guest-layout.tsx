import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center'>
            <Outlet />
        </main>
    );
}
