export interface UseLoadingType {
    loading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

export interface UseDialogType {
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
    handleDialogAction: () => void;
    openAlertDialog: boolean;
    setOpenAlertDialog: (openAlertDialog: boolean) => void;
    handleALertDialogAction: () => void;
    handleAllDialogAction: () => void;
}
