import React, { Fragment } from "react";
import {
    PageTitle,
    CompanyForm
} from "../../components";

function About () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/inquiry-hero.jpg"}>
                <PageTitle.Header>Company Inquiry</PageTitle.Header>
            </PageTitle>

            <CompanyForm />
        </Fragment>
    )
}

export default About;