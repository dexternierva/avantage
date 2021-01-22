import React, { Fragment } from "react";
import { MdEmail, MdPhoneIphone, MdLocationOn } from "react-icons/md";
import {
    Grid,
    FullWidthSection,
    Row,
    PageTitle,
    Inquiry,
    ContactForm
} from "../../components";

import { defaultTheme } from "../../utilities/themes";
import styled from "styled-components";

const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

export const Content = styled.div`
    margin-top: 3rem;
    padding: 1rem;
    background: #41B332;
    text-align: left;
`;

export const Pretitle = styled.p`
    display: flex;
    flex-direction: row;
    margin-top: 0;
    color: ${defaultTheme.lightestColor};
    font-size: 0.75em;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;

    &::before {
        content: "";
        flex: 1 1;
        border-bottom: 1px solid ${defaultTheme.lightestColor};
        margin: auto;
    }

    &::after {
        content: "";
        flex: 1 1;
        border-bottom: 1px solid ${defaultTheme.lightestColor};
        margin: auto;
    }

    &::before {
        margin-right: 8px
    }

    &::after {
        margin-left: 8px
    }
`;

export const Title = styled.h4`
    color: ${defaultTheme.lightestColor};
    font-weight: 400;
`;

export const Text = styled.p`
    max-width: 40em;
    margin-left: auto;
    margin-right: auto;
    color: ${defaultTheme.lightestColor};
`;

const DefinitionList = styled.dl`
    margin: 1.5rem 0 0 0;
    padding: 0;

    p {
        margin: .25rem 0 .5rem 0;
    }

    dl {
        margin: 0;

        dt {
            margin-top: .5rem;
            font-weight: 400;
            text-transform: none;
        }
    }
`;

const DT = styled.dt`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.125em;
    font-weight: 600;
    line-height: 1.11111111;
    color: ${ defaultTheme.primaryColor };
`;

const DD = styled.dd`
    margin: 0;
    padding: 0.25rem 0 .5rem 0;
`;

function About () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/contact-hero.jpg"}>
                <PageTitle.Header>Contact Us</PageTitle.Header>
            </PageTitle>
            <ContentArea>
            <Grid>
                <FullWidthSection>
                    <Row ss={2} se={6} sm={2} em={6} sd={2} ed={8}>
                        <ContactForm />
                    </Row>
                    <Row ss={2} se={6} sm={2} em={6} sd={10} ed={4}>
                        <Content ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                            <Pretitle>Attention!</Pretitle>
                            <Title>To all APPLICANTS!</Title>
                            <Text>A-Vantage is currently working from home due to the quarantine situation. Our office is therefore currently closed. Please contact us per email or by phone. Thank you.</Text>
                        </Content>
                        <DefinitionList>
                            <DT><MdEmail />Email Address</DT>
                            <DefinitionList>
                                <DT>For employers:</DT>
                                <DD>info@a-vantageinternational.com</DD>
                                <DT>For applicants:</DT>
                                <DD>recruitment@a-vantageinternational.com</DD>
                            </DefinitionList>
                            <DT><MdPhoneIphone />Phone Number</DT>
                            <DD>+63947 678 8065 (Smart)</DD>
                            <DD>+63966 205 2191 (Globe)</DD>
                            <DT><MdLocationOn />Address</DT>
                            <DD><i>A-Vantage International Recruitment Corp.</i></DD>
                            <DD>
                                <p>3Fl. Galvez Building, Severina Avenue,</p>
                                <p>18 KM West Service Road,</p>
                                <p>Marcelo Green, Parañaque City 1700,</p>
                                <p>Manila, Philippines</p>
                            </DD>
                        </DefinitionList>
                    </Row>
                </FullWidthSection>
            </Grid>
            </ContentArea>
            <Inquiry />
        </Fragment>
    )
}

export default About;