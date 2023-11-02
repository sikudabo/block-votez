import create from 'zustand';
import { persist } from 'zustand/middleware';

export type Candidate = {
    candidate_name: string;
    votes: number;
    _id: {
        "$oid": string;
    };
};

type CandidatesStateType = {
    candidates: Array<Candidate> | [];
};

type CandidatesActionsType = {
    setCandidates: (candidates: Array<Candidate> | []) => void;
};

export const useCandidates = create(
    persist<CandidatesStateType & CandidatesActionsType>(
      (set) => ({
        candidates: [],
        setCandidates: (candidates: Array<Candidate> | []) => set(() => ({ candidates })),
      }),
      {
        name: 'candidates-data-storage',
      },
    ),
  );