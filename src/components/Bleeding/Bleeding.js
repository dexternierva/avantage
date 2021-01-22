import React from "react";
import Grid from "../Layout/Grid";
import {
    Container,
    Primary,
    PrimaryContent,
    Secondary,
    SecondaryContent,
    ContentIcon,
    ContentHeader,
    ContentText
} from "./Bleeding.elements";

function Bleeding ({ children, ...restProps }) {
    return (
        <Grid {...restProps}>
            { children }
        </Grid>
    )
}

Bleeding.Container = function BleedingContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            { children }
        </Container>
    )
}

Bleeding.Primary = function BleedingPrimary({ children, ...restProps }) {
    return (
        <Primary {...restProps}>
            { children }
        </Primary>
    )
}

Bleeding.PrimaryContent = function BleedingPrimaryContent({ children, ...restProps }) {
    return (
        <PrimaryContent {...restProps}>
            { children }
        </PrimaryContent>
    )
}

Bleeding.Secondary = function BleedingSecondary({ children, ...restProps }) {
    return (
        <Secondary {...restProps}>
            { children }
        </Secondary>
    )
}

Bleeding.SecondaryContent = function BleedingSecondaryContent({ children, ...restProps }) {
    return (
        <SecondaryContent {...restProps}>
            { children }
        </SecondaryContent>
    )
}

Bleeding.ContentIcon = function BleedingContentIcon({ children, ...restProps }) {
    return (
        <ContentIcon {...restProps}>
            { children }
        </ContentIcon>
    )
}

Bleeding.ContentHeader = function BleedingContentHeader({ children, ...restProps }) {
    return (
        <ContentHeader {...restProps}>
            { children }
        </ContentHeader>
    )
}

Bleeding.ContentText = function BleedingContentText({ children, ...restProps }) {
    return (
        <ContentText {...restProps}>
            { children }
        </ContentText>
    )
}

export default Bleeding;