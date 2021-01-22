import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, FullWidthSection } from "../Layout";
import PrimaryButton, { SecondaryButton } from "../Buttons";

import {
    Container,
    Content,
    Pretitle,
    Title,
    Text,
    Cta
} from "./Inquiry.elements.js";

function Inquiry () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const employerClick = () => history.push('/company');

    return (
        <Container>
            <Grid>
                <FullWidthSection>
                    <Content ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                        <Pretitle>Start a conversation</Pretitle>
                        <Title>Your Inquiries Are Important To Us</Title>
                        <Text>We help businesses, organizations and individuals from around the world in making their dreams come true. We'd love to help you too.</Text>
                        <Cta>
                            <PrimaryButton onClick={ applicantClick }>Applicant Inquiry</PrimaryButton>
                            <SecondaryButton onClick={ employerClick }>Employer Inquiry</SecondaryButton>
                        </Cta>
                    </Content>
                </FullWidthSection>
            </Grid>
        </Container>
    )
}

export default Inquiry;