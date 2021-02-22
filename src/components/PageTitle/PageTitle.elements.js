import styled from "styled-components";
import { defaultTheme } from "../../utilities";

export const Container = styled.div`
    padding: 4rem 0;
    background-image: linear-gradient( to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4) ), url( ${props => props.imageSource} );
    background-size: cover;
    background-position: center right;

    @media screen and (min-width: 991px) {
        padding: 8rem 0;
    }
`;

export const Header = styled.h1`
    color: ${defaultTheme.primaryColor};
    font-weight: 700;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(16, 142, 64, 0.4);
    max-width: 960px;
    margin: 0 auto;
`;