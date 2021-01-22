import React from "react";
import {
    Container,
    MainContent,
    Image,
    Content,
    PreTitle,
    Title,
    Text,
    Cta,
    Info
} from "./Card.elements";

function Card ({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            { children }
        </Container>
    )
}

Card.Content = function CardContent({ children, ...restProps }) {
    return(
        <Content {...restProps}>
            { children }
        </Content>
    )
}

Card.MainContent = function CardMainContent({ children, ...restProps }) {
    return(
        <MainContent {...restProps}>
            { children }
        </MainContent>
    )
}

Card.Image = function CardImage({ children, ...restProps }) {
    return (
        <Image {...restProps}>
            { children }
        </Image>
    )
}

Card.PreTitle = function CardPreTitle({ children, ...restProps }) {
    return (
        <PreTitle {...restProps}>
            { children }
        </PreTitle>
    )
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}>
            { children }
        </Title>
    )
}

Card.Text = function CardText({ children, ...restProps }) {
    return (
        <Text {...restProps}>
            { children }
        </Text>
    )
}

Card.Cta = function CardCta({ children, ...restProps }) {
    return (
        <Cta {...restProps}>
            { children }
        </Cta>
    )
}

Card.Info = function CardInfo({ children, ...restProps }) {
    return (
        <Info {...restProps}>
            { children }
        </Info>
    )
}

export default Card;
