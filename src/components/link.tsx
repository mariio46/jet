import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';
import { Link as ReactRouterLink, type LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { buttonVariants } from './ui/button';

interface LinkProps extends ReactRouterLinkProps, VariantProps<typeof buttonVariants> {}

export const Link = ({ className, variant, size, ...props }: LinkProps) => {
    return <ReactRouterLink className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};
