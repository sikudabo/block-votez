import React from 'react';
import styled from '@emotion/styled';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { VotingPage } from './pages';
import { colors } from './components';

const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
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
  return (
    <ThemeProvider theme={theme}>
      <BlockVotezAppContainer>
        <Router>
          <Routes>
            <Route element={<VotingPage />} path="/" />
          </Routes>
        </Router>
      </BlockVotezAppContainer>
    </ThemeProvider>
  );
}

export default App;
