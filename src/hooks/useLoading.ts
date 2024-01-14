import type { UseLoadingType } from '@/types/hooks';
import { useState } from 'react';

export const useLoading = (): UseLoadingType => {
    const [loading, setLoading] = useState<boolean>(false);

    const startLoading = (): void => setLoading(true);

    const stopLoading = (): void => setLoading(false);

    return { loading, startLoading, stopLoading };
};
