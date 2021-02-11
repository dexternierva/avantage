import React, { Fragment } from "react";
import {
    Grid,
    FullWidthSection,
    Row,
    PageTitle,
    SectionContent,
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
    return (
        <Fragment>
            <PageTitle imageSource={"./images/partners-hero.jpg"}>
                <PageTitle.Header>Our Partners</PageTitle.Header>
            </PageTitle>
            <ContentArea>
                <Grid>
                    <FullWidthSection>
                        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                            <PreTitle>Trusted Professionals &amp; Partners</PreTitle>
                        </Row>
                        <Row ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                            <Card>
                                <Card.Content>
                                    <Card.Image>
                                        <img src='images/dekra.png' alt='Dekra' />
                                    </Card.Image>
                                    <Card.MainContent  fullCard={true}>
                                        {/* { cardContents[0].preTitle && <Card.PreTitle>{cardContents[0].preTitle}</Card.PreTitle> } */}
                                        <Card.Title fullCard={true}>DEKRA Akademie Kft.</Card.Title>
                                        <Card.Text></Card.Text>
                                        <Card.Cta fullCard={true}></Card.Cta>
                                    </Card.MainContent>
                                </Card.Content>
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