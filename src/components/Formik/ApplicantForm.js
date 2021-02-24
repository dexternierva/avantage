import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext, useField } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
import PrimaryButton from "../Buttons";
import { Grid, FullWidthSection, Row } from "../Layout";
import styled from "styled-components";
import TextError from "./TextError";
import axios from "axios";

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

let now = new Date();
let randomNum = '';
randomNum += Math.round(Math.random()*9);
randomNum += Math.round(Math.random()*9);
randomNum += now.getTime();

const PatField = (props) => {
    const {
      values: { trainingLocation },
      touched,
      setFieldValue,
    } = useFormikContext();

    const [field, meta] = useField(props);
  
    React.useEffect(() => {
      if ( trainingLocation.trim() !== '' && touched.trainingLocation ) {
        const val = trainingLocation.trim();
        const res = val.replace(/\s+/g, '').toUpperCase() + randomNum;
        setFieldValue(props.name, `${res}`);
      }
    }, [trainingLocation, touched.trainingLocation, setFieldValue, props.name]);
  
    return (
      <>
        <input {...props} {...field} />
        {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
      </>
    );
};

function ApplicantForm () {
    const [cv, setCv] = useState(null);
    const handleChange = (event) => { setCv(event.target.files[0]); }

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
        { key: 'Yes', value: 'Yes' },
        { key: 'No', value: 'No' }
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
        inquiryPurpose: '',
        pat: '',
        acceptTerms: false
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
        address: Yup.string().required('Required'),
        pat: Yup.string(),
        registrationPurpose: Yup.string().when('jobApplyingFor', {
            is: 'Nurse For Germany',
            then: Yup.string().required('Required'),
            otherwise: Yup.string()
        }),
        trainingLocation: Yup.string().when('jobApplyingFor', {
            is: 'Nurse For Germany' || 'Caregiver For Canada',
            then: Yup.string().required('Required'),
            otherwise: Yup.string()
        }),
        licenseNumber: Yup.string().when('jobApplyingFor', {
            is: 'Nurse For Germany',
            then: Yup.string().required('Required'),
            otherwise: Yup.string()
        }),
        inquiryPurpose: Yup.string().when('jobApplyingFor', {
            is: 'Other Professions',
            then: Yup.string(),
            otherwise: Yup.string()
        }),
        acceptTerms: Yup.bool().oneOf([true], ' You must accept terms and conditions!')
    });
    
    const onSubmit = async function (values, actions) {
        const data = new FormData();
        data.append('files.cv', cv);
        
        const info = {
            'survey': values.survey,
            'lastName': values.lastName,
            'firstName': values.firstName,
            'middleName': values.middleName,
            'birthDate': values.birthDate,
            'messenger': values.messenger,
            'phoneNumber': values.phoneNumber,
            'email': values.email,
            'workingAbroad': values.workingAbroad,
            'jobApplyingFor': values.jobApplyingFor,
            'registrationPurpose': values.registrationPurpose,
            'address': values.address,
            'trainingLocation': values.trainingLocation,
            'licenseNumber': values.licenseNumber,
            'inquiryPurpose': values.inquiryPurpose,
            'acceptTerms': values.acceptTerms,
            'pat': values.pat
        }
        data.append('data', JSON.stringify(info));

        const upload_res = await axios({
            method: 'POST',
            url: 'https://avantage.dev/applicants',
            data
        })
            .then(() => {
                alert("Form has been successfully submitted. Thank you very much!");
                actions.resetForm();
            })
            .catch(error => {
                alert('There was an error. Please try again later');
                console.error('There was an error!', error);
            });

        console.log("FileUpload.handleSubmit upload_res", upload_res);
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

                                    {(() => {
                                        switch (formik.values.jobApplyingFor) {
                                            case "Nurse For Germany": return (
                                                <>
                                                <FormikControl 
                                                    control="select"
                                                    label="Purpose of Registration"
                                                    name="registrationPurpose"
                                                    options={registrationPurposeOptions}
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
                                                </>
                                            );
                                            case "Caregiver For Canada": return (
                                                <FormikControl 
                                                    control="select"
                                                    label="Preferred Training Location"
                                                    name="trainingLocation"
                                                    options={trainingLocationOptions}
                                                />
                                            );
                                            case "Other Professions" : return (
                                                <FormikControl 
                                                    control="textarea"
                                                    label="Please Enter Purpose Of Inquiry"
                                                    name="inquiryPurpose"
                                                />
                                            );
                                            default: return null;
                                        }
                                    })()}

                                    <FormikControl 
                                        control="textarea"
                                        label="Address"
                                        name="address"
                                    />
                                    
                                    <label>Upload CV
                                        <input onChange={handleChange} type="file" name="cv" id="cv" />
                                    </label>

                                    <Fieldset>
                                        <label htmlFor="acceptTerms" className="form-check-label">
                                            <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (formik.errors.acceptTerms && formik.touched.acceptTerms ? ' is-invalid' : '')} />
                                            I agree to the terms and conditions and the privacy policy. 
                                            <ErrorMessage name="acceptTerms" component={TextError} />
                                        </label>
                                    </Fieldset>

                                    <p>I hereby give my consent to A-Vantage International Recruitment Corp. to use my profile or personal data for my application for employment abroad. The company will collect personal information from you whenever you contact us for inquiries or requests through our website. Personal information, which will be collected includes Full name, email address, contact number, date of birth, address, CV, certificates etc.</p>

                                    <PatField name="pat" type="hidden" />

                                    <PrimaryButton type="submit" disabled={!formik.values.acceptTerms}>Submit Application</PrimaryButton>
                                </Form>
                        }
                    </Formik>
                </Row>
            </FullWidthSection>
        </Container>
    )
}

export default ApplicantForm;