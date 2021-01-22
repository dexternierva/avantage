import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import PrimaryButton, { TertiaryButton } from "../Buttons";

export const Container = styled.div`
    margin: 0;
    background: #FFFFFF;
    border: 1px solid #D8E3FE;
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
        position: relative;
    }
`;

export const Image = styled.div`
    border-radius: 5px;
    
    @media screen and ( min-width: 991px ) {
        max-height: 320px;
        overflow: hidden;
        flex: 0 0 35%;
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

    @media screen and ( min-width: 991px) {
        margin-top: 0;
    }
`;

export const Text = styled.p``;

export const Cta = styled.div`
    ${TertiaryButton} {
        margin-left: .125rem;
    }

    @media screen and ( min-width: 991px ) {
        position: ${props => props.fullCard ? 'absolute' : 'static'};
        bottom: 0;
    }
`;

