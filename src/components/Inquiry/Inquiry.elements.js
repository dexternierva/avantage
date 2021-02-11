import styled from "styled-components";
import { Row } from "../Layout";
import { defaultTheme } from "../../utilities";
import PrimaryButton, { SecondaryButton } from "../Buttons";

export const Container = styled.div`
    padding: 3rem 0;
    background-color: #41B332;
`;

export const Content = styled(Row)``;

export const Pretitle = styled.p`
    margin: 0 0 .25rem 0;
    color: ${defaultTheme.lightestColor};
    font-size: 0.75em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

export const Title = styled.h3`
    margin-top: 0;
    color: ${defaultTheme.lightestColor};
    font-weight: 400;
    text-align: center;
`;

export const Text = styled.p`
    max-width: 40em;
    margin-left: auto;
    margin-right: auto;
    color: ${defaultTheme.lightestColor};
    text-align: center;
`;

export const Cta = styled.div`
    display: flex;
    justify-content: center;

    ${PrimaryButton} {
        border-radius: 2px 0 0 2px;
    }

    ${SecondaryButton} {
        border-radius: 0 2px 2px 0;
    }
`;