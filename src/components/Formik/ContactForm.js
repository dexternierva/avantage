import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
import PrimaryButton from "../Buttons";
import styled from "styled-components";

const Fieldset = styled.div`
    @media screen and (min-width: 991px) {
        display: flex;
        justify-content: space-between;

        > div {
            width: 31%;
        }
    }
`;

function ContactForm () {
    const [ agree, setAgree ] = useState(false);
    const checkboxHandler = function () {
        setAgree(!agree);
    }

    const initialValues = {
        fullName: '',
        contact: '',
        email: '',
        message: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Required').min(2, 'Must be atleast 2 characters'),
        contact: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        message: Yup.string().required('Required')
    });

    const onSubmit = function (values, actions) {
        // console.log('Form data', JSON.stringify(values, null, 2));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: values.fullName,
                contact: values.contact,
                email: values.email,
                message: values.message
            })
        };

        fetch('http://68.183.226.128/messages', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .then(() => {
                alert('Form has been successfully submitted. Thank you very much!');
                actions.resetForm();
            })
            .catch(error => {
                alert('There was an error. Please try again later');
                console.error('There was an error!', error);
            });
    }

    return (
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
                                control="input" 
                                type="text" 
                                label="Full Name" 
                                name="fullName"
                                placeholder="Full Name" 
                            />
                            <FormikControl 
                                control="input" 
                                type="tel"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" 
                                label="Contact Number" 
                                name="contact"
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
                            control="textarea"
                            label="Message / Questions"
                            name="message"
                        />

                        <Fieldset>
                            <label htmlFor="agree"> 
                                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                I agree to the <b>terms and conditions</b> and the <b>privacy policy.</b>
                            </label>
                        </Fieldset>

                        <p>The company will collect personal information from you whenever you contact us for inquiries or requests through our website. Personal information, which will be collected includes Full name, email address, contact number, date of birth, address, CV, certificates etc. For employer inquiries, personal information, which will be collected additionally includes: company name, company address etc.</p>

                        <PrimaryButton type="submit" disabled={!agree}>Submit Form</PrimaryButton>
                    </Form>
            }
        </Formik>
    )
}

export default ContactForm;