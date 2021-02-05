import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import {
    Hero,
    SectionHeader, 
    Stepper, 
    Bleeding,
    DeckOfCards,
    BusinessSolutions,
    Testimonials,
    Inquiry,
    MoveStuffAround
} from "../../components";
import { useHistory } from "react-router-dom";
import GetJobs from "../../containers/GetJobs";
import { FaUserNurse, FaUserTie } from "react-icons/fa";

const stepsArr = [
    {
        title: "Job Order & Customization",
        desc: "Finalize with us your Manpower Request or Job Order for Filipino Workers.",
        img: "images/step1.jpg"
    },
    {
        title: "Verification & Accreditation",
        desc: "Meet our Philippine Embassy/Philippine Labor Office for Verification of required documents and we will take care of the rest!",
        img: "images/step2.jpg"
    },
    {
        title: "Sourcing & Recruitment",
        desc: "Sit back and relax while we are doing the sourcing and recruitment of the best and talented Filipino Workers that you need!",
        img: "images/step3.jpg"
    },
    {
        title: "Final Interview & Job Program Admission",
        desc: "Meet our pool of best and talented Filipino Workers and choose the very best for you!",
        img: "images/step4.jpg"
    },
    {
        title: "Visa & Document Processing",
        desc: "Our fast and efficient processing of your selected Filipino Workers will be in your Country the soonest and very surprising time!",
        img: "images/step5.jpg"
    },
    {
        title: "Deployment",
        desc: "Finally Meet and start a fruitful working environment with your selected Filipino workers!",
        img: "images/step6.jpg"
    }
];

const ServicesSection = styled.section`
    padding: 2rem 0 0 0;
    background-color: #F5F8FF;
    border-bottom: 1px solid rgba(216, 227, 254, 0.4);

    @media screen and ( min-width: 991px ) {
        padding: 2rem 0 0 0;
    }
`;

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
    const [stepNumber, setStepNumber] = useState(1);
    
    useEffect(() => {
        const intervalID = setInterval(() => { 
            setStepNumber((prevStepNumber) => {
                if (prevStepNumber < stepsArr.length) {
                    return prevStepNumber + 1;
                } else {
                    return 1;
                }
            });     
        }, 5000)

        return () => clearInterval(intervalID); 
    }, [])

    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const employerClick = () => history.push('/company');

    return (
        <Fragment>
            <Hero />
            <MoveStuffAround />
            
            { /**  HOW WE WORK SECTION */ }
            <ServicesSection>
                <SectionHeader>
                    <SectionHeader.PreTitle>How We Work</SectionHeader.PreTitle>
                    <SectionHeader.Title>Our Service <b>Process</b></SectionHeader.Title>
                </SectionHeader>
                
                <Stepper stepsArr={stepsArr} currentStep={stepNumber} />
            </ServicesSection>

            { /** BLEEDING -- UPCOMING / NOTIFICATIONS SECTION */ }
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

            { /**  WHAT WE OFFER SECTION */ }
            <OpportunitiesSection>
                <SectionHeader>
                    <SectionHeader.PreTitle>What We Offer <b>For Applicants</b></SectionHeader.PreTitle>
                    <SectionHeader.Title>Our Career <b>Opportunities</b></SectionHeader.Title>
                </SectionHeader>

                <GetJobs>
                    <DeckOfCards />
                </GetJobs>
            </OpportunitiesSection>

            { /**  BUSINESS SOLUTIONS */ }
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