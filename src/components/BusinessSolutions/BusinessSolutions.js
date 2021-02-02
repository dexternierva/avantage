import React from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../Buttons";
import { Grid } from "../Layout";
import {
    Container,
    Content,
    MainContent,
    PreTitle,
    Title,
    Text,
    Image
} from "./BusinessSolutions.elements";

function BusinessSolutions () {
    const history = useHistory();
    const handleClick = () => history.push('/businesssolutions');

    return (
        <Grid>
            <Container>
                <Content ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                    <MainContent>
                        <PreTitle>We are <b>sourcing the right candidate</b> for you!</PreTitle>
                        <Title>Sourcing &amp; Recruitment</Title>
                        <Text>We search nationwide for the right candidate for your manpower needs and make sure that the candidates comply and has the capability and ability as per your requirements.</Text>
                        <PrimaryButton onClick={ handleClick }>Learn More</PrimaryButton>
                    </MainContent>
                    <Image>
                        <img src="images/illustration.png" alt="Sourcing" />
                    </Image>
                </Content>
                <Content ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
                    <Image>
                        <img src="images/managed-recruitment.png" alt="Recruitment" />
                    </Image>
                    <MainContent>
                        <PreTitle>We <b>select the best</b> among the best for you!</PreTitle>
                        <Title>Managed Recruitment</Title>
                        <Text>We select the best candidate for you that will benefit your company or organization in the long-term.  We make sure that we recommend well qualified candidates to you that would be an asset to your company or organization.</Text>
                        <PrimaryButton onClick={ handleClick }>Learn More</PrimaryButton>
                    </MainContent>
                </Content>
            </Container>
        </Grid>
    )
}

export default BusinessSolutions;