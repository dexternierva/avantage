import styled from "styled-components";
import { Row } from "../Layout";
import { defaultTheme } from "../../utilities";
import PrimaryButton, { TertiaryButton } from "../Buttons";

export const Container = styled.div`
    background-color: rgba(249, 249, 249, 0.6);
    border-top: 1px solid rgba(216, 227, 254, 0.8);
`;

export const Subscription = styled(Row)`
    padding: 3rem 0;
    max-width: 70%;
    margin: 0 auto;

    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const SubscriptionContentText = styled.div`
    @media screen and (min-width: 991px) {
        flex: 0 0 40%;
    }
`;

export const SubscriptionContentForm = styled.div`
    @media screen and (min-width: 991px) {
        flex: 0 0 50%;
    }
`;

export const SubscriptionHeading = styled.h4`
    margin: 0 0 0.75rem 0;
    color: ${defaultTheme.primaryColor};
    text-align: center;

    @media screen and (min-width: 991px) {
        text-align: left;
    }
`;

export const SubscriptionText = styled.p`
    margin: 0 0 2rem 0;
    color: ${defaultTheme.helperTextColor};
    font-size: 0.875em;
    text-align: center;

    @media screen and (min-width: 991px) {
        margin-bottom: 0;
        text-align: left;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;

    ${PrimaryButton} {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;

        ${PrimaryButton} {
            width: auto;
        }
    }
`;

export const FormInput = styled.input`
    padding: 1rem 1.5rem;
    background-color: #EFEFF7;
    border-radius: 2px;
    margin-bottom: 1rem;
    outline: none;
    border: none;
    font-size: 1rem;
    border: 1px solid rgba(141, 149, 158, 0.2);
    box-shadow: inset 0px 0px 4px rgba(141, 149, 158, 0.2);
    width: 100%;

    &::placeholder {
        color: #8C8CA1;
        font-weight: 600;
        font-size: 0.75em;
        font-style: italic;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 0 !important;
        margin-right: .25rem;
    }
`;