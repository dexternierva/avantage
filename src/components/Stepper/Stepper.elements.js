import styled from "styled-components";
import { defaultTheme } from "../../utilities";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

export const Container = styled(FullWidthSection)`
    background-image: linear-gradient( to right, rgba(4, 124, 199, 0.8), rgba(4, 124, 199, 0.2) ), url(${props => props.img});
    background-size: cover;
`;
export const ContainerRow = styled(Row)``;

export const Steppers = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 0 0 0;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        margin-top: 8rem;
        padding: 0;
    }
`;

export const HorizontalProgressLine = styled.div`
    position: absolute;
    left: 6rem;
    top: 0.875rem;
    height: 3px;
    width: 0;
    background: ${defaultTheme.primaryColor};
    z-index: 3;
    transition: all 0.1s;
    outline: 1px solid rgba(255, 255, 255, 0.6);
`;

export const VerticalProgressLine = styled.div`
    position: absolute;
    left: 0.875rem;
    top: 0;
    height: 0;
    width: 3px;
    background: ${defaultTheme.primaryColor};
    z-index: 3;
    transition: all 0.1s;
    outline: 1px solid rgba(255, 255, 255, 0.6);

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export const StepperItem = styled.li`
    list-style-type: none;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0 0 3rem 0;

    &.done {
        ${VerticalProgressLine} {
            height: 100%;
            transition: all 5s;
        }
    }

    &.active-item {
        ${VerticalProgressLine} {
            height: 100%;
            transition: all 5s;
        }
    }

    @media screen and (min-width: 1200px) {
        align-items: center;
        flex: 0 0 15.666%;
        flex-direction: column;
        text-align: center;

        &.done {
            ${VerticalProgressLine} { display: none }

            ${HorizontalProgressLine} {
                width: 100%;
                transition: all 6s;
            }
        }
    
        &.active-item {
            ${VerticalProgressLine} { display: none }

            ${HorizontalProgressLine} {
                width: 100%;
                transition: all 6s;
            }
        }
    }
`;

export const StepperNumber = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 1.875rem;
    height: 1.875rem;
    min-height: 1.875rem;
    padding: .25rem;
    text-align: center;
    margin: 0 1.25rem 0 0;
    z-index: 4;
    font-size: 0.75em;

    @media screen and (min-width: 1200px) {
        margin: 0 0 1.25rem 0;
    }

    &.step-number-active {
        background-color: ${defaultTheme.primaryColor};
        color: ${defaultTheme.lightestColor};
        border: 1px solid rgba(255, 255, 255, 0.6);
    }

    &.step-number-disabled {
        background-color: ${defaultTheme.lightestColor};
        border: 1px solid ${defaultTheme.fourthNeutral};
    }
`;

export const StepperMobileContent = styled.div`
    flex-basis: 90%;
`;

export const StepperTitle = styled.h4`
    margin: 0 0 1rem 0;
    color: #FFFFFF;
    font-weight: 400;

    &.step-description-active {
        font-weight: 700;
    }

    @media screen and (min-width: 991px) {
        font-size: 0.875em;
    }
`;

export const StepperDesc = styled.div`
    color: #FFFFFF;

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export const StepperContent = styled.div`
    margin: 0 0 2rem 0;
    display: none;

    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
`;

export const StepperMainContent = styled.div`
    display: none;

    @media screen and (min-width: 1200px) {
        // flex: 0 0 28%;
        // margin-right: 2%;
        // display: flex;
        // justify-content: space-between;
        // flex-direction: column;
        // padding-top: 1rem;
        // border-top: 1px solid ${defaultTheme.lightestColor};
        // z-index: 2;
        // background-color: #FFF;
        // min-height: 380px;

        flex: 0 0 36%;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        z-index: 2;
        min-height: 320px;
    }
`;

export const StepperMainContentText = styled.div`
    color: ${defaultTheme.lightestColor};

    &.progress-text--enter {  opacity: 0; }
    &.progress-text--enter-active { z-index: 1; opacity: 1; transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);}
    &.progress-text--enter-done { opacity: 1; }

    &.progress-text--exit { opacity: 1;  }
    &.progress-text--exit-active { z-index: 3; opacity: 0; transition: opacity 0.1s cubic-bezier(0.36, 0, 0.66, -0.56); }
    &.progress-text--exit-done { opacity: 0; }
`;

export const StepperContentCta = styled.div`
    margin-top: auto;
`;

export const StepperContentPreTitle = styled.span`
    display: flex;
    margin-bottom: 1rem;
    font-size: 0.75em;
    color: ${defaultTheme.lightestColor};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;

    &::after {
        content: "";
        flex: 1 1;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        margin: auto auto auto 1rem;
    }
`;

export const StepperContentTitle = styled.h2`
    margin: 0 0 1rem 0;
    font-weight: 600;
    color: ${defaultTheme.lightestColor};
`;
export const StepperContentText = styled.p``;

export const StepperImage = styled.div`
    flex: 0 0 70%;

    &.progress-image--enter {  opacity: 0; transform: scale(.8); }
    &.progress-image--enter-active { z-index: 1; opacity: 1; transform: scale(1); transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);}
    &.progress-image--enter-done { opacity: 1; transform: scale(1); }

    &.progress-image--exit { opacity: 1; transform: scale(1); }
    &.progress-image--exit-active { z-index: 3; opacity: 0; transform: scale(.8); transition: all 0.8s cubic-bezier(0.36, 0, 0.66, -0.56); }
    &.progress-image--exit-done { opacity: 0; transform: scale(.8); }
`;

export const StepperDivider = styled.span`
    background-color: ${defaultTheme.lightestColor};
    position: absolute;
    width: 2px;
    height: 2rem;
    top: 100%;
    left: 1rem;
    margin: .5rem 0;

    @media screen and (min-width: 1200px) {
        height: 2px;
        width: 70%;
        top: .5rem;
        left: 68%;
    }
`;

export const Line = styled.div`
    width: 3px;
    margin: auto;
    background: #eee;
    height: 100%;
    position: absolute;
    left: 0.875rem;
    top: 0;
    z-index: 2;
    border-radius: 50px;
    transition: all ease 0.1s;

    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 3px;
        left: 6rem;
        top: 0.875rem;
    }
`;
