import styled from "styled-components";

export const Container = styled.div`
    padding: 3rem 0 3rem 0;

    @media screen and (min-width: 991px) {
        padding: 5rem 0 4rem 0;
    }
`;
export const Title = styled.h3`
    text-align: center;
`;
export const Text= styled.p`
    columns: 2;
    column-gap: 6rem;
`;
export const SubContent = styled.div`
    display: flex;
    padding: 1rem 2rem;
    background-color: rgba(233,239,255,0.8);
`;
export const Content = styled.div`
    margin-left: 2rem;
`;
export const SubTitle = styled.h4`
    margin: 0;
`;
export const SubText = styled.p`
    margin: 0;
`;