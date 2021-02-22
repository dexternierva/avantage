import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import PrimaryButton, { TertiaryButton } from "../Buttons";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

import styled from "styled-components";

const CardWrap = styled.div`
    margin: 2rem 0;
`;

function OtherJobsCard ({ job, applicantClick }) {
    let startDefault;
    startDefault = (job.id % 2 === 0) ? startDefault = 2 : startDefault = 8;

    return (
        <Row ss={2} es={6} sm={2} em={6} sd={startDefault} ed={6}>
            <CardWrap>
                <Card>
                    <Card.Content>
                        <Card.MainContent  fullCard={false}>
                            <Card.PreTitle>For Manpower Pooling Only</Card.PreTitle>
                            <Card.Title fullCard={true}>{job.title}</Card.Title>
                            <Card.Text>{job.desc}</Card.Text>
                            <Card.Cta fullCard={true}>
                                <PrimaryButton onClick={ applicantClick }>Apply Now</PrimaryButton>
                                <Link to={`/jobs/${job.id}`}><TertiaryButton>Learn More</TertiaryButton></Link>
                            </Card.Cta>
                        </Card.MainContent>
                    </Card.Content>
                    <Card.Info>
                        <p>No fees to be collected. Beware of illegal recruiters and human traffickers.</p>
                    </Card.Info>
                </Card>
            </CardWrap>
        </Row>
    )
}

function OtherJobs ({ otherjobs }) {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');

    const otherJobs = otherjobs.map(job => (
        job.categories !== "featured"
        ? <OtherJobsCard job={job} key={`job__${job.id}`} applicantClick={ applicantClick } />
        : null
    ))

    return (
        <Grid>
            <FullWidthSection>
                {otherJobs}
            </FullWidthSection>
        </Grid>
        
    );
}

export default OtherJobs;