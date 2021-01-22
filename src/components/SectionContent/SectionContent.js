import React from "react";
import {
    Container,
    ContainerRow,
    PreTitle,
    Title,
    Text
} from "./SectionContent.elements";

function SectionContent ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

SectionContent.ContainerRow = function SectionContentContainerRow({ children, ...restProps }) {
    return (
        <ContainerRow {...restProps}>
            { children }
        </ContainerRow>
    )
}

SectionContent.PreTitle = function SectionContentPreTitle({ children, ...restProps }) {
    return (
        <PreTitle {...restProps}>
            { children }
        </PreTitle>
    )
}

SectionContent.Title = function SectionContentTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            { children }
        </Title>
    )
}

SectionContent.Text = function SectionContentText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            { children }
        </Text>
    )
}

export default SectionContent;