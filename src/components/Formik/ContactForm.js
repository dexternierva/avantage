import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
import PrimaryButton from "../Buttons";
import axios from "axios";
import Alert from "../Alert/Alert";

import styled from "styled-components";

const Container = styled.div``;

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
    const [formSuccess, setFormSuccess] = useState(false);
    const [alert, setAlert] = useState(false);
    const alertisactive = alert ? " alert-active" : "";
    const alertSubject = "Message/Question";
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

    const onSubmit = async function (values, actions) {
        
        const upload_res = await axios({
            method: 'POST',
            url: 'https://avantage.dev/messages',
            data: {
                fullName: values.fullName,
                contact: values.contact,
                email: values.email,
                message: values.message
            }
        })
            .then(() => {
                setFormSuccess(true);
                setAlert(true);
                actions.resetForm();
            })
            .catch(error => {
                setFormSuccess(false);
                setAlert(true);
            });
        
        console.log("FileUpload.handleSubmit upload_res", upload_res);
    }

    return (
        <Container className={"container" + alertisactive}>
            { alert && <Alert setAlert={setAlert} alertSubject={alertSubject} formSuccess={formSuccess} /> }
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
                                    label="Contact Number" 
                                    name="contact"
                                    placeholder="09661234567"
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
        </Container>
    )
}

export default ContactForm;