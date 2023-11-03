import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useCandidates, useIsFormLoading, useSetVote } from '../../hooks';

const DemographicsFormContainer = styled.div`
    .top-header {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        padding-top: 30px;

        .top-header-text {
            font-size: 30px;
            font-weight: 900;
        }
    }

    .input-container {
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .send-button-container {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export default function DemographicsForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [selectedGender, setSelectedGender] = useState("Female");
    const [selectedIncome, setSelectedIncome] = useState("$0-$30,000")
    const [selectedRace, setSelectedRace] = useState("Black or African American");
    const genders = ["Female", "Male"];
    const races = ["American Indiana or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"];
    const incomes = ["$0-$30,000", "$30,001-$50,000", "$50,001-$80,000", "$80,001-$100,000", "$100,001+"];
    const { setCandidates } = useCandidates();
    const { hasVoted, setHasVoted, votedFor } = useSetVote();
    const { setIsLoading } = useIsFormLoading();
    const navigate = useNavigate();

    function handleFirstNameChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setFirstName(value);
    }

    function handleLastNameChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setLastName(value);
    }

    function handleEmailChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setEmail(value);
    }

    function handleAgeChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setAge(value as unknown as number);
    }

    function handleSelectedGenderChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSelectedGender(value);
    }

    function handleSelectedRaceChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSelectedRace(value);
    }

    function handleSelectedIncomeChange(e: { target: { value: string }}) {
        const { value } = e.target;
        setSelectedIncome(value);
    }

    const checkValidEmail = (email: string) => {
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            return false;
        }
    
        return true;
    }

    async function sendVoterData() {
        /* if (hasVoted) {
            alert('You have already voted on this device!');
            return;
        } */

        if (!firstName.trim()) {
            alert('You must enter a first name!');
            return;
        }

        if (!lastName.trim()) {
            alert('You must enter a last name!');
            return;
        }

        if (!checkValidEmail(email)) {
            alert('You must enter a valid email!');
            return; 
        }

        if (!age || age <= 18) {
            alert('You must be at least 18 to vote! Please enter a valid age.');
            return;
        }
        setIsLoading(true);

        return await axios({
            url: 'http://127.0.0.1:9000/cast-ballot',
            method: 'POST',
            data: {
                age,
                email,
                "first_name": firstName,
                "gender": selectedGender,
                "last_name": lastName,
                "race": selectedRace,
                "voted_for": votedFor,
                "income": selectedIncome,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            const { data } = response;
            setCandidates(data);
            setIsLoading(false);
            setHasVoted();
            navigate('/poll-results');
        }).catch(err => {
            setIsLoading(false);
            alert('There was an error submitting your vote. Please try again!');
        });
    }

    return (
        <DemographicsFormContainer>
            <div className="top-header">
                <p className="top-header-text">
                    Demographics Form 
                </p>
            </div>
            <div className="input-container">
                <TextField
                    aria-label="First Name"
                    color="primary"
                    helperText="Required"
                    label="First Name"
                    onChange={handleFirstNameChange}
                    placeholder="First Name"
                    variant="outlined"
                    fullWidth
                    required
                />
            </div>
            <div className="input-container">
                <TextField
                    aria-label="Last Name"
                    color="primary"
                    helperText="Required"
                    label="Last Name"
                    onChange={handleLastNameChange}
                    placeholder="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                />
            </div>
            <div className="input-container">
                <TextField
                    aria-label="Voter Email"
                    color="primary"
                    helperText="Required"
                    label="Email"
                    onChange={handleEmailChange}
                    placeholder="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                />
            </div>
            <div className="input-container">
                <TextField
                    aria-label="Voter Age"
                    color="primary"
                    helperText="Required"
                    label="Age"
                    onChange={handleAgeChange}
                    placeholder="Age"
                    type="number"
                    value={age}
                    variant="outlined"
                    fullWidth
                    required
                />
            </div>
            <div className="input-container">
                <Select
                    color="primary"
                    defaultValue={genders[0]} 
                    onChange={handleSelectedGenderChange}
                    value={selectedGender}   
                    fullWidth       
                >
                    {genders.map((gender, index) => (
                        <MenuItem key={index} value={gender}>
                            {gender}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    Gender {`(Required)`}
                </FormHelperText>
            </div>
            <div className="input-container">
                <Select
                    color="primary"
                    defaultValue={selectedRace} 
                    onChange={handleSelectedRaceChange}
                    value={selectedRace}   
                    fullWidth       
                >
                    {races.map((race, index) => (
                        <MenuItem key={index} value={race}>
                            {race}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    Race {`(Required)`}
                </FormHelperText>
            </div>
            <div className="input-container">
                <Select
                    color="primary"
                    defaultValue={selectedIncome} 
                    onChange={handleSelectedIncomeChange}
                    value={selectedIncome}   
                    fullWidth       
                >
                    {incomes.map((income, index) => (
                        <MenuItem key={index} value={income}>
                            {income}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>
                    Income {`(Required)`}
                </FormHelperText>
            </div>
            <div className="send-button-container">
                <Button 
                    color="primary"
                    onClick={sendVoterData}
                    variant="contained"
                    fullWidth 
                >
                    Send 
                </Button>
            </div>
        </DemographicsFormContainer>
    );
}