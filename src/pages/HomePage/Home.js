import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
    Hero,
    SectionHeader, 
    Bleeding,
    DeckOfCards,
    BusinessSolutions,
    Testimonials,
    Inquiry,
    MoveStuffAround,
    OtherJobs
} from "../../components";
import { useHistory } from "react-router-dom";
import GetJobs from "../../containers/GetJobs";
import { FaUserNurse, FaUserTie } from "react-icons/fa";

const OpportunitiesSection = styled.section`
    padding: 2rem 0 3.5rem 0;
    background-color: #F5F8FF;
    border-bottom: 1px solid rgba(216, 227, 254, 0.4);

    @media screen and ( min-width: 991px ) {
        padding: 2rem 0 4rem 0;
    }
`;

const TestimonialsSection = styled.section`
    padding: 2rem 0;
    background: linear-gradient(180deg, #EAF0FF 0%, #F6F9FF 100%);
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

                <GetJobs>
                    <DeckOfCards />
                </GetJobs>

                <GetJobs>
                    <OtherJobs />
                </GetJobs>
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

            <SectionHeader>
                <SectionHeader.PreTitle>What We Offer <b>For Business Clients</b></SectionHeader.PreTitle>
                <SectionHeader.Title>Our Business <b>Solutions</b></SectionHeader.Title>
            </SectionHeader>
            <BusinessSolutions />
            
            <Inquiry />
            
            { /**  TESTIMONIALS */ }
            {/* <TestimonialsSection>
                <Testimonials />
            </TestimonialsSection> */}

        </Fragment>
    )
}

export default Home;