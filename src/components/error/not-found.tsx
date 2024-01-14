import { Icon } from '@/components/tabler/icon';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '../ui/button';

export const NotFound = () => {
    return (
        <div className='flex min-h-screen items-center justify-center bg-background'>
            <main className='mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center'>
                    <p className='text-base font-bold leading-8 text-sky-600'>404</p>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                        This page does not exist
                    </h1>
                    <p className='mb-8 mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8'>
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <div className='flex items-center justify-center gap-4'>
                        <Link to='/' className={cn(buttonVariants({ variant: 'default' }))}>
                            Go back home
                        </Link>
                        <Link to='/' className={cn(buttonVariants({ variant: 'ghost' }))}>
                            Contact support <Icon name='IconArrowRight' className='ml-2 size-4 stroke-[1.5]' />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};
