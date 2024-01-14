import { type PropsWithChildren } from 'react';
import { NavLink as Link } from 'react-router-dom';

interface NavLinkProps extends PropsWithChildren {
    url: string;
    value?: string;
}

export const NavLink = ({ url, value, children, ...props }: NavLinkProps) => {
    return (
        <Link
            to={url}
            {...props}
            className={({ isActive }) =>
                [
                    isActive
                        ? 'font-semibold capitalize text-foreground'
                        : 'font-normal capitalize text-muted-foreground',
                ].join('capitalize text-muted-foreground hover:text-foreground')
            }>
            {value ?? children}
        </Link>
    );
};
