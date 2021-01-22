import React, { forwardRef } from "react";
import { Formik, Form, yupToFormErrors } from "formik";
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

    const agreementOptions = [
        { key: "I have read and accepted the Terms of Use and Privacy Policy", value: "agree" },
        { key: "Subscribe to newsletter", value: "subscribe" }
    ];

    const initialValues = {
        name: '',
        contact: '',
        email: '',
        message: '',
        agreement: []
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required').min(2, 'Must be atleast 2 characters'),
        contact: Yup.string().required('Required').matches(/(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/, "Must only be digits"),
        email: Yup.string().email().required('Required'),
        message: Yup.string().required('Required'),
        agreement: Yup.array().required('Required')
    });

    const onSubmit = values => console.log('Form data', values);

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
                                name="name"
                                placeholder="Full Name" 
                            />
                            <FormikControl 
                                control="input" 
                                type="tel"
                                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" 
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

                        <FormikControl 
                            control="checkbox"
                            label=""
                            name="agreement"
                            options={agreementOptions}
                        />

                        <p>The company will collect personal information from you whenever you contact us for inquiries or requests through our website. Personal information, which will be collected includes Full name, email address, contact number, date of birth, address, CV, certificates etc. For employer inquiries, personal information, which will be collected additionally includes: company name, company address etc.</p>

                        <PrimaryButton type="submit">Submit Message</PrimaryButton>
                    </Form>
            }
        </Formik>
    )
}

export default ContactForm;