import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold'>Register</h1>
                <p className='text-gray-500 dark:text-gray-400'>Enter your credentials to register.</p>
            </div>
            <div>
                <form>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' name='name' required type='name' autoComplete='name' />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' name='email' required type='email' autoComplete='email' />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' name='password' type='password' autoComplete='password' required />
                    </div>
                    <div className='mt-4 space-y-1'>
                        <Label htmlFor='password_confirmation'>Confirm Password</Label>
                        <Input
                            id='password_confirmation'
                            name='password_confirmation'
                            type='password_confirmation'
                            autoComplete='password_confirmation'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Button className='mt-6 w-full' type='submit'>
                            Register
                        </Button>
                        <Link to='/login' className={buttonVariants({ variant: 'ghost' })}>
                            Login?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
