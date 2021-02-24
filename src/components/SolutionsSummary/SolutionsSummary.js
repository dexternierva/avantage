import React from "react";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import {
    ImageWrap,
    Image,
    Title,
    Text,
    MainContent,
    Summary,
    SummaryContent,
    SubContent,
    Content,
    SubTitle,
    SubText
} from "./SolutionsSummary.elements";
import { MdLooksOne, MdLooksTwo } from "react-icons/md";

function SolutionsSummary () {
    return (
        <Grid>
            <FullWidthSection>
                <ImageWrap ss={2} es={6} sm={2} em={6} sd={2} ed={4}>
                    <Image><img src="images/sourcing_managed.jpg" alt="Our Services Process" /></Image>
                </ImageWrap>
                <MainContent ss={2} es={6} sm={2} em={6} sd={6} ed={9}>
                    <Summary>
                        <SummaryContent>
                            <Title>We help businesses &amp; organizations from around the world in achieving their goals. We'd love to help you too.</Title>
                            <Text>Businesses of any size and industry face individual HR challenges to strategically remain competitive. Our clients from different industries worldwide benefit from our capacity to provide them with the service and HR solutions they need for their individual business case.</Text>
                        </SummaryContent>
                    </Summary>

                    <SubContent>
                        <Content>
                            <SubTitle><MdLooksOne size={18}/><span>Sourcing &amp; Recruitment</span></SubTitle>
                            <SubText>We search nationwide for the right candidate for your manpower needs and make sure that the candidates comply and has the capability and ability as per your requirements.</SubText>
                        </Content>
                    </SubContent>

                    <SubContent>
                        <Content>
                            <SubTitle><MdLooksTwo size={18}/><span>Managed Recruitment Services</span></SubTitle>
                            <SubText>We select the best candidate for you that will benefit your company or organization in the long-term.  We make sure that we recommend well qualified candidates to you that would be an asset to your company or organization.</SubText>
                        </Content>
                    </SubContent>
                </MainContent>
            </FullWidthSection>
        </Grid>
    );
}

export default SolutionsSummary;