import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import PrimaryButton, { TertiaryButton } from "../Buttons";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";

function FeaturedCard ({ job, applicantClick }) {
    const imageUrl =
    process.env.NODE_ENV !== "development"
        ? job.featuredImage.url
        : process.env.REACT_APP_BACKEND_URL + job.featuredImage.url;
    return (
        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
            <Card>
                <Card.Content>
                    { job.featuredImage && 
                    <Card.Image>
                        <img src={imageUrl} alt={job.title} />
                    </Card.Image>
                    }
                    <Card.MainContent fullCard={true}>
                        { job.preTitle && <Card.PreTitle>{job.preTitle}</Card.PreTitle> }
                        <Card.Title fullCard={true}>{job.title}</Card.Title>
                        <Card.Text><p>{job.desc}</p></Card.Text>
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
        </Row>
    )
}

function FeaturedJob ({ jobs }) {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');

    const featuredJob = jobs.map(job => (
        job.categories === "featured"
        ? <FeaturedCard job={job} key={`job__${job.id}`} applicantClick={ applicantClick } />
        : null
    ))

    return (
        <Grid>
            <FullWidthSection>
                {featuredJob}
            </FullWidthSection>
        </Grid>
        
    );
}

export default FeaturedJob;