import React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import ApplicantForm from "../../components/Formik/ApplicantForm";
import { Grid, FullWidthSection, Row } from "../../components";
import { MdArrowBack } from "react-icons/md";

import {
	PageTitle,
    SectionContent,
} from "../../components";

import {
	ProgramWrap,
	ConditionsList,
	ConditionsListItem,
	BackNavigation
} from "./Program.containers.elements";

import PROGRAM_QUERY from "../../queries/program/program";

function Program () {
	let { id } = useParams();
	const history = useHistory();
    
	return (
		<Query query={PROGRAM_QUERY} id={id}>
			{({ data: { program } }) => {
			
			const imageUrl =
			process.env.NODE_ENV !== "development"
			? program.featuredImage.url
			: process.env.REACT_APP_BACKEND_URL + program.featuredImage.url;

				return (
					<>
                    <PageTitle imageSource={imageUrl}>
                        <PageTitle.Header>Career Programs for registered nurses bound for Germany</PageTitle.Header>
                    </PageTitle>

					<ProgramWrap>
						<SectionContent>
							<SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={2} ed={2}>
								<SectionContent.PreTitle>
									<BackNavigation>
										<button onClick={() => { history.goBack(); }}><MdArrowBack size={24}/></button>
									</BackNavigation>
									Programs
								</SectionContent.PreTitle>
							</SectionContent.ContainerRow>
							<SectionContent.ContainerRow ss={2} es={6} sm={2} em={6} sd={6} ed={8}>
								<SectionContent.Title>{program.title}</SectionContent.Title>
								<SectionContent.Text>
									<ReactMarkdown source={program.details} />
								</SectionContent.Text>
							</SectionContent.ContainerRow>
						</SectionContent>
					</ProgramWrap>

                    <ApplicantForm />

					<Grid>
						<FullWidthSection>
							<Row ss={2} es={6} sm={2} em={6} sd={2} ed={10}>
								<ConditionsList>
									<ConditionsListItem>* Dependent on the licensure test performance of the nurse and the processing time at the respective license issuing authority in Germany.</ConditionsListItem>
									<ConditionsListItem>** Dependent on the individual qualification of the applicant with reference to the requirements of the license issuing authority in Germany.</ConditionsListItem>
								</ConditionsList>
							</Row>
						</FullWidthSection>
					</Grid>
					</>
				);
			}}
		</Query>
	);
};

export default Program;