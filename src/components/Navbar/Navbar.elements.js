import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import { Link } from 'react-router-dom';

/* LAYOUT COMPONENTS */
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

export const NavLink = styled(Link)`
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-weight: 500;
    font-size: 1.25em;
    color: ${defaultTheme.primaryColor};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${defaultTheme.primaryLightColor};
    }

    &:active {
        color: ${defaultTheme.primaryLightColor};
    }

    @media screen and (min-width: 1121px) {
        font-size: 1em;
    }
`;

export const Nav = styled(FullWidthSection)`
    background: #FFFFFF;
    border-bottom: 1px solid rgba(216, 227, 254, 0.4);;
`;

export const Logo = styled(Row)`
    margin: 0;

    ${NavLink} {
        padding: 0;
    }
`;

export const LogoImage = styled.img.attrs({
    src: "/images/logo.svg"
})`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 224px;
    height: auto;
`;

export const MobileIcon = styled.div`
    display: block;
    position: absolute;
    top: 3.25rem;
    right: 1.75rem;
    color: ${defaultTheme.primaryColor};
    font-size: 2.5em;
    cursor: pointer;

    @media screen and (min-width: 1121px) {
        display: none;
    }
`;

export const NavMenu = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 118px;
    padding: 1rem 0 2rem 0;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${defaultTheme.lightestColor};
    text-align: center;
    z-index: 999;

    @media screen and (min-width: 1121px) {
        right: 0;
        top: 0;
        flex-direction: row;
        justify-content: flex-end;
        position: static;
        height: auto;
        background: transparent;
        padding: 0;

        > :last-child {
            padding-right: 0;
        }
    }
`;


export const NavButton = styled(Row)``;