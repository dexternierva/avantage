import styled from "styled-components";
import { FullWidthSection, Row } from "../Layout";
import { defaultTheme } from "../../utilities";

export const Container = styled(FullWidthSection)`
    padding: 3.5rem 0;

    > :first-child {
        margin-bottom: 3rem;
    }

    @media screen and (min-width: 991px) {
        > :first-child {
            margin-bottom: 6rem;
        }
    }
`;

export const Content = styled(Row)`
    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const MainContent = styled.div`
    text-align: center;

    @media screen and (min-width: 991px) {
        text-align: left;
        flex: 0 0 45%
    }
`;

export const PreTitle = styled.p`
    font-size: 0.75em;
    color: ${defaultTheme.primaryColor};
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h3`
    margin-top: 0;
`;

export const Text = styled.p`
    // margin-bottom: 2rem;
`;

export const Image = styled.div`
    display: none;

    @media screen and (min-width: 991px) {
        display: block;
        flex: 0 0 45%;
    }
`;