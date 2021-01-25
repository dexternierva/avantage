import React, { forwardRef, useState } from "react";
import { Formik, Form, yupToFormErrors } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
import Uploady from "@rpldy/uploady";
import UploadButton, { asUploadButton } from "@rpldy/upload-button";
import PrimaryButton from "../Buttons";
import { Grid, FullWidthSection, Row } from "../Layout";
import styled from "styled-components";

const Container = styled(Grid)`
    padding: 1.5rem 0 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 4.5rem 0 6rem 0;
    }
`;  

const Fieldset = styled.div`
    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;

        > div {
            width: 48%;
        }
    }
`;

const CustomUploadButton = asUploadButton(forwardRef(
    (props, ref) =>
        <button {...props} 
            style={{ 
                cursor: "pointer",
                padding: "16px 24px",
                fontSize: "1em",
                borderRadius: "2px",
                marginTop: "1.5rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #41B332",
                color: "#41B332"
            }}
        >
            Upload Your CV
        </button>
));

function ApplicantForm () {
    const [ agree, setAgree ] = useState(false);

    const checkboxHandler = function () {
        setAgree(!agree);
    }

    const surveyOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Facebook', value: 'facebook' },
        { key: 'Friends', value: 'friends' },
        { key: 'Newspaper', value: 'newspaper' },
        { key: 'Radio Advertisement', value: 'radio' },
        { key: 'TV Advertisement', value: 'tv' },
        { key: 'Walk-in', value: 'walk-in' },
        { key: 'Website', value: 'website' },
        { key: 'Work Abroad', value: 'workabroad' }
    ];

    const jobApplyingOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Nurse For Germany', value: 'Nurse For Germany' },
        { key: 'Caregiver For Canada', value: 'Caregiver For Canada' },
        { key: 'Other Professions', value: 'Other Professions' }
    ];

    const registrationPurposeOptions = [
        { key: 'Select an option', value: '' },
        { key: 'German Language Scholarship A1 to B2 and German Nursing Licensure Preparatory Course', value: 'German Language Scholarship A1 to B2 and German Nursing Licensure Preparatory Course' },
        { key: 'German Nursing Licensure Preparatory Course for B1 and B2 passers', value: 'German Nursing Licensure Preparatory Course for B1 and B2 passers' },
        { key: 'Scholarship for B2 Refresher Course', value: 'Scholarship for B2 Refresher Course' }
    ];

    const trainingLocationOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Baguio City', value: 'Baguio City' },
        { key: 'Cebu City', value: 'Cebu City' },
        { key: 'Iloilo City', value: 'Iloilo City' },
        { key: 'Ortigas', value: 'Ortigas' },
        { key: 'Quezon City', value: 'Quezon City' }
    ];

    const workingAbroadOptions = [
        { key: 'Yes', value: 'yes' },
        { key: 'No', value: 'no' }
    ];

    const initialValues = {
        survey: '',
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: null,
        messenger: '',
        phoneNumber: '',
        email: '',
        workingAbroad: '',
        jobApplyingFor: '',
        registrationPurpose: '',
        address: '',
        trainingLocation: '',
        licenseNumber: '',
    };

    const validationSchema = Yup.object({
        survey: Yup.string().required('Required'),
        lastName: Yup.string().required('Required').min(2, 'Must be atleast 2 characters'),
        firstName: Yup.string().required('Required').min(2, 'Must be atleast 2 characters'),
        middleName: Yup.string(),
        birthDate: Yup.date().required('Required').nullable(),
        messenger: Yup.string().required('Required'),
        phoneNumber: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        workingAbroad: Yup.string().required('Required'),
        jobApplyingFor: Yup.string().required('Required'),
        registrationPurpose: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        trainingLocation: Yup.string().required('Required'),
        licenseNumber: Yup.string().required('Required'),
    });

    const onSubmit = function (values, actions) {
        // console.log('Form data', JSON.stringify(values, null, 2));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                survey: values.survey,
                lastName: values.lastName,
                firstName: values.firstName,
                middleName: values.middleName,
                birthDate: values.birthDate,
                messenger: values.messenger,
                phoneNumber: values.phoneNumber,
                email: values.email,
                workingAbroad: values.workingAbroad,
                jobApplyingFor: values.jobApplyingFor,
                registrationPurpose: values.registrationPurpose,
                address: values.address,
                trainingLocation: values.trainingLocation,
                licenseNumber: values.licenseNumber
            })
        };

        fetch('http://139.59.126.209/applicants', requestOptions)
            .then(async response => {
                const data = await response.json();

                // Check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .then(() => { 
                alert("Form has been successfully submitted! Thank you  very much!");
                actions.resetForm(); 
            })
            .catch(error => {
                alert('There was an error. Please try again later');
                console.error('There was an error!', error);
            })
    }

    return (
        <Container>
            <FullWidthSection>
                <Row ss={2} se={6} sm={2} em={6} sd={2} ed={12}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {
                            formik => 
                                <Form>
                                    <Fieldset>
                                        <FormikControl 
                                            control="select"
                                            label="How did you learn about us?"
                                            name="survey"
                                            options={surveyOptions}
                                        />
                                        <FormikControl 
                                            control="input" 
                                            type="text" 
                                            label="Last Name" 
                                            name="lastName"
                                            placeholder="Last Name" 
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <FormikControl 
                                            control="input" 
                                            type="text" 
                                            label="First Name" 
                                            name="firstName" 
                                            placeholder="First Name"
                                        />
                                        <FormikControl 
                                            control="input" 
                                            type="text" 
                                            label="Middle Name" 
                                            name="middleName" 
                                            placeholder="Middle Name"
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <FormikControl 
                                            control="date"
                                            label="Date Of Birth"
                                            name="birthDate"
                                            placeholder="01/01/2021"
                                        />
                                        <FormikControl
                                            control="input"
                                            type="text"
                                            label="FB Messenger Name"
                                            name="messenger"
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <FormikControl 
                                            control="input" 
                                            type="tel"
                                            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" 
                                            label="Phone Number" 
                                            name="phoneNumber"
                                            placeholder="0966-123-4567"
                                        />
                                        <FormikControl 
                                            control="input" 
                                            type="email" 
                                            label="Email" 
                                            name="email" 
                                            placeholder="johndoe@gmail.com"
                                        />
                                    </Fieldset>
                                    <FormikControl 
                                        control="radio" 
                                        label="Currently Working Abroad?"
                                        name="workingAbroad"
                                        options={workingAbroadOptions}
                                    />
                                    <FormikControl 
                                        control="select"
                                        label="Job Applying For"
                                        name="jobApplyingFor"
                                        options={jobApplyingOptions}
                                    />
                                    <FormikControl 
                                        control="select"
                                        label="Purpose of Registration"
                                        name="registrationPurpose"
                                        options={registrationPurposeOptions}
                                    />
                                    <FormikControl 
                                        control="textarea"
                                        label="Address"
                                        name="address"
                                    />
                                    <Fieldset>
                                        <FormikControl 
                                            control="select"
                                            label="Preferred Training Location"
                                            name="trainingLocation"
                                            options={trainingLocationOptions}
                                        />
                                        <FormikControl 
                                            control="input" 
                                            type="text" 
                                            label="Philippine PRC License Number"
                                            name="licenseNumber" 
                                            placeholder="only Filipino applicants are eligible"
                                        />
                                    </Fieldset>

                                    <Uploady destination={{ url: "https://my-server.com/upload" }}>
                                        <CustomUploadButton />
                                    </Uploady>

                                    <Fieldset>
                                        <label htmlFor="agree"> 
                                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                            I agree to the <b>terms and conditions</b> and the <b>privacy policy.</b>
                                        </label>
                                    </Fieldset>

                                    <p>The company will collect personal information from you whenever you contact us for inquiries or requests through our website. Personal information, which will be collected includes Full name, email address, contact number, date of birth, address, CV, certificates etc. For employer inquiries, personal information, which will be collected additionally includes: company name, company address etc.</p>

                                    <PrimaryButton type="submit" disabled={!agree}>Submit Application</PrimaryButton>
                                </Form>
                        }
                    </Formik>
                </Row>
            </FullWidthSection>
        </Container>
    )
}

export default ApplicantForm;