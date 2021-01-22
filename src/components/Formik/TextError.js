import React from "react";
import styled from "styled-components";

const Error = styled.span`
    color: tomato;
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-size: 0.875em;
    font-weight: 700;
`;

function TextError (props) {
    return (
        <Error>
            {props.children}
        </Error>
    )
}

export default TextError;