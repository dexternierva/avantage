import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import GetJobs from "../../containers/GetJobs";
import { Grid,FullWidthSection, Row, PageTitle, Inquiry, Jobs} from "../../components";
import styled from "styled-components";

/* STYLED COMPONENTS */
const ContentArea = styled.main`
    padding: 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 6rem 0;
    }
`;

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

function Opportunities () {
    const history = useHistory();
    const applicantClick = () => history.push('/applicant');
    const contactClick = () => history.push('/contact');

    return (
        <Fragment>
            <PageTitle imageSource={"./images/jobs-hero.jpg"}>
                <PageTitle.Header>Our Jobs</PageTitle.Header>
            </PageTitle>
            <ContentArea>
                <Grid>
                    <FullWidthSection>
                        <Row ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
                            <PreTitle>Work with us.</PreTitle>
                        </Row>
                        
                        <GetJobs>
                            <Jobs applicantClick={ applicantClick } contactClick={ contactClick } />
                        </GetJobs>
                    </FullWidthSection>
                </Grid>
            </ContentArea>

            <Inquiry />
        </Fragment>
    )
}

export default Opportunities;