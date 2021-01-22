import styled from "styled-components";
import { FullWidthSection, Row } from "../Layout";
import { Link } from 'react-router-dom';
import { defaultTheme } from "../../utilities";

export const Container = styled(FullWidthSection)`
    padding: 2rem 0;
    background-color: #FFFFFF;
    border-top: 1px solid rgba(216, 227, 254, 0.6);
    border-bottom: 4px solid ${defaultTheme.primaryColor};
    @media screen and (min-width: 1221px) {
        padding: 4rem 0;
    }
`;

export const ContainerRow = styled(Row)``;

const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`;

export const ListItems = styled(List)`
    justify-content: center;

    @media screen and (min-width: 1121px) {
        justify-content: start;
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
    margin-right: 1.5rem;

    img {
        width: 40px;
        height: auto;
        margin-right: 2rem;
    }
`;

export const NavLink = styled(Link)`
    color: ${defaultTheme.primaryColor};
    text-decoration: none;

    &:hover {
        color: ${defaultTheme.primaryLightColor};
    }

    &:active {
        color: ${defaultTheme.primaryLightColor};
    }
`;

export const SocialList = styled(List)`
    justify-content: center;

    @media screen and (min-width: 1121px) {
        justify-content: flex-end;

        > :last-child {
            margin-right: 0;
        }
    }
`;

export const SocialItem = styled.li`
    font-size: 1.5em;
    list-style-type: none;
    margin-right: 1rem;
    color: ${defaultTheme.primaryColor};
`;

export const Copyright = styled.ul`
    @media screen and (min-width: 1121px) {
        display: flex;
        margin-top: -1.5rem;
    }
`;

export const CopyrightItem = styled.li`
    list-style-type: none;
    text-align: center;
    font-size: 0.75em;
    color: ${defaultTheme.helperTextColor};

    @media screen and (min-width: 1121px) {
        margin-right: 1rem;
    }
`;