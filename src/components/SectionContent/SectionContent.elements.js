import styled from "styled-components";
import { FullWidthSection, Row } from "../Layout";

export const Container = styled(FullWidthSection)`
    padding: 3rem 0 ${props => props.noPaddingBottom ? '1.5rem' : '3rem'} 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0 ${props => props.noPaddingBottom ? '3rem' : '6rem'} 0;
    }
`;

export const ContainerRow = styled(Row)``;

export const PreTitle = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    padding-top: 1rem;
    position: relative;
    font-weight: 700;

    &::before {
        content: '';
        //width: 8rem;
        width: 100%;
        border-top: 1px solid #5B5B5D;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const Title = styled.h3`
    margin-top: 0;
    // font-style: italic;
    font-weight: 600;
`;

export const Text = styled.div``;