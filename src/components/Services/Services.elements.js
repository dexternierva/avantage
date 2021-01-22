import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

export const ServicesContainer = styled(FullWidthSection)`
    margin-top: 5rem;
`

export const Content = styled(Row)`
    display: none;
`;

export const ProgressBar = styled(Row)`
    
`;

export const Steps = styled.div`
    position: relative;
    margin-left: 6rem;

    &::after {
        content: '';
        width: 4px;
        height: 100%;
        background-color: #c9c9c9;
        position: absolute;
        left: -4px;
        top: 0;
    }
`;

export const Step = styled.div`
    position: relative;
    background: ${defaultTheme.lightestColor};
    padding-top: 1.5rem;

    &::after {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #c9c9c9;
        background-color: #FFFFFF;
        position: absolute;
        left: -12px;
        top: 1.5rem;
        z-index: 3;
    }
`;

export const StepTitle = styled.h4`
    margin: 0 1.5rem 0 1.5rem;
    padding-bottom: 1rem;
`;

export const StepText = styled.div`
    margin: 0 1.5rem 0 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #c9c9c9;
`;

export const StepNumber = styled.span`
    position: absolute;
    left: -5rem;
    top: 1.375rem;
`;

export const StepBullet = styled.div`
    position: relative;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    border: 2px solid ${defaultTheme.primaryColor};
    cursor: pointer;

    // &::after {
    //     content: '';
    //     position: absolute;
    //     height: 2px;
    //     width: 9rem;
    //     left: 1.25rem;
    //     bottom: 6px;
    //     background-color: ${defaultTheme.primaryColor};
    // }
`;

