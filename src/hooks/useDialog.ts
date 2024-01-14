import type { UseDialogType } from '@/types/hooks';
import { useState } from 'react';

export const useDialog = (): UseDialogType => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false);

    const handleDialogAction = (): void => setOpenDialog(!openDialog);

    const handleALertDialogAction = (): void => setOpenAlertDialog(!openAlertDialog);

    const handleAllDialogAction = (): void => {
        handleDialogAction();
        handleALertDialogAction();
    };

    return {
        openDialog,
        setOpenDialog,
        handleDialogAction,
        openAlertDialog,
        setOpenAlertDialog,
        handleALertDialogAction,
        handleAllDialogAction,
    };
};
