import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
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
    const { hasVoted, setVote } = useSetVote();
    const navigate = useNavigate();

    const morrellMarkup = (
        <div>
            <p>
                The future is NOW, and Marion needs a leader who has vision, new ideas, fresh energy, and dares to move forward.
            </p>
            <p>
                Marion has been on a consistent 15-year decline. A few contributors to this decline are major manufacturing jobs relocating, mass exodus of population, and the lack of employment opportunities that are attractive to younger generations. The decrease in these three areas have resulted in Marion having a lower than desirable operating budget which has prevented the ability to expend funds on quality of life and improvements. 
            </p>
            <p>
                I am a minority Republican with experience in launching and running businesses, uniting the community around a common cause and growing organizations. These experiences have taught me to be innovative, which is the very skill needed to move our city forward.
                As a lifelong Marion resident, I have been taught to always make Marion first. I am running on the backs of many generations that have dedicated their lives to serving our community. As Mayor I will lead our community into the future, not bound by the past but reaching forward to new upward marks. 
            </p>
            <p>
                Entrepreneurship, Trades, and Technology are the three pillars of focus. We will continue to develop entrepreneurs through the YBOA (Young Business Owners Association), increase awareness and access trade education in Marion, and open a coding bootcamp. Through these means, we will enhance small businesses, encourage education 'towards lucrative careers, and stimulate economic growth.
            </p>
            <p>
                Clean City Marion 2.0 is a continuation of the effort in the 90’s to beautify Marion. Clean City Marion 2.0 will host city wide cleanup days once a month from May to October. The city will work with the neighborhood associations to provide dumpsters to assist in the effort. Additionally, the administration will lead the charge at each event to encourage participation.
            </p>
            <p>
                Marion Reads will aim to improve Marion’s literacy rate by starting a program that partners with Marion Community Schools and other selected organizations. This program will encourage the city to volunteer time to read to children at selected organizations.
            </p>
            <p>
                Ronny is a married father of two. <a href="https://www.morrellformayor.com/vision" rel="external">Learn more about his platform here.</a>
            </p>
        </div>
    );

    const alumbaughMarkup = (
        <div>
            <p>
                May­or Jess Alum­baugh is a life­long res­i­dent of Mar­i­on, Indiana.
            </p>
            <p>
                He attend­ed Mar­i­on Com­mu­ni­ty Schools and grad­u­at­ed from Mar­i­on High School in 1977. After grad­u­at­ing, he spent ten years work­ing pro­duc­tion at Mar­i­on RCA/​Thomson Elec­tron­ics, leav­ing for a career in sales. From 1987 to 2001, May­or Alum­baugh was employed as a sales pro­fes­sion­al, work­ing for sev­er­al local busi­ness­es. In 2001, he took a posi­tion with Indi­ana Wes­leyan Uni­ver­si­ty as a Devel­op­ment Offi­cer. Dur­ing that time, he achieved an Associate’s Degree from Indi­ana Wes­leyan Uni­ver­si­ty. After twelve years with IWU, May­or Alum­baugh worked for six months rais­ing mon­ey for the Cross­ing Edu­ca­tion Cen­ter. Since Jan­u­ary 1st, 2016, he has been serv­ing as the May­or of the City of Mar­i­on, Indiana.
            </p>
            <p>
                Jess has ensured that Marion police and firefighters have the latest and newest technologies to keep the community 
                safe and secure. Mayor Alumbaugh cares about equipping community safety personnel with the equipment they need to 
                do their jobs and keep the community safe. Mayor Alumbaugh is focused on making Marion a prime location to live
                and strives to bring jobs and businesses to the community. Alumbaugh has shown the ability to be responsibile with 
                the finances of the community, enable downtown growth, is accountable and honest about what is happening to funds, and 
                has negotiated a $491 million investment from General Motors. Visit <a href="https://www.facebook.com/jessalumbaugh1959">his Facebook page to learn more!</a>
            </p>
            <p>
                May­or Alum­baugh has four chil­dren and sev­er­al grandchildren.
            </p>
        </div>
    );

    function handleClickDialogOpen(name: string) {
        setDetailsCandidate(name)
        setDialogIsOpen(true);
    }   

    function handleClickDialogClose() {
        setDialogIsOpen(false);
        setDetailsCandidate("");
    }
 
    function onVotePress(name: string) {
        if (hasVoted) {
            alert('You have already voted. You cannot vote again!');
            return;
        }
        navigate('demographics-form');
        setVote(name);
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
                <div style={{ display: 'flex', marginTop: 20, justifyContent: 'center', paddingBottom: 30 }}>
                    <Avatar 
                        alt="candidate avatar"
                        aria-label="candidate avatar"
                        src={detailsCandidate === 'Ronny Morrell' ? RonnyMorrellPhoto : detailsCandidate === 'Jess Alumbaugh' ? JessAlumbaughPhoto : ''}
                        sx={{ height: 200, width: 200 }}
                        variant="circular"
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ fontSize: 30, fontWeight: 700 }}>
                        {detailsCandidate}
                    </p>
                    <br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ fontSize: 30, fontWeight: 700}}>
                        {detailsCandidate === 'Ronny Morrell' ? 'Republican' : 'Democrat'}
                    </p>
                </div>
                <div style={{ maxHeight: 300, overflow: 'scroll', marginLeft: 20, marginRight: 20 }}>
                    {detailsCandidate === 'Ronny Morrell' ? morrellMarkup : alumbaughMarkup}
                </div>
            </Dialog>
        </VotingPageContainer>
    );
}