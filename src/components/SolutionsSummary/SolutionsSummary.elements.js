import styled from "styled-components";
import Row from "../Layout/Row";

export const MainContent = styled(Row)`
    padding-top: 2rem;

    @media screen and (min-width: 1120px) {
        margin-left: 2.1rem;
        border-left: 1px solid rgba(216, 227, 254, 0.8);
    }
`;

export const Summary = styled.div`
    position: relative;
    padding: 2rem 0 3rem 0;
    border-bottom: 1px solid rgba(216,227,254,1.0);

    :after {
        content: '';
        position: absolute;
        width: 32px;
        height: 32px;
        border-top: 0px solid rgba(216,227,254,1.0);
        border-right: 1px solid rgba(216,227,254,1.0);
        border-bottom: 1px solid rgba(216,227,254,1.0);
        border-left: 0px solid rgba(216,227,254,1.0);
        top: 100%;
        left: 50%;
        margin-left: -16px;
        margin-top: -16px;
        transform: rotate(45deg);
        background: #FFFFFF;
    }
`;

export const SummaryContent = styled.article`
    @media screen and (min-width: 1120px) {
        margin: 0 4.2rem;
    }
`;

export const ImageWrap = styled(Row)`
    display: none;

    @media screen and (min-width: 1120px) {
        display: block;
    }
`;

export const Image = styled.div`
    padding: 4rem 0;

    img {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }
`;
export const Title = styled.h4`
    margin-top: 0;
`;
export const Text= styled.p``;
export const SubContent = styled.div`
    border-bottom: 1px solid rgba(216,227,254,0.5);
    cursor: pointer;
    transition: all .5s;

    :hover {
        background-color: rgba(65,179,50,1.0);
        color: #EBEBEB;
    }
`;
export const Content = styled.div`
    padding: 2rem 0;

    @media screen and (min-width: 1120px) {
        margin: 0 4.2rem;
    }
`;
export const SubTitle = styled.p`
    display: flex;
    align-items: center;
    text-transform: uppercase;

    span {
        margin-left: .5rem;
    }
`;
export const SubText = styled.p``;