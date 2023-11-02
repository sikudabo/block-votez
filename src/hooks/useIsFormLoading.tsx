import { create } from 'zustand';

type ShowBackdropStateType = {
    isLoading: boolean;
}

type ShowBackdropActionsType = {
    setIsLoading: (isLoading: boolean) => void;
}

export const useIsFormLoading = create<ShowBackdropActionsType & ShowBackdropStateType>()((set) => ({
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
}));