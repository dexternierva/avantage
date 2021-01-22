import React, { Fragment } from "react";
import {
    Grid,
    PageTitle,
    SectionContent,
    Inquiry
} from "../../components";

function About () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/about-hero.jpg"}>
                <PageTitle.Header>About A-Vantage</PageTitle.Header>
            </PageTitle>

            <Grid>
                <SectionContent>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <SectionContent.PreTitle>Our Story.</SectionContent.PreTitle>
                    </SectionContent.ContainerRow>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <SectionContent.Title>"We strive for better quality in people’s lives."</SectionContent.Title>
                        <SectionContent.Text>
                            <p>A-Vantage International Recruitment Corp. is a POEA licensed Recruiting Agency.</p>
                            <p>As a recruitment company, A-Vantage plays a crucial role in supplying developed countries with the needed qualified and skilled manpower from the Philippines. The immense challenge for international companies in acquiring and hiring the right people in a timely and sustainable manner, is where A-Vantage’s expertise, passion and experience lie.</p>
                            <p>Being inspired and driven by the motto “We strive for better quality in people’s lives”, A-Vantage provides competitive global job opportunities to Filipinos. A-Vantage is very passionate about supporting our fellow Filipinos pursue their careers abroad, further enable them to ensure the livelihood of their families, improve the quality of their lives and in general, enhance their prospects in life.</p>
                            <p>Since A-Vantage International Recruitment Corp. is owned and managed by responsible individuals with extensive and valuable international professional and managerial experiences, it strongly commits itself to ethical recruitment and compliance with the rules and guidelines of given laws and regulations.</p>
                        </SectionContent.Text>
                    </SectionContent.ContainerRow>
                </SectionContent>
            </Grid>

            <Inquiry />
        </Fragment>
    )
}

export default About;