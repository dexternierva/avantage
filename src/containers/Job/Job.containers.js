import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import { TertiaryButton } from "../../components/Buttons";
import { Link } from "react-router-dom";
import ApplicantForm from "../../components/Formik/ApplicantForm";
import { MdArrowBack } from "react-icons/md";

import {
	PageTitle,
    SectionContent
} from "../../components";

import {
	JobWrap,
	QualificationsList,
	QualificationsListItem,
	ProgramsGrid,
	ProgramContainer,
	Program,
	ProgramTitle,
	ProgramText,
	BackNavigation
} from "./Job.containers.elements";

import JOB_QUERY from "../../queries/job/job";

const Job = () => {
	let { id } = useParams();
	let comp;
	const history = useHistory();

	return (
		<Query query={JOB_QUERY} id={id}>
			{({ data: { job } }) => {
				
				if (job.programs.length !== 0) {
					comp = <>
						<ProgramsGrid>
							<ProgramContainer>
								<SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
									<SectionContent.PreTitle>Our Programs</SectionContent.PreTitle>
								</SectionContent.ContainerRow>
								
								<Program ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
									<ProgramTitle>{job.programs[0].title}</ProgramTitle>
									<ProgramText>{job.programs[0].excerpt}</ProgramText>
									<Link to={`/programs/${job.programs[0].id}`}><TertiaryButton>Learn More</TertiaryButton></Link>
								</Program>
								<Program ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
									<ProgramTitle>{job.programs[1].title}</ProgramTitle>
									<ProgramText>{job.programs[1].excerpt}</ProgramText>
									<Link to={`/programs/${job.programs[1].id}`}><TertiaryButton>Learn More</TertiaryButton></Link>
								</Program>
								<Program ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
									<ProgramTitle>{job.programs[2].title}</ProgramTitle>
									<ProgramText>{job.programs[2].excerpt}</ProgramText>
									<Link to={`/programs/${job.programs[2].id}`}><TertiaryButton>Learn More</TertiaryButton></Link>
								</Program>
							</ProgramContainer>
						</ProgramsGrid>
					</>
				} else if (job.programs.length === 0) {
					comp = <ApplicantForm />
				}

				const imageUrl =
					process.env.NODE_ENV !== "development"
					? job.featuredImage.url
					: process.env.REACT_APP_BACKEND_URL + job.featuredImage.url;

				return (
					<>
					<PageTitle imageSource={imageUrl}>
						<PageTitle.Header>Our Jobs</PageTitle.Header>
					</PageTitle>
					
					<JobWrap>
						<SectionContent>
							<SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
								<SectionContent.PreTitle>
									<BackNavigation>
										<button onClick={() => { history.goBack(); }}><MdArrowBack size={24}/></button>
									</BackNavigation>
									Jobs
								</SectionContent.PreTitle>
							</SectionContent.ContainerRow>

							<SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
								<SectionContent.Title>{job.title}</SectionContent.Title>
								<SectionContent.Text>
									<ReactMarkdown source={job.desc} />

									<h3>Qualifications: </h3>
									<QualificationsList>
										<QualificationsListItem><b>Where:</b> {job.where}</QualificationsListItem>
										{job.companyName && <QualificationsListItem><b>For:</b> {job.companyName}</QualificationsListItem> }
										<QualificationsListItem><b>Status:</b> {job.status}</QualificationsListItem>
										<QualificationsListItem><b>Qualification:</b> {job.qualification}</QualificationsListItem>
										{job.accreditationNumber && <QualificationsListItem><b>Accre. no.:</b> {job.accreditationNumber}</QualificationsListItem> }
									</QualificationsList>
								</SectionContent.Text>
							</SectionContent.ContainerRow>
						</SectionContent>
					</JobWrap>
					
					{comp}

					</>
				);
			}}
		</Query>
	);
};

export default Job;