import React from "react";
import PrimaryButton from "../Buttons";
import { Link } from 'react-router-dom'

import {
    AlertContainer,
    AlertHeader,
    AlertBody,
    AlertSubject
} from "./Alert.elements";

function Alert ({ setAlert, alertSubject, formSuccess }) {

    return(
        formSuccess === true ?
            <AlertContainer>
                <AlertHeader>Thank you for filling out your information!</AlertHeader>
                <AlertBody>
                    <p>We will look over your <AlertSubject>{alertSubject}</AlertSubject> and get back to you as soon as possible. In the meantime, you can check our <Link to="/jobs">Jobs</Link> section or browse through our <Link to="/news">News and Articles</Link> section for latest updates.</p>

                    <p><i>Thank you and stay safe!</i></p>
                    <PrimaryButton onClick={ () => setAlert(false) } modifiers="fullWidth">OK</PrimaryButton>
                </AlertBody>
            </AlertContainer>
        :
            <AlertContainer>
                <AlertHeader>Something Went Wrong...</AlertHeader>
                <AlertBody>
                    <p>Please double check the information that you have entered and try again.</p>

                    <p><i>Thank you!</i></p>
                    <PrimaryButton onClick={ () => setAlert(false) } modifiers="fullWidth">OK</PrimaryButton>
                </AlertBody>
            </AlertContainer>
    )
}

export default Alert;