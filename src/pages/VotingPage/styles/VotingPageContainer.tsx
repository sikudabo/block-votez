import styled from '@emotion/styled';
import { colors } from '../../../components';

export const VotingPageContainer = styled.div`
    background-color: ${colors.primary};
    height: 100vh;
    padding-top: 20px;
    width: 100vw;

    p {
        color: ${colors.white};
        font-size: 20px;
        font-weight: 500;
    }

    .top-page-header {
        text-align: center;

        .header-text {
            color: ${colors.white};
            font-weight: 900;
            font-size: 40px;
            text-transform: capitalize;
        }
    }

    .poll-explanation-container {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 1px;
        text-align: left;

        .poll-explanation-text {
            font-size: 30px;
            font-weight: 300;
        }
    }

    .card-container-section {
        background-color: ${colors.primary};
        padding-left: 20px;
        padding-right: 20px;
    }
`;