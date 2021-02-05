import React, { Fragment } from "react";
import {
    Grid,
    PageTitle,
    SectionContent,
    Inquiry,
    Accordion
} from "../../components";

function BusinessSolutions () {
    return (
        <Fragment>
            <PageTitle imageSource={"./images/businesssolutions-hero.jpg"}>
                <PageTitle.Header>Business Solutions</PageTitle.Header>
            </PageTitle>

            <Grid>
                <SectionContent noPaddingBottom={true}>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <SectionContent.PreTitle>Sourcing &amp; Recruitment.</SectionContent.PreTitle>
                    </SectionContent.ContainerRow>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <SectionContent.Title>We are sourcing the right candidate for you!</SectionContent.Title>
                        <SectionContent.Text>
                            <p>We search nationwide for the right candidate for your manpower needs and make sure that the candidates comply and has the capability and ability as per your requirements.</p>
                        </SectionContent.Text>
                    </SectionContent.ContainerRow>
                </SectionContent>
            </Grid>

            <Accordion />

            <Grid>
                <SectionContent>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <SectionContent.PreTitle>Managed Recruitment.</SectionContent.PreTitle>
                    </SectionContent.ContainerRow>
                    <SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
                        <SectionContent.Title>We select the best among the best for you!</SectionContent.Title>
                        <SectionContent.Text>
                            <p>We select the best candidate for you that will benefit your company or organization in the long-term. We make sure that we recommend well qualified candidates to you that would be an asset to your company or organization.</p>
                        </SectionContent.Text>
                    </SectionContent.ContainerRow>
                </SectionContent>
            </Grid>

            <Inquiry />
        </Fragment>
    )
}

export default BusinessSolutions;