import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';
import { colors } from './colors';

const StyledPaperCard = styled(Paper)`
    margin-bottom: 50px;
    width: 100%;

    .avatar-container {
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    .candidate-name-container {
        text-align: center;

        .candidate-name-text {
            color: ${colors.black};
            font-size: 30px;
            font-weight: 700;
        }
    }

    .buttons-container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;

        .vote-button {
            margin-left: 10px;
        }
    }
`;

type VotingCardProps = {
    avatar: any;
    modalContent: any;
    name: string;
    onDialogOpen: () => void;
    onVotePress: () => void;
};

export default function VotingCard({
    avatar,
    modalContent,
    name,
    onDialogOpen,
    onVotePress,
}: VotingCardProps) {
    return (
        <StyledPaperCard elevation={5}>
            <div className="avatar-container">
                <Avatar src={avatar} sx={{ height: 200, width: 200 }} variant="circular" />
            </div>
            <div className="candidate-name-container">
                <p className="candidate-name-text">
                    {name}
                </p>
            </div>
            <div className="buttons-container">
                <Button color="primary" onClick={onDialogOpen} variant="outlined">
                    Details 
                </Button>
                <Button className="vote-button" color="primary" onClick={onVotePress} variant="contained">
                    Vote 
                </Button>
            </div>
        </StyledPaperCard> 
    );
}