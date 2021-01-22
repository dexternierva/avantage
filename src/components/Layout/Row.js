import styled from "styled-components";

const Row = styled.div`
    grid-column-start: ${(props) => (props.sd ? props.sd : "1")};
    grid-column-end: span ${(props) => (props.ed ? props.ed : "12")};

    @media ${(props) => props.theme.breakpoints.medium} {
        grid-column-start: ${(props) => (props.sm ? props.sm : "1")};
        grid-column-end: span ${(props) => (props.em ? props.em : "6")};
    }

    @media ${(props) => props.theme.breakpoints.small} {
        grid-column-start: ${(props) => (props.ss ? props.ss : "1")};
        grid-column-end: span ${(props) => (props.es ? props.es : "6")};
    }
`;

export default Row;
