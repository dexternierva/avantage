import styled from 'styled-components';
import { defaultTheme, typeScale, primaryFont } from "../utilities";
import { applyStyleModifiers } from "styled-components-modifiers";
import { Link } from 'react-router-dom';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.small};
        padding: 8px 16px;
        font-weight: 500;
    `,
    large: () => `
        font-size: ${typeScale.body};
        padding: 16px 24px;
    `,
    fullWidth: () => `
        width: 100%;
    `
}

const Button = styled.button`
    position: relative;
    padding: 16px 24px;
    font-size: 1em;
    border-radius: 2px;
    color: #EBEBEB;
    font-family: ${primaryFont};
    font-weight: 600;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.2) 50%);
        background-size: 210% 100%;
        background-position: right bottom;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom:0;
        right:0;
        left: 0;
        border-radius: 2px;
        transition: all 0.5s ease-in-out;
    }

    &:hover:before {
        background-position: left bottom;
    }

    &:focus {
        outline: 2px solid ${defaultTheme.tertiaryColor};
        outline-offset: 2px;
    }
`;

const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    box-shadow: 0px 0px 8px rgba(16, 142, 64, 0.7);
    border: 1px solid #10853D;

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.secondaryColor};
    box-shadow: 0px 0px 8px rgba(4,124,199, 0.6);
    border: 1px solid #056CAC;

    &:active {
        background-color: ${defaultTheme.secondaryActiveColor};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(94,209,117, 0.2);
    border: 1px solid #41B332;
    color: ${defaultTheme.primaryColor};

    &:before {
        content: '';
        display: block;
        background: linear-gradient(to left, rgba(94, 209, 117, 0) 50%, rgba(94, 209, 117, 0.2) 50%);
        background-size: 210% 100%;
        background-position: right bottom;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom:0;
        right:0;
        left: 0;
        border-radius: 2px;
        transition: all 0.5s ease-in-out;
    }

    &:active {
        background-color: ${defaultTheme.primaryActiveColor};
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const LinkButton = styled(Link)`
    border: 0;
    text-shadow: 1px 1px 1px rgba(94,209,117, 0.4);
    color: ${defaultTheme.primaryColor};
    padding: 0;
    margin: 1rem 0;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;