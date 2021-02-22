import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import { PageTitle } from "..";
import { useHistory } from "react-router-dom";
import PrimaryButton, { TertiaryButton } from "../Buttons";
import Inquiry from "../Inquiry/Inquiry";

import styled from "styled-components";
const PreTitle = styled.p`
    margin-top: 0;
    padding-top: 1rem;
    position: relative;
    font-weight: 700;

    &::before {
        content: '';
        width: 8rem;
        border-top: 1px solid #5B5B5D;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

function Job ({ job, applicantClick }) {
    const imageUrl =
    process.env.NODE_ENV !== "development"
        ? job.featuredImage.url
        : process.env.REACT_APP_BACKEND_URL + job.featuredImage.url;

    return (
        <Row ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
            <Card>
                <Card.Content>
                    <Card.Image>
                        <img src={imageUrl} alt={job.title} />
                    </Card.Image>
                    <Card.MainContent  fullCard={true}>
                        <Card.Title fullCard={true}>{job.title}</Card.Title>
                        <Card.Text>
                            <ul>
                                <li><b>Where:</b> {job.where}</li>
                                {job.companyName && <li><b>For:</b> {job.companyName}</li> }
                                <li><b>Status:</b> {job.status}</li>
                                <li><b>Qualification:</b> {job.qualification}</li>
                                {job.accreditationNumber && <li><b>Accre. no.:</b> {job.accreditationNumber}</li> }
                            </ul>
                        </Card.Text>
                        <Card.Cta fullCard={true}>
                            <PrimaryButton onClick={ applicantClick }>Apply for Job</PrimaryButton>
                            <Link to={`/jobs/${job.id}`}><TertiaryButton>Learn More</TertiaryButton></Link>
                        </Card.Cta>
                    </Card.MainContent>
                </Card.Content>
                <Card.Info>
                    <p>No fees to be collected. Beware of illegal recruiters and human traffickers.</p>
                </Card.Info>
            </Card>
        </Row>
    )
}

const Jobs = ({ jobs }) => {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');

    const deckofjobs = jobs.map(job => (
        <Job job={job} key={`job__${job.id}`} applicantClick={ applicantClick } />
    ))

    return (
        <>
            <PageTitle imageSource={"/images/jobs-hero.jpg"}>
                <PageTitle.Header>Our Jobs</PageTitle.Header>
            </PageTitle>
            <ContentArea>
                <Grid>
                    <FullWidthSection>
                    <Row ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                        <PreTitle>Work with us</PreTitle>
                    </Row>
                        {deckofjobs}
                    </FullWidthSection> 
                </Grid>
            </ContentArea>
            
            <Inquiry />
        </>
    );
};

export default Jobs;