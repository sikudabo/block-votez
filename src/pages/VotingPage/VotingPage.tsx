import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { VotingPageContainer } from './styles/VotingPageContainer';
import { VotingCard } from '../../components';
import { useSetVote } from '../../hooks';
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
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [detailsCandidate, setDetailsCandidate] = useState("");
    const { clearVote, setVote } = useSetVote();

    function handleClickDialogOpen(name: string) {
        setDetailsCandidate(name)
        setDialogIsOpen(true);
    }   

    function handleClickDialogClose() {
        setDialogIsOpen(false);
        setDetailsCandidate("");
    }
 
    function onVotePress(name: string) {
        // setVote(name);
    }

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
                        onDialogOpen={() => handleClickDialogOpen(candidate.name)}
                        onVotePress={() => onVotePress(candidate.name)}
                        key={index}
                    />
                ))}
            </div>
            <Dialog 
                fullScreen 
                open={dialogIsOpen}
                onClose={handleClickDialogClose}
            >
                <div className="dialog-top-bar" style={{ paddingLeft: 20, paddingTop: 10 }}>
                    <IconButton 
                        aria-label="Close Button"
                        color="inherit"
                        edge="start"
                        onClick={handleClickDialogClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'center' }}>
                    <Avatar 
                        alt="candidate avatar"
                        aria-label="candidate avatar"
                        src={detailsCandidate === 'Ronny Morrell' ? RonnyMorrellPhoto : detailsCandidate === 'Jess Alumbaugh' ? JessAlumbaughPhoto : ''}
                        sx={{ height: 200, width: 200 }}
                        variant="circular"
                    />
                </div>
            </Dialog>
        </VotingPageContainer>
    );
}