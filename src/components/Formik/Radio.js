import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    label {
        display: block;
        margin-top: 0;
    }

    span {
        display: inline-block;
        margin-top: .125rem;
        margin-left: 1rem;
    }

    @media screen and (min-width: 768px) {
        justify-content: flex-start;

        input {
            margin-left: 3rem;
        }
    }
`;

const RadioContainer = styled.div`
    display: flex;
    align-items: center;

    label {
        margin-top: 0;
        margin-left: 1rem;
    }
`;

function Radio (props) {
    const { label, name, options, ...rest } = props;

    return (
        <Container>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <RadioContainer key={option.key}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </RadioContainer>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </Container>
    )
}

export default Radio;