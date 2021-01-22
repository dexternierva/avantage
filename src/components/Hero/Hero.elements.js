import styled from "styled-components";
import { defaultTheme, typeScale, primaryFont } from "../../utilities";
import { Link } from 'react-router-dom';

/* LAYOUT COMPONENTS */
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

export const Section = styled(FullWidthSection)`
    position: relative;
    overflow: hidden;
    height: 60vh;
    border-bottom: 1px solid rgba(216, 227, 254, 1);

    @media screen and (min-width: 75rem) {
        height: 80vh;
    }
`;

export const Article = styled(Row)`
    position: absolute;
    bottom: 0;
    width: 100%;

    @media screen and (min-width: 70rem) {
        margin-bottom: 3rem;
    }
`

export const Image = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.source});
    background-size: cover;
    background-position: top center;

    &.img--enter { transform: translateX(100%); }
    &.img--enter-active { z-index: 1; transform: translateX(0); transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1); }
    &.img--enter-done { transform: translateX(0); }

    &.img--exit { transform: translateX(0); }
    &.img--exit-active { transform: translateX(-100%); transition: transform .8s cubic-bezier(0.16, 1, 0.3, 1); }
    &.img--exit-done { transform: translateX(-100%); }
`;

export const ArticleContent = styled.article`
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 3;
    
    &.content--enter { opacity: 0; }
    &.content--enter-active { opacity: 1; transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1); }
    &.content--enter-done { opacity: 1 }

    &.content--exit {  }
    &.content--exit-active { opacity: 0; transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1); }
    &.content--exit-done { opacity: 0; }

    @media screen and (min-width: 70rem) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 2rem 1.5rem 2rem;
    }
`;

export const ArticleHeading = styled.h3`
    text-align: center;
    margin: 0 0 1rem 0;

    @media screen and (min-width: 70rem) {
        text-align: left;

        &::after {
            content: "";
            display: block;
            width: 85px;
            margin-top: .5rem;
            border-bottom: 1px solid ${defaultTheme.secondaryColor};
        }
    }
`;

export const ArticleText = styled.p`
    display: none;

    @media screen and (min-width: 768px) {
        max-width: 45em;
        margin: 0 auto 1rem auto;
        display: block;
        text-align: center;
        line-height: 1.75;
    }

    @media screen and (min-width: 70rem) {
        text-align: left;
        margin-bottom: 2rem;
    }
`;

export const ArticleCta = styled.div`
    text-align: center;

    @media screen and (min-width: 70rem) {
        text-align: left;
    }
`;

const Controls = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    font-size: 4em;
    cursor: pointer;
    color: ${defaultTheme.secondaryColor};
    z-index: 5;
`;

export const ArticleNavLeft = styled(Controls)`
    left: 0;

    @media screen and (min-width: 70rem) {
        background-color: rgba(4, 124, 199, 0.8);
        bottom: 0;
        top: auto;
        right: 64px;
        left: auto;
        color: ${defaultTheme.lightestColor};

        &:hover {
            background-color: rgba(4, 124, 199, 1);
        }
    }
`

export const ArticleNavRight = styled(Controls)`
    right: 0;

    @media screen and (min-width: 70rem) {
        position: absolute;
        right: 0;
        bottom: 0;
        top: auto;
        display: flex;
        align-items: flex-end;
        background-color: rgba(255, 255, 255, 0.7);
        height: 100%;

        &:hover {
            background-color: rgba(255, 255, 255, 1);
        }
    }
`