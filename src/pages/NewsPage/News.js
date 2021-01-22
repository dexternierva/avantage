import React, { Fragment, useState } from "react";
import {
    Grid,
    FullWidthSection,
    Row,
    PageTitle,
    Inquiry,
    Card
} from "../../components";
import PrimaryButton, { TertiaryButton, LinkButton } from "../../components/Buttons";

import styled from "styled-components";

const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

const cardContents = [
    {
        img: 'images/news.jpg',
        title: 'Germany to hire 400 Pinoy nurses, says POEA',
        text: 'Four hundred Filipino nurses will be given the opportunity to work in Germany, the Philippine Overseas Employment Administration (POEA) said on Monday. Qualified applicants are male or female Filipinos with active Philippine Nursing Licenses and at least two years of professional experience in hospitals, rehabilitation centers, or care institutions.'
    },
    {
        preTitle: 'News',
        title: 'Caregivers for Canada',
        text: 'Cupcake ipsum dolor sit. Amet pie pudding marshmallow apple pie pastry. Sesame snaps I love wafer sweet gummi bears lollipop jujubes.'
    },
    {
        preTitle: 'Update',
        title: 'Opportunities for Skilled Workers in Australia and Japan',
        text: 'Cupcake ipsum dolor sit. Amet pie pudding marshmallow apple pie pastry.'
    },
]

function News () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/news-hero.jpg"}>
                <PageTitle.Header>Latest News &amp; Updates</PageTitle.Header>
            </PageTitle>
            <ContentArea>
                <Grid>
                    <FullWidthSection>
                        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                            <Card>
                                <Card.Content>
                                    { cardContents[0].img && 
                                    <Card.Image>
                                        <img src={cardContents[0].img} alt={cardContents[0].title} />
                                    </Card.Image>
                                    }
                                    <Card.MainContent  fullCard={true}>
                                        { cardContents[0].preTitle && <Card.PreTitle>{cardContents[0].preTitle}</Card.PreTitle> }
                                        <Card.Title fullCard={true}>{cardContents[0].title}</Card.Title>
                                        <Card.Text>{cardContents[0].text}</Card.Text>
                                        <Card.Cta fullCard={true}>
                                            <PrimaryButton>Read Article</PrimaryButton>
                                        </Card.Cta>
                                    </Card.MainContent>
                                </Card.Content>
                            </Card>
                        </Row>

                        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={6}>
                            <Card bg={'tomato'}>
                                <Card.Content>
                                    { cardContents[1].img && 
                                    <Card.Image>
                                        <img src={cardContents[1].img} alt={cardContents[1].title} />
                                    </Card.Image>
                                    }
                                    <Card.MainContent fullCard={false}>
                                        { cardContents[1].preTitle && <Card.PreTitle>{cardContents[1].preTitle}</Card.PreTitle> }
                                        <Card.Title fullCard={false}>{cardContents[1].title}</Card.Title>
                                        <Card.Text>{cardContents[1].text}</Card.Text>
                                        <Card.Cta fullCard={false}>
                                            <TertiaryButton>Read Article</TertiaryButton>
                                        </Card.Cta>
                                    </Card.MainContent>
                                </Card.Content>
                            </Card>
                        </Row>

                        <Row ss={2} es={6} sm={2} em={6} sd={8} ed={6}>
                            <Card>
                                <Card.Content>
                                    { cardContents[2].img && 
                                    <Card.Image>
                                        <img src={cardContents[2].img} alt={cardContents[2].title} />
                                    </Card.Image>
                                    }
                                    <Card.MainContent fullCard={false}>
                                        { cardContents[2].preTitle && <Card.PreTitle><span>{cardContents[2].preTitle}</span></Card.PreTitle> }
                                        <Card.Title fullCard={false}>{cardContents[2].title}</Card.Title>
                                        <Card.Text>{cardContents[2].text}</Card.Text>
                                        <Card.Cta fullCard={false}>
                                            <TertiaryButton>Read Article</TertiaryButton>
                                        </Card.Cta>
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

export default News;