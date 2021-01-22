import React from "react";
import { SectionHeaderContainer, PreTitle, Title } from "./SectionHeader.elements";

function SectionHeader ({ children, ...restProps }) {
    return (
        <SectionHeaderContainer {...restProps}>
            { children }
        </SectionHeaderContainer>
    )
}

SectionHeader.PreTitle = function SectionHeaderPreTitle({ children, ...restProps }) {
    return (
        <PreTitle {...restProps}>
            { children }
        </PreTitle>
    )
}

SectionHeader.Title = function SectionHeaderTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            { children }
        </Title>
    )
}


export default SectionHeader;