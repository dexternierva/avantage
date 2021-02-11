import React from "react";
import PrimaryButton from "../Buttons";
import { useHistory } from "react-router-dom";
import {
    SolutionsGrid,
    SolutionsFullWidthSection,
    SolutionsSectionHeader,
    SolutionsSectionHeaderPreTitle,
    SolutionsSectionHeaderTitle,
    SolutionsMainContent,
    Title,
    Text,
    SolutionsSubContent,
    SolutionsSubContentSourcing,
    SubTitle,
    SubText,
    SolutionsSubContentManaged
} from "./Solutions.elements";


function Solutions () {
    const history = useHistory();
    const handleClick = () => history.push('/businesssolutions');

    return (
        <SolutionsGrid gapDefault="0 2rem">
            <SolutionsFullWidthSection>
                <SolutionsSectionHeader ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                    <SolutionsSectionHeaderPreTitle>What We Offer <b>For Business CLients</b></SolutionsSectionHeaderPreTitle>
                    <SolutionsSectionHeaderTitle>Our Business <b>Solutions</b></SolutionsSectionHeaderTitle>
                </SolutionsSectionHeader>
            </SolutionsFullWidthSection>
            <SolutionsFullWidthSection>
                <SolutionsMainContent ss={2} es={6} sm={2} em={6} sd={2} ed={7}>
                    <Title>Businesses of any size and industry face individual HR challenges to strategically remain competitive.</Title>
                    <Text>Our clients from different industries worldwide benefit from our capacity to provide them with the service and HR solutions they need for their individual business case.</Text>
                    <PrimaryButton onClick={ handleClick }>Get in touch with us!</PrimaryButton>
                </SolutionsMainContent>
                <SolutionsSubContent ss={1} es={8} sm={1} em={8} sd={11} ed={4}>
                    <SolutionsSubContentSourcing onClick={ handleClick }>
                        <SubTitle>Sourcing &amp; Recruitment</SubTitle>
                        <SubText>We are sourcing the right candidate for you!.</SubText>
                    </SolutionsSubContentSourcing>
                    <SolutionsSubContentManaged onClick={ handleClick }>
                        <SubTitle>Managed Recruitment Services</SubTitle>
                        <SubText>We select the best among the best for you!</SubText>
                    </SolutionsSubContentManaged>
                </SolutionsSubContent>
            </SolutionsFullWidthSection>
        </SolutionsGrid>
    );
}

export default Solutions;