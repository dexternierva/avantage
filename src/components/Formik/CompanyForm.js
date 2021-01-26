import React, { useState } from "react";
import { Formik, Form, yupToFormErrors } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';
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

function CompanyForm () {
    const digitsOnly = (value) => /^\d+$/.test(value);

    const [ agree, setAgree ] = useState(false);
    const checkboxHandler = function () {
        setAgree(!agree);
    }

    const titleOptions = [
        { key: 'Mr.', value: 'mr' },
        { key: 'Ms.', value: 'ms' }
    ];

    const countries = [
        {key: "Select Your Country", value: ''},
        {key: "Afghanistan", value: "AF"},
        {key: "Åland Islands", value: "AX"},
        {key: "Albania", value: "AL"},
        {key: "Algeria", value: "DZ"},
        {key: "American Samoa", value: "AS"},
        {key: "AndorrA", value: "AD"},
        {key: "Angola", value: "AO"},
        {key: "Anguilla", value: "AI"},
        {key: "Antarctica", value: "AQ"},
        {key: "Antigua and Barbuda", value: "AG"},
        {key: "Argentina", value: "AR"},
        {key: "Armenia", value: "AM"},
        {key: "Aruba", value: "AW"},
        {key: "Australia", value: "AU"},
        {key: "Austria", value: "AT"},
        {key: "Azerbaijan", value: "AZ"},
        {key: "Bahamas", value: "BS"},
        {key: "Bahrain", value: "BH"},
        {key: "Bangladesh", value: "BD"},
        {key: "Barbados", value: "BB"},
        {key: "Belarus", value: "BY"},
        {key: "Belgium", value: "BE"},
        {key: "Belize", value: "BZ"},
        {key: "Benin", value: "BJ"},
        {key: "Bermuda", value: "BM"},
        {key: "Bhutan", value: "BT"},
        {key: "Bolivia", value: "BO"},
        {key: "Bosnia and Herzegovina", value: "BA"},
        {key: "Botswana", value: "BW"},
        {key: "Bouvet Island", value: "BV"},
        {key: "Brazil", value: "BR"},
        {key: "British Indian Ocean Territory", value: "IO"},
        {key: "Brunei Darussalam", value: "BN"},
        {key: "Bulgaria", value: "BG"},
        {key: "Burkina Faso", value: "BF"},
        {key: "Burundi", value: "BI"},
        {key: "Cambodia", value: "KH"},
        {key: "Cameroon", value: "CM"},
        {key: "Canada", value: "CA"},
        {key: "Cape Verde", value: "CV"},
        {key: "Cayman Islands", value: "KY"},
        {key: "Central African Republic", value: "CF"},
        {key: "Chad", value: "TD"},
        {key: "Chile", value: "CL"},
        {key: "China", value: "CN"},
        {key: "Christmas Island", value: "CX"},
        {key: "Cocos (Keeling) Islands", value: "CC"},
        {key: "Colombia", value: "CO"},
        {key: "Comoros", value: "KM"},
        {key: "Congo", value: "CG"},
        {key: "Congo, The Democratic Republic of the", value: "CD"},
        {key: "Cook Islands", value: "CK"},
        {key: "Costa Rica", value: "CR"},
        {key: "Cote D'Ivoire", value: "CI"},
        {key: "Croatia", value: "HR"},
        {key: "Cuba", value: "CU"},
        {key: "Cyprus", value: "CY"},
        {key: "Czech Republic", value: "CZ"},
        {key: "Denmark", value: "DK"},
        {key: "Djibouti", value: "DJ"},
        {key: "Dominica", value: "DM"},
        {key: "Dominican Republic", value: "DO"},
        {key: "Ecuador", value: "EC"},
        {key: "Egypt", value: "EG"},
        {key: "El Salvador", value: "SV"},
        {key: "Equatorial Guinea", value: "GQ"},
        {key: "Eritrea", value: "ER"},
        {key: "Estonia", value: "EE"},
        {key: "Ethiopia", value: "ET"},
        {key: "Falkland Islands (Malvinas)", value: "FK"},
        {key: "Faroe Islands", value: "FO"},
        {key: "Fiji", value: "FJ"},
        {key: "Finland", value: "FI"},
        {key: "France", value: "FR"},
        {key: "French Guiana", value: "GF"},
        {key: "French Polynesia", value: "PF"},
        {key: "French Southern Territories", value: "TF"},
        {key: "Gabon", value: "GA"},
        {key: "Gambia", value: "GM"},
        {key: "Georgia", value: "GE"},
        {key: "Germany", value: "DE"},
        {key: "Ghana", value: "GH"},
        {key: "Gibraltar", value: "GI"},
        {key: "Greece", value: "GR"},
        {key: "Greenland", value: "GL"},
        {key: "Grenada", value: "GD"},
        {key: "Guadeloupe", value: "GP"},
        {key: "Guam", value: "GU"},
        {key: "Guatemala", value: "GT"},
        {key: "Guernsey", value: "GG"},
        {key: "Guinea", value: "GN"},
        {key: "Guinea-Bissau", value: "GW"},
        {key: "Guyana", value: "GY"},
        {key: "Haiti", value: "HT"},
        {key: "Heard Island and Mcdonald Islands", value: "HM"},
        {key: "Holy See (Vatican City State)", value: "VA"},
        {key: "Honduras", value: "HN"},
        {key: "Hong Kong", value: "HK"},
        {key: "Hungary", value: "HU"},
        {key: "Iceland", value: "IS"},
        {key: "India", value: "IN"},
        {key: "Indonesia", value: "ID"},
        {key: "Iran, Islamic Republic Of", value: "IR"},
        {key: "Iraq", value: "IQ"},
        {key: "Ireland", value: "IE"},
        {key: "Isle of Man", value: "IM"},
        {key: "Israel", value: "IL"},
        {key: "Italy", value: "IT"},
        {key: "Jamaica", value: "JM"},
        {key: "Japan", value: "JP"},
        {key: "Jersey", value: "JE"},
        {key: "Jordan", value: "JO"},
        {key: "Kazakhstan", value: "KZ"},
        {key: "Kenya", value: "KE"},
        {key: "Kiribati", value: "KI"},
        {key: "Korea, Democratic People'S Republic of", value: "KP"},
        {key: "Korea, Republic of", value: "KR"},
        {key: "Kuwait", value: "KW"},
        {key: "Kyrgyzstan", value: "KG"},
        {key: "Lao People'S Democratic Republic", value: "LA"},
        {key: "Latvia", value: "LV"},
        {key: "Lebanon", value: "LB"},
        {key: "Lesotho", value: "LS"},
        {key: "Liberia", value: "LR"},
        {key: "Libyan Arab Jamahiriya", value: "LY"},
        {key: "Liechtenstein", value: "LI"},
        {key: "Lithuania", value: "LT"},
        {key: "Luxembourg", value: "LU"},
        {key: "Macao", value: "MO"},
        {key: "Macedonia, The Former Yugoslav Republic of", value: "MK"},
        {key: "Madagascar", value: "MG"},
        {key: "Malawi", value: "MW"},
        {key: "Malaysia", value: "MY"},
        {key: "Maldives", value: "MV"},
        {key: "Mali", value: "ML"},
        {key: "Malta", value: "MT"},
        {key: "Marshall Islands", value: "MH"},
        {key: "Martinique", value: "MQ"},
        {key: "Mauritania", value: "MR"},
        {key: "Mauritius", value: "MU"},
        {key: "Mayotte", value: "YT"},
        {key: "Mexico", value: "MX"},
        {key: "Micronesia, Federated States of", value: "FM"},
        {key: "Moldova, Republic of", value: "MD"},
        {key: "Monaco", value: "MC"},
        {key: "Mongolia", value: "MN"},
        {key: "Montserrat", value: "MS"},
        {key: "Morocco", value: "MA"},
        {key: "Mozambique", value: "MZ"},
        {key: "Myanmar", value: "MM"},
        {key: "Namibia", value: "NA"},
        {key: "Nauru", value: "NR"},
        {key: "Nepal", value: "NP"},
        {key: "Netherlands", value: "NL"},
        {key: "Netherlands Antilles", value: "AN"},
        {key: "New Caledonia", value: "NC"},
        {key: "New Zealand", value: "NZ"},
        {key: "Nicaragua", value: "NI"},
        {key: "Niger", value: "NE"},
        {key: "Nigeria", value: "NG"},
        {key: "Niue", value: "NU"},
        {key: "Norfolk Island", value: "NF"},
        {key: "Northern Mariana Islands", value: "MP"},
        {key: "Norway", value: "NO"},
        {key: "Oman", value: "OM"},
        {key: "Pakistan", value: "PK"},
        {key: "Palau", value: "PW"},
        {key: "Palestinian Territory, Occupied", value: "PS"},
        {key: "Panama", value: "PA"},
        {key: "Papua New Guinea", value: "PG"},
        {key: "Paraguay", value: "PY"},
        {key: "Peru", value: "PE"},
        {key: "Philippines", value: "PH"},
        {key: "Pitcairn", value: "PN"},
        {key: "Poland", value: "PL"},
        {key: "Portugal", value: "PT"},
        {key: "Puerto Rico", value: "PR"},
        {key: "Qatar", value: "QA"},
        {key: "Reunion", value: "RE"},
        {key: "Romania", value: "RO"},
        {key: "Russian Federation", value: "RU"},
        {key: "RWANDA", value: "RW"},
        {key: "Saint Helena", value: "SH"},
        {key: "Saint Kitts and Nevis", value: "KN"},
        {key: "Saint Lucia", value: "LC"},
        {key: "Saint Pierre and Miquelon", value: "PM"},
        {key: "Saint Vincent and the Grenadines", value: "VC"},
        {key: "Samoa", value: "WS"},
        {key: "San Marino", value: "SM"},
        {key: "Sao Tome and Principe", value: "ST"},
        {key: "Saudi Arabia", value: "SA"},
        {key: "Senegal", value: "SN"},
        {key: "Serbia and Montenegro", value: "CS"},
        {key: "Seychelles", value: "SC"},
        {key: "Sierra Leone", value: "SL"},
        {key: "Singapore", value: "SG"},
        {key: "Slovakia", value: "SK"},
        {key: "Slovenia", value: "SI"},
        {key: "Solomon Islands", value: "SB"},
        {key: "Somalia", value: "SO"},
        {key: "South Africa", value: "ZA"},
        {key: "South Georgia and the South Sandwich Islands", value: "GS"},
        {key: "Spain", value: "ES"},
        {key: "Sri Lanka", value: "LK"},
        {key: "Sudan", value: "SD"},
        {key: "Suriname", value: "SR"},
        {key: "Svalbard and Jan Mayen", value: "SJ"},
        {key: "Swaziland", value: "SZ"},
        {key: "Sweden", value: "SE"},
        {key: "Switzerland", value: "CH"},
        {key: "Syrian Arab Republic", value: "SY"},
        {key: "Taiwan, Province of China", value: "TW"},
        {key: "Tajikistan", value: "TJ"},
        {key: "Tanzania, United Republic of", value: "TZ"},
        {key: "Thailand", value: "TH"},
        {key: "Timor-Leste", value: "TL"},
        {key: "Togo", value: "TG"},
        {key: "Tokelau", value: "TK"},
        {key: "Tonga", value: "TO"},
        {key: "Trinidad and Tobago", value: "TT"},
        {key: "Tunisia", value: "TN"},
        {key: "Turkey", value: "TR"},
        {key: "Turkmenistan", value: "TM"},
        {key: "Turks and Caicos Islands", value: "TC"},
        {key: "Tuvalu", value: "TV"},
        {key: "Uganda", value: "UG"},
        {key: "Ukraine", value: "UA"},
        {key: "United Arab Emirates", value: "AE"},
        {key: "United Kingdom", value: "GB"},
        {key: "United States", value: "US"},
        {key: "United States Minor Outlying Islands", value: "UM"},
        {key: "Uruguay", value: "UY"},
        {key: "Uzbekistan", value: "UZ"},
        {key: "Vanuatu", value: "VU"},
        {key: "Venezuela", value: "VE"},
        {key: "Viet Nam", value: "VN"},
        {key: "Virgin Islands, British", value: "VG"},
        {key: "Virgin Islands, U.S.", value: "VI"},
        {key: "Wallis and Futuna", value: "WF"},
        {key: "Western Sahara", value: "EH"},
        {key: "Yemen", value: "YE"},
        {key: "Zambia", value: "ZM"},
        {key: "Zimbabwe", value: "ZW"}
    ];

    const initialValues = {
        title: '',
        completeName: '',
        email: '',
        companyName: '',
        contactNumber: '',
        companyAddress: '',
        categories: '',
        numberOfNeededWorkers: '',
        country: '',
        inquiry: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        completeName: Yup.string().required('Required'),
        email: Yup.string().email().required('Required'),
        companyName: Yup.string().required('Required'),
        contactNumber: Yup.string().required('Required'),
        companyAddress: Yup.string().required('Required'),
        categories: Yup.string().required('Required'),
        numberOfNeededWorkers: Yup.string().required('Required').test('Digits only', 'The field should have digits only', digitsOnly),
        country: Yup.string().required('Required'),
        inquiry: Yup.string().required('Required'),
    });

    const onSubmit = function (values, actions) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: values.title,
                completeName: values.completeName,
                email: values.email,
                companyName: values.companyName,
                contactNumber: values.contactNumber,
                companyAddress: values.companyAddress,
                categories: values.categories,
                numberOfNeededWorkers: values.numberOfNeededWorkers,
                country: values.country,
                inquiry: values.inquiry
            })
        };

        fetch('http://139.59.119.121/employers', requestOptions)
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
                alert("Form has been successfully submitted. Thank you very much!");
                actions.resetForm();
            })
            .catch(error => {
                alert('There was an error. Please try again later');
                console.error('There was an error!', error);
            });
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
                                    <FormikControl 
                                        control="radio" 
                                        label="Title"
                                        name="title"
                                        options={titleOptions}
                                    />
                                    <Fieldset>
                                        <FormikControl 
                                            control="input" 
                                            type="text" 
                                            label="Complete Name of Inquirer" 
                                            name="completeName"
                                            placeholder="John Doe" 
                                        />
                                        <FormikControl 
                                            control="input" 
                                            type="email" 
                                            label="Email" 
                                            name="email" 
                                            placeholder="johndoe@gmail.com"
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <FormikControl 
                                            control="input"
                                            type="text"
                                            label="Company Name"
                                            name="companyName"
                                            placeholder="Complete Company Name"
                                        />
                                        <FormikControl 
                                            control="input"
                                            type="tel"
                                            label="Contact Number"
                                            name="contactNumber"
                                            placeholder=""
                                        />
                                    </Fieldset>
                                    <FormikControl 
                                        control="textarea"
                                        label="Address"
                                        name="companyAddress"
                                        placeholder="Enter complete company address here."
                                    />
                                    <FormikControl 
                                        control="input"
                                        type="text"
                                        label="Categories of Needed Workers / Employees"
                                        name="categories"
                                        placeholder="Nurse, Caregiver, Teacher"
                                    />
                                    <FormikControl 
                                        control="input"
                                        type="number"
                                        label="Number of Workers / Employees Needed"
                                        name="numberOfNeededWorkers"
                                        min="1"
                                    />
                                    <FormikControl 
                                        control="select"
                                        label="Country"
                                        name="country"
                                        options={countries}
                                    />
                                    <FormikControl 
                                        control="textarea"
                                        label="Inquiry"
                                        name="inquiry"
                                        placeholder="Please enter you inquiry here."
                                    />

                                    <Fieldset>
                                        <label htmlFor="agree"> 
                                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                            I agree to the <b>terms and conditions</b> and the <b>privacy policy.</b>
                                        </label>
                                    </Fieldset>

                                    <br />

                                    <PrimaryButton type="submit" disabled={!agree}>Submit Inquiry</PrimaryButton>
                                </Form>
                        }
                    </Formik>
                </Row>
            </FullWidthSection>
        </Container>
    )
}

export default CompanyForm;