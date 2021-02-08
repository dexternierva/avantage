import React , { useContext, Fragment } from "react";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import PrimaryButton, { TertiaryButton, LinkButton } from "../Buttons";
import Grid from "../Layout/Grid";
import FullWidthSection from "../Layout/FullWidthSection";
import Row from "../Layout/Row";
import { JobsContext } from "../../containers/GetJobs";

function FeaturedCard ({ featured, applicantClick, viewAllClick }) {
    return (
        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={12}>
            <Card>
                <Card.Content>
                    { featured.featuredImage && 
                    <Card.Image>
                        <img src={`http://68.183.226.128${featured.featuredImage.url}`}  alt={featured.title} />
                    </Card.Image>
                    }
                    <Card.MainContent  fullCard={true}>
                        { featured.preTitle && <Card.PreTitle>{featured.preTitle}</Card.PreTitle> }
                        <Card.Title fullCard={true}>{featured.title}</Card.Title>
                        <Card.Text><p>{featured.desc}</p></Card.Text>
                        <Card.Cta fullCard={true}>
                            <PrimaryButton onClick={ applicantClick }>Apply Now</PrimaryButton>
                            <TertiaryButton onClick={ viewAllClick  }>Learn More</TertiaryButton>
                        </Card.Cta>
                    </Card.MainContent>
                </Card.Content>
                { featured.info && <Card.Info>{featured.info}</Card.Info> }
            </Card>
        </Row>
    )
}

function DeckOfCards () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const viewAllClick = () => history.push('/jobs');

    const { loading, response, error } = useContext(JobsContext);

    if (response !== null) {
        const featuredJob = response.map((job) => {
            if (job.categories == "featured") {
                return ( <FeaturedCard key={job.id} featured={job} applicantClick={applicantClick} viewAllClick={viewAllClick} /> );
            }
        });
        return (
            <Grid>
                <FullWidthSection>
                    {featuredJob}
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