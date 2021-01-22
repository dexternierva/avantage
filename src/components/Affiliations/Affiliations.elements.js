import styled from "styled-components";
import { Grid } from "../Layout";
import { defaultTheme } from "../../utilities";

export const Container = styled(Grid)`
    border-bottom: 1px solid #D8E3FE;
    padding: .5rem 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Header = styled.section`
    text-align: center;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    @media screen and (min-width: 1121px) {
        text-align: left;
    }
`;

export const Title = styled.h4`
    margin: 0 0 0.25rem 0;
    color: ${defaultTheme.primaryColor};
    text-align: left;
`;

export const Text = styled.p`
    margin: 0;
    font-size: 0.875em;
    text-align: left;
`;

export const Accreditation = styled.div`
    img {
        width: 50px;
        margin-right: 4rem;
    }

    @media screen and (min-width: 991px) {
        img { margin-right: 2rem }
    }
`;