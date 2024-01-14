import { useAuth } from '@/hooks/userAuth';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/components/navigation';

export default function AppLayout() {
    const { user } = useAuth();
    return (
        <>
            <Navigation />
            <div className='mt-[5rem]' />
            <main className='min-h-[1000rem]'>
                <Outlet context={{ user }} />
            </main>
        </>
    );
}
