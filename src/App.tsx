import React from 'react';
import styled from '@emotion/styled';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { DemographicsForm, PollResultsPage, VotingPage } from './pages';
import { colors } from './components';
import { useIsFormLoading } from './hooks';

const theme: ThemeOptions = createTheme({
  palette: {
    error: {
      main: colors.error,
    },
    info: {
      main: colors.hotPink,
    },
    primary: {
      main: colors.primary,
      light: colors.primary,
      dark: colors.lightGrey,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.secondary,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
  },
  typography: {
    fontFamily: 'Varela Round',
  },
});

const BlockVotezAppContainer = styled.div`
  padding: 0;
  font-family: 'Varela Round';
  margin-right: 0px;
  margin-left: 0px;
`;

function App() {
  const { isLoading, setIsLoading } = useIsFormLoading();

  function handleBackdropClose() {
    setIsLoading(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <BlockVotezAppContainer>
        <Backdrop
          sx={{ color: colors.hotPink, zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
          onClick={handleBackdropClose}
        >
          <CircularProgress color="primary" />
        </Backdrop>
        <Router>
          <Routes>
            <Route element={<VotingPage />} path="/" />
            <Route element={<DemographicsForm />} path="demographics-form" />
            <Route element={<PollResultsPage />} path="poll-results" />
          </Routes>
        </Router>
      </BlockVotezAppContainer>
    </ThemeProvider>
  );
}

export default App;
