import React , { useContext, Fragment } from "react";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import PrimaryButton, { TertiaryButton, LinkButton } from "../Buttons";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import { JobsContext } from "../../containers/GetJobs";

import styled from "styled-components";

const CardWrap = styled.div`
    margin: 2rem 0;
`;

function OtherJob ({ id, job, applicantClick={applicantClick}, viewAllClick={viewAllClick} }) {
    let startDefault;
    startDefault = (id % 2 == 0) ? startDefault = 2 : startDefault = 8;

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
                                <TertiaryButton onClick={ viewAllClick  }>Learn More</TertiaryButton>
                            </Card.Cta>
                        </Card.MainContent>
                    </Card.Content>
                </Card>
            </CardWrap>
        </Row>
    )
}

function DeckOfCards () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const viewAllClick = () => history.push('/jobs');

    const { loading, response, error } = useContext(JobsContext);

    if (response !== null) {
        const otherJobs = response.map((job) => {
            if (job.categories !== "featured") {
                return ( <OtherJob key={job.id} id={job.id} job={job} applicantClick={applicantClick} viewAllClick={viewAllClick} /> );
            }
        });
        return (
            <Grid>
                <FullWidthSection>
                    {otherJobs}
                </FullWidthSection>
            </Grid>
        );
    }

    return (
        <Fragment>
            { loading && <h4>Loading</h4> }
            { error && "Something went wrong, please try again later" }
        </Fragment>
    )
}

export default DeckOfCards;