import React, { useContext, Fragment } from "react";
import { JobsContext } from "../../containers/GetJobs";
import Card from "../Card/Card";
import Row from "../Layout/Row";
import PrimaryButton, { TertiaryButton } from "../Buttons";


function Job ({ id, featuredImage, title, where, companyName, status, qualification, accreditationNumber, applicantClick, contactClick }) {
    const { setJobID } = useContext(JobsContext);
    
    return (
        <Row ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
            <Card>
                <Card.Content>
                    <Card.Image>
                        <img src={`https://avantage.dev${featuredImage.url}`} alt={title} />
                    </Card.Image>
                    <Card.MainContent  fullCard={true}>
                        <Card.Title fullCard={true}>{title}</Card.Title>
                        <Card.Text>
                            <ul>
                                <li><b>Where:</b> {where}</li>
                                {companyName && <li><b>For:</b> {companyName}</li> }
                                <li><b>Status:</b> {status}</li>
                                <li><b>Qualification:</b> {qualification}</li>
                                {accreditationNumber && <li><b>Accre. no.:</b> {accreditationNumber}</li> }
                            </ul>
                        </Card.Text>
                        <Card.Cta fullCard={true}>
                            <PrimaryButton onClick={ applicantClick }>Apply for Job</PrimaryButton>
                            <TertiaryButton onClick={ contactClick }>Message Us</TertiaryButton>
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

function Jobs ({ applicantClick, contactClick }) {
    const { loading, response, error } = useContext(JobsContext);
    
    if (response !== null) {
        const jobs = response.map(job => (
            <Job
                key={job.id}
                id={job.id}
                featuredImage={job.featuredImage}
                title={job.title}
                where={job.where}
                companyName={job.companyName}
                status={job.status}
                qualification={job.qualification}
                accreditationNumber={job.accreditationNumber}
                applicantClick={applicantClick}
                contactClick={contactClick}
            />
        ))
        
        return (jobs);
    }

    return (
        <Fragment>
            { loading && <h4>Loading</h4> }
            { error && "Something went wrong, please try again later" }
        </Fragment>
    )
}

export default Jobs;