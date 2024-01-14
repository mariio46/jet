import { cn } from '@/lib/utils';
import { Spinner } from './spinner';

export const Loading = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('flex min-h-screen items-center justify-center', className)} {...props}>
            <Spinner />
        </div>
    );
};
