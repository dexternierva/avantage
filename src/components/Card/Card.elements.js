import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import { TertiaryButton } from "../Buttons";

export const Container = styled.div`
    margin: 0;
    background: #FFFFFF;
    border: 1px solid #D8E3FE;
    box-shadow: 0 2px 6px rgba(216, 227, 254, 0.6);
`;

export const Content = styled.div`
    @media screen and ( min-width: 991px) {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    @media screen and ( min-width: 1200px ) {
        padding: 2rem;
    }
`;

export const MainContent = styled.div`
    padding: 1rem;

    @media screen and ( min-width: 768px ) {
        padding: 1.5rem;
    }

    @media screen and ( min-width: 991px ) {
        padding: 0;
        flex: 0 0 ${props => props.fullCard ? '60%' : '100%'};
    }

    img {
        max-height: 220px;
    }
`;

export const Image = styled.div`
    @media screen and ( min-width: 991px ) {
        flex: 0 0 35%;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
`;

export const PreTitle = styled.p`
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    font-size: 0.875em;
    font-weight: 500;
    background: #ffffff;
    color: ${defaultTheme.secondaryColor};
    margin-bottom: 2rem;

    &::before {
        content: "";
        flex: 1 1;
        border-bottom: 1px solid ${defaultTheme.lightestColor};
        margin: auto;
    }

    &::after {
        content: "";
        flex: 1 1;
        border-bottom: 1px solid ${defaultTheme.lightestColor};
        margin: auto;
    }

    &::before {
        margin-right: 8px
    }

    &::after {
        margin-left: 8px
    }
`;

export const Title = styled.h3`
    font-size: ${ props => props.fullCard ? '1.375em' : '1.125em' };
    line-height: ${ props => props.fullCard ? '1.13636364' : '1.11111111' };
    margin-top: ${props => props.fullCard ? '0em' : '2em' }

    @media screen and ( min-width: 991px) {
        margin-top: 0;
    }
`;

export const Text = styled.div``;

export const Cta = styled.div`
    margin-top: 2rem;

    ${TertiaryButton} {
        margin-left: .125rem;
    }
`;

export const Info = styled.div`
    padding: 0 1rem;
    border-top: 1px solid rgba(216, 227, 254, 0.5);
    font-family: 'Libre Baskerville', serif;
    font-size: 0.75em;
    text-align: center;
    color: ${defaultTheme.helperTextColor};

    @media screen and ( min-width: 1200px ) {
        padding: 0 2rem;
    }
`;

