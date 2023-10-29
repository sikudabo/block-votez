import styled from '@emotion/styled';
import { colors } from '../../../components';

export const VotingPageContainer = styled.div`
    background-color: ${colors.primary}
    height: 100%;
    width: 100%;

    p {
        color: ${colors.white};
        font-size: 32px;
        font-weight: 500;
    }

    .top-page-header {
        text-align: center;

        .header-text {
            font-weight: 900;
            font-size: 32
            text-transform: capitalize;
        }
    }
`;