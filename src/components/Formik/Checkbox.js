import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled from "styled-components";

const CheckboxContainer = styled.div`
    label {
        margin-left: 1rem;
    }
`;

function Checkbox (props) {
    const { label, name, options, ...rest } = props;

    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <CheckboxContainer key={option.key}>
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </CheckboxContainer>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Checkbox;