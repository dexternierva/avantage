import styled from "styled-components";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

export const Container = styled(FullWidthSection)``;

export const Primary = styled(Row)`
    background-color: rgba(4, 124, 199, 0.7);

    &:hover {
        background-color: rgba(4, 124, 199, 1.0);
    }
`;

export const ContentHeader = styled.h3`
    margin-top: 0;
    margin-bottom: 0.5rem;
`;

export const PrimaryContent = styled.div`
    padding: 2rem 3rem 2rem 0;
    text-align: right;
    color: #FFFFFF; 
    cursor: pointer;   

    ${ContentHeader} {
        color: #FFFFFF;
    }
`;

export const Secondary = styled(Row)`
    background-color: rgba(233, 239, 255, 0.8);

    &:hover {
        background-color: rgba(217, 223, 239, 1.0);
    }
`;

export const SecondaryContent = styled.div`
    padding: 2rem 0 2rem 3rem;
    color: #5B5B5D;
    cursor: pointer;
`;

export const ContentIcon = styled.div`
    font-size: 4em;
`;

export const ContentText = styled.p`
    margin-top: 0;
`;