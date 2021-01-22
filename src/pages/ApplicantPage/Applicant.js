import React, { Fragment } from "react";
import {
    PageTitle,
    ApplicantForm
} from "../../components";

function About () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/inquiry-hero.jpg"}>
                <PageTitle.Header>Applicant Inquiry</PageTitle.Header>
            </PageTitle>

            <ApplicantForm />
        </Fragment>
    )
}

export default About;