import { User } from '@/types/user';

export const useAuth = (): { user: User } => {
    const user = {
        name: 'Mario',
        username: 'mario46_',
        email: 'mariomad2296@gmail.com',
        token: 'h9sS6fuOxX6YROHw9UbPUln72CWs9NSWiVdn8TiT/Gw=',
    } satisfies User;

    return { user };
};
