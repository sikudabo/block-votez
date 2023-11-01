import React, { useState } from 'react';
import styled from '@emotion/styled';
import { VotingPageContainer } from './styles/VotingPageContainer';
import { VotingCard } from '../../components';
import RonnyMorrellPhoto from '../../static-images/ronny_morrell.jpeg';
import JessAlumbaughPhoto from '../../static-images/jess_alumbaugh.jpg';

const candidates = [
    {
        name: "Ronny Morrell",
        avatar: RonnyMorrellPhoto,
        modalContent: "I am running for mayor",
        onVotePress: () => {},
    },
    {
        name: "Jess Alumbaugh",
        avatar: JessAlumbaughPhoto,
        modalContent: "I am running for mayor",
        onVotePress: () => {},
    },
]



export default function VotingPage() {
    return (
        <VotingPageContainer>
            <div className="top-page-header">
                <h1 className="header-text">
                    marion mayoral election poll 
                </h1>
            </div>
            <div className="poll-explanation-container">
                <p className="poll-explanation-text">
                    Who will you be voting for in 2023? Please let us know by 
                    taking our poll for the 2023 Marion Mayoral Election. Please remember 
                    that the last day to vote in the real election is November 7th!
                </p>
            </div>
            <div className="card-container-section">
                {candidates.map((candidate, index) => (
                    <VotingCard 
                        avatar={candidate.avatar}
                        name={candidate.name}
                        modalContent={candidate.modalContent}
                        onVotePress={candidate.onVotePress}
                        key={index}
                    />
                ))}
            </div>
        </VotingPageContainer>
    );
}