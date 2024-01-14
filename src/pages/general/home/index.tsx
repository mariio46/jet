import type { User } from '@/types/user';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
    const { user }: { user: User } = useOutletContext();
    return (
        <>
            <h1 className='text-xl font-bold tracking-wider'>{user.name}</h1>
        </>
    );
}
