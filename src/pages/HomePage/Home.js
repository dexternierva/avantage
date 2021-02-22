import React, { Fragment } from "react";
import styled from "styled-components";
import {
    Hero,
    SectionHeader, 
    Bleeding,
    Testimonials,
    Inquiry,
    MoveStuffAround,
    TopNews,
    Solutions
} from "../../components";

import FeaturedJob from "../../containers/FeaturedJob/FeaturedJob.container";
import OtherJobs from "../../containers/OtherJobs/OtherJobs.container";

import { useHistory } from "react-router-dom";
import GetNews from "../../containers/GetNews";
import { FaUserNurse, FaUserTie } from "react-icons/fa";

const OpportunitiesSection = styled.section`
    padding: 2rem 0 3.5rem 0;
    background-color: #F5F8FF;
    border-bottom: 1px solid rgba(216, 227, 254, 0.4);

    @media screen and ( min-width: 991px ) {
        padding: 2rem 0 4rem 0;
    }
`;

function Home () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const employerClick = () => history.push('/company');

    return (
        <Fragment>
            <Hero />

            <MoveStuffAround />

            <OpportunitiesSection>
                <SectionHeader>
                    <SectionHeader.PreTitle>What We Offer <b>For Applicants</b></SectionHeader.PreTitle>
                    <SectionHeader.Title>Our Career <b>Opportunities</b></SectionHeader.Title>
                </SectionHeader>

                <FeaturedJob />

                <OtherJobs />

            </OpportunitiesSection>

            <Bleeding gapSmall={"0 0"} gapMedium={"0 0"} gapDefault={"0 0"}>
                <Bleeding.Container gapSmall={"0 0"} gapMedium={"0 0"} gapDefault={"0 0"}>
                    <Bleeding.Primary ss={1} es={9} sd={1} ed={7}>
                        <Bleeding.PrimaryContent onClick={ applicantClick }>
                            <Bleeding.ContentIcon><FaUserNurse /></Bleeding.ContentIcon>
                            <Bleeding.ContentHeader>Applicant</Bleeding.ContentHeader>
                            <Bleeding.ContentText>Deposit CV</Bleeding.ContentText>
                        </Bleeding.PrimaryContent>
                    </Bleeding.Primary>
                    <Bleeding.Secondary ss={1} es={9} sd={8} ed={7}>
                        <Bleeding.SecondaryContent onClick={ employerClick }>
                            <Bleeding.ContentIcon><FaUserTie /></Bleeding.ContentIcon>
                            <Bleeding.ContentHeader>Employer</Bleeding.ContentHeader>
                            <Bleeding.ContentText>Message Us</Bleeding.ContentText>
                        </Bleeding.SecondaryContent>
                    </Bleeding.Secondary>
                </Bleeding.Container>
            </Bleeding>

            <Solutions />
            
            <GetNews>
                <TopNews />
            </GetNews>

            { /**  TESTIMONIALS */ }
            <Testimonials />

            <Inquiry />

        </Fragment>
    )
}

export default Home;