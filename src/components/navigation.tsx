import ReactLogo from '@/assets/react.svg';
import { NavLink } from '@/components/navigation-link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/services/providers/theme-provider';
import { Link } from 'react-router-dom';
import { Icon } from './tabler/icon';

export const Navigation = () => {
    return (
        <header className='relative z-[50] hidden md:block'>
            <div className='fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2'>
                <nav className='border-b border-border/80 bg-transparent px-6 py-5 backdrop-blur-sm'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-8'>
                            <Link to='/'>
                                <img
                                    src={ReactLogo}
                                    className='w-8 animate-spin [animation-duration:5s]'
                                    alt='React logo'
                                />
                            </Link>
                            <div className='flex items-center gap-x-4'>
                                <NavLink url='/' value={'home'} />
                                <NavLink url='/about' value={'about'} />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <ThemeToggle />
                            <Separator orientation='vertical' className='mx-1 h-10 w-[0.5px] shrink-0 bg-border' />
                            <Link
                                to={'/login'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Login
                            </Link>
                            <Link
                                to={'/register'}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'h-[2.7rem]',
                                })}>
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = (): void => (theme === 'light' ? setTheme('dark') : setTheme('light'));
    return (
        <Button variant={'ghost'} size={'icon'} className='h-[2.6rem] w-[2.6rem] rounded-lg' onClick={changeTheme}>
            <Icon name={theme === 'light' ? 'IconSunLow' : 'IconMoon'} />
        </Button>
    );
};
