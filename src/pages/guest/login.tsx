import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your email and password to login.</p>
            </div>
            <div>
                <form>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' name='email' required type='email' autoComplete='email' />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type='password' autoComplete='password' required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button className='mt-6 w-full' type='submit'>
                            Login
                        </Button>
                        <Link to='/register' className={buttonVariants({ variant: 'ghost' })}>
                            Register?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
