import React, { Fragment, useState } from "react";
import GetNews from "../../containers/GetNews";
import {
    Grid,
    FullWidthSection,
    Row,
    PageTitle,
    Inquiry,
    FeaturedNews,
    OtherNews
} from "../../components";

import styled from "styled-components";

const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

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
                            <GetNews>
                                <FeaturedNews />
                            </GetNews>
                        </Row>
                    </FullWidthSection>
                    <FullWidthSection>
                        <GetNews>
                            <OtherNews />
                        </GetNews>
                    </FullWidthSection>
                </Grid>
            </ContentArea>

            <Inquiry />
        </Fragment>
    )
}

export default News;