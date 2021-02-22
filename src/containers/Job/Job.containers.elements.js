import { Grid, FullWidthSection, Row } from "../../components";
import styled from "styled-components";

/* LAYOUT */
export const JobWrap = styled(Grid)`
    background-color: #F5F8FF;
    border-top: 1px solid rgba(216, 227, 254, 0.8);
    border-bottom: 1px solid rgba(216, 227, 254, 0.8);
`;

export const QualificationsList = styled.ul`
    text-align: left;
`;

export const QualificationsListItem = styled.li`
    text-align: left;
`;

export const ProgramsGrid = styled(Grid)`
    padding: 3rem 0;

    @media screen and (min-width: 1200px) {
        padding: 6rem 0;
    }
`;
export const Program = styled(Row)`
    text-align: left;
    margin-bottom: 3rem;
`;

export const ProgramContainer = styled(FullWidthSection)``;
export const ProgramTitle = styled.h3``;
export const ProgramText = styled.p``;