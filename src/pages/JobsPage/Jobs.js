import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import {
    Grid,
    FullWidthSection,
    Row,
    PageTitle,
    Inquiry,
    Card
} from "../../components";
import PrimaryButton, { TertiaryButton } from "../../components/Buttons";

import styled from "styled-components";

const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

const PreTitle = styled.p`
    margin-top: 0;
    padding-top: 1rem;
    position: relative;
    font-weight: 700;

    &::before {
        content: '';
        width: 8rem;
        border-top: 1px solid #5B5B5D;
        position: absolute;
        top: 0;
        left: 0;
    }
`; 

function About () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const contactClick = () => history.push('/contact');

    return (
        <Fragment>
            <PageTitle imageSource={"./images/jobs-hero.jpg"}>
                <PageTitle.Header>Our Jobs</PageTitle.Header>
            </PageTitle>
            <ContentArea>
                <Grid>
                    <FullWidthSection>
                        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                            <PreTitle>Work with us.</PreTitle>
                        </Row>
                        <Row ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                            <Card>
                                <Card.Content>
                                    <Card.Image>
                                        <img src='images/registered-nurse-job.jpg' alt='Dekra' />
                                    </Card.Image>
                                    <Card.MainContent  fullCard={true}>
                                        <Card.Title fullCard={true}>Registered Nurses (male / female)</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li><b>Where:</b> Germany</li>
                                                <li><b>For:</b> PGS Wohngruppen GmbH</li>
                                                <li><b>Status: </b>Accredited</li>
                                                <li><b>Qualification:</b> PRC License</li>
                                                <li><b>Accre. no.: 10375311</b></li>
                                            </ul>
                                        </Card.Text>
                                        <Card.Cta fullCard={true}>
                                            <PrimaryButton onClick={ applicantClick }>Apply for Job</PrimaryButton>
                                            <TertiaryButton onClick={ contactClick }>Learn More</TertiaryButton>
                                        </Card.Cta>
                                    </Card.MainContent>
                                </Card.Content>
                                <Card.Info>
                                    <p>No fees to be collected. Beware of illegal recruiters and human traffickers.</p>
                                </Card.Info>
                            </Card>
                        </Row>
                        <Row ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                            <Card>
                                <Card.Content>
                                    <Card.Image>
                                        <img src='images/canada-caregivers.jpg' alt='Dekra' />
                                    </Card.Image>
                                    <Card.MainContent  fullCard={true}>
                                        <Card.Title fullCard={true}>Caregivers for Canada</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li><b>Where:</b> Canada</li>
                                                <li><b>Status: </b>Manpower pooling only</li>
                                                <li><b>Qualification:</b> Bachelor of Science in Nursing</li>
                                            </ul>
                                        </Card.Text>
                                        <Card.Cta fullCard={true}>
                                            <PrimaryButton onClick={ applicantClick }>Apply for Job</PrimaryButton>
                                            <TertiaryButton onClick={ contactClick }>Learn More</TertiaryButton>
                                        </Card.Cta>
                                    </Card.MainContent>
                                </Card.Content>
                                <Card.Info>
                                    <p>No fees to be collected. Beware of illegal recruiters and human traffickers.</p>
                                </Card.Info>
                            </Card>
                        </Row>
                    </FullWidthSection>
                </Grid>
            </ContentArea>

            <Inquiry />
        </Fragment>
    )
}

export default About;