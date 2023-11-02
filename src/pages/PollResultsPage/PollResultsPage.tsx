import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { useCandidates } from '../../hooks';
import { colors } from '../../components';
import RonnyMorrellPhoto from '../../static-images/ronny_morrell.jpeg';
import JessAlumbaughPhoto from '../../static-images/jess_alumbaugh.jpg';

const PollResultsPageContainer = styled.div`
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;

    .top-header-container {
        display: flex;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 40px;

        .top-header-text {
            color: ${colors.white};
            font-size: 30px;
            font-weight: 700;
        }
    }

    .results-cards-section {
        padding-left: 10px;
        padding-right: 10px;
        gap: 5;

        .results-card {
            border-radius: 5px;

            .results-card-name-section {
                display: flex;
                justify-content: center;
                padding-bottom: 10px;

                .results-card-name-text {
                    font-size: 20px;
                    font-weight: 900;
                }
            }

            .results-card-avatar-section {
                display: flex;
                justify-content: center;

                .avatar {
                    height: 200px;
                    width: 200px;
                }
            }

            .percentage-result-section {
                display: flex;
                justify-content: center; 

                .percentage-result-text {
                    color: ${colors.error};
                    font-size: 40px;
                    font-weight: 900;
                }
            }
        }

        .results-card:nth-child(odd) {
            margin-bottom: 40px;
        }
    }
`;

export default function PollResultsPage() {
    const { candidates } = useCandidates();
    let totalVotes = 0;
    candidates.map((candidate) => {
        totalVotes += candidate.votes;
    });
    console.log('The total votes are:', totalVotes);

    return (
        <PollResultsPageContainer>
            <div className="top-header-container">
                <p className="top-header-text">
                    Poll Results 
                </p>
            </div>
            <div className="results-cards-section">
                {candidates.map((candidate, index) => (
                    <Paper 
                        className="results-card"
                        elevation={10}
                    >
                        <div className="results-card-name-section">
                            <p className="results-card-name-text">
                                {candidate.candidate_name}
                            </p>
                        </div>
                        <div className="results-card-avatar-section">
                            <Avatar 
                                alt={`Mayoral Candidate ${candidate.candidate_name}`}
                                className="avatar"
                                src={candidate.candidate_name === 'Ronny Morrell' ? RonnyMorrellPhoto : JessAlumbaughPhoto}
                            />
                        </div>
                        <div className="percentage-result-section">
                            <p className="percentage-result-text">
                                {(candidate.votes / totalVotes * 100).toFixed(2)}%
                            </p>
                        </div>
                    </Paper>
                ))}
            </div>
        </PollResultsPageContainer>
    );
}