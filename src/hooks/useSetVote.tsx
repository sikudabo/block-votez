import create from 'zustand';
import { persist } from 'zustand/middleware';

type VoteStateType = {
    hasVoted: boolean;
    votedFor?: string;
};

type VoteActionsType = {
    clearVote: () => void;
    setHasVoted: () => void;
    setVote: (votedFor: string) => void;
};

export const useSetVote = create(
    persist<VoteStateType & VoteActionsType>(
      (set) => ({
        hasVoted: false,
        votedFor: "",
        clearVote: () => set(() => ({ votedFor: "", hasVoted: false })),
        setHasVoted: () => set(() => ({ hasVoted: true })),
        setVote: (votedFor: string) => set(() => ({ votedFor })),
      }),
      {
        name: 'vote-data-storage',
      },
    ),
  );