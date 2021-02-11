import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import styled from "styled-components";
import { defaultTheme } from "../../utilities";

/* LAYOUT */
export const SolutionsGrid = styled(Grid)`
    background-image: linear-gradient( to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4) ), url(images/inquiry-hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
`;
export const SolutionsFullWidthSection = styled(FullWidthSection)``;

/* SECTION HEADER */
export const SolutionsSectionHeader = styled(Row)`
    padding: 3.5rem 0;    
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid #FFFFFF;
    text-align: center;

    @media screen and ( min-width: 991px ) {
        padding: 5rem 0 1rem 0;
    }
`;
export const SolutionsSectionHeaderPreTitle = styled.p`
    margin: 0 0 .5rem 0;
    font-size: 0.75em;
    color: ${defaultTheme.helperTextColor};
    text-transform: uppercase;
`;
export const SolutionsSectionHeaderTitle = styled.h2`
    margin-top: 0;
    color: ${defaultTheme.primaryColor};
`;

/* MAIN CONTENT */
export const SolutionsMainContent = styled(Row)`
    margin-bottom: 4rem;
    text-align: center;

    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        text-align: left;
    }
`;
export const Title = styled.h4`
    margin-top: 0;
    color: ${defaultTheme.primaryColor};
`;
export const Text = styled.p`
    margin-bottom: 2rem;
    text-align: left;
`;
/* SUBCONTENT */
export const SolutionsSubContent = styled(Row)``;
export const SolutionsSubContentSourcing = styled.div`
    margin-bottom: 1px;
    padding: 3rem 2rem;
    background-color: rgba(65, 179, 50, 0.8); 
    color: #EBEBEB;
    cursor: pointer;

    &:hover {
        background-color: rgba(65, 179, 50, 1.0); 
    }
`;
export const SubTitle = styled.h4`
    margin-top: 0;
    color: #FFFFFF;
`;
export const SubText = styled.div``;
export const SolutionsSubContentManaged = styled.div`
    padding: 3rem 2rem;
    background-color: rgba(65, 179, 50, 0.8);
    color: #EBEBEB;
    cursor: pointer;

    &:hover {
        background-color: rgba(65, 179, 50, 1.0); 
    }
`;