import React, { useState } from "react";
import Card from "../Card/Card";
import PrimaryButton, { TertiaryButton, LinkButton } from "../Buttons";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import {

} from "./DeckOfCards.elements.js";

const cardContents = [
    {
        img: 'images/nurses-germany.jpg',
        title: 'Registered Nurses for Germany',
        text: 'First come, first served! Our Job Opening for Nurses for Germany comes with 3 different Career Programs dependent on the individual qualification of the nurse. Admission is subject to availability and qualification requirements of our employer.'
    },
    {
        preTitle: 'Upcoming',
        title: 'Caregivers for Canada',
        text: 'Cupcake ipsum dolor sit. Amet pie pudding marshmallow apple pie pastry. Sesame snaps I love wafer sweet gummi bears lollipop jujubes.'
    },
    {
        preTitle: 'Upcoming',
        title: 'Opportunities for Skilled Workers in Australia and Japan',
        text: 'Cupcake ipsum dolor sit. Amet pie pudding marshmallow apple pie pastry.'
    },
]

function DeckOfCards () {
    return (
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
                                <Card.Text><p>{cardContents[0].text}</p></Card.Text>
                                <Card.Cta fullCard={true}>
                                    <PrimaryButton>Read Now</PrimaryButton>
                                    <TertiaryButton>Message Us For Details</TertiaryButton>
                                </Card.Cta>
                            </Card.MainContent>
                        </Card.Content>
                        { cardContents[0].info && <Card.Info>{cardContents[0].info}</Card.Info> }
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
                                <Card.Text><p>{cardContents[1].text}</p></Card.Text>
                                <Card.Cta fullCard={false}>
                                    <LinkButton>Subscribe to Newsletter</LinkButton>
                                </Card.Cta>
                            </Card.MainContent>
                        </Card.Content>
                        { cardContents[1].info && <Card.Info>{cardContents[1].info}</Card.Info> }
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
                                <Card.Text><p>{cardContents[2].text}</p></Card.Text>
                                <Card.Cta fullCard={false}>
                                    <LinkButton>Subscribe to Newsletter</LinkButton>
                                </Card.Cta>
                            </Card.MainContent>
                        </Card.Content>
                        { cardContents[2].info && <Card.Info>{cardContents[2].info}</Card.Info> }
                    </Card>
                </Row>
            </FullWidthSection>
        </Grid>
    )
}

export default DeckOfCards;