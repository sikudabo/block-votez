import create from 'zustand';
import { persist } from 'zustand/middleware';

type VoteStateType = {
    hasVoted: boolean;
    votedFor?: string;
};

type VoteActionsType = {
    clearVote: () => void;
    setVote: (votedFor: string) => void;
};

export const useSetVote = create(
    persist<VoteStateType & VoteActionsType>(
      (set) => ({
        hasVoted: false,
        votedFor: "",
        clearVote: () => set(() => ({ votedFor: "", hasVoted: false })),
        setVote: (votedFor: string) => set(() => ({ votedFor, hasVoted: true })),
      }),
      {
        name: 'vote-data-storage',
      },
    ),
  );