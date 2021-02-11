import React from "react";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import {
    Container,
    Title,
    Text,
    SubContent,
    Content,
    SubTitle,
    SubText
} from "./SolutionsSummary.elements";
import { FaUsers, FaUserCheck } from "react-icons/fa";

function SolutionsSummary () {
    return (
        <Container>
            <Grid>
                <FullWidthSection>
                    <Row ss={2} es={6} sm={2} em={6} sd={3} ed={10}>
                        <Title>We help businesses &amp; organizations from around the world in achieving their goals. We'd love to help you too.</Title>
                        <Text>Businesses of any size and industry face individual HR challenges to strategically remain competitive. Our clients from different industries worldwide benefit from our capacity to provide them with the service and HR solutions they need for their individual business case.</Text>
                    </Row>

                    <Row ss={2} es={6} sm={2} em={6} sd={3} ed={5}>
                        <SubContent>
                            <FaUsers size={60}/>
                            <Content>
                                <SubTitle>Sourcing &amp; Recruitment</SubTitle>
                                <SubText>We are sourcing the right candidate for you.</SubText>
                            </Content>
                        </SubContent>
                    </Row>
                    <Row ss={2} es={6} sm={2} em={6} sd={8} ed={5}>
                        <SubContent>
                            <FaUserCheck size={60}/>
                            <Content>
                                <SubTitle>Managed Recruitment</SubTitle>
                                <SubText>We select the best among the best for you.</SubText>
                            </Content>
                        </SubContent>
                    </Row>
                </FullWidthSection>
            </Grid>
        </Container>
    );
}

export default SolutionsSummary;