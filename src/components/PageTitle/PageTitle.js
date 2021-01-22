import React from "react";
import { 
    Container,
    Header
} from "./PageTitle.elements";

function PageTitle ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            { children }
        </Container>
    )
}

PageTitle.Header = function PageTitleHeader ({ children, ...restProps }) {
    return (
        <Header {...restProps}>
            { children }
        </Header>
    )
}

export default PageTitle;

