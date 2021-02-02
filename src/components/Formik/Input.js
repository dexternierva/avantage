import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import styled from "styled-components";
const FormControl = styled.div``;

function Input (props) {
    const { label, name, ...rest} = props;

    return (
        <FormControl>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </FormControl>
    );
}

export default Input;