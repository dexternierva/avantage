import styled from "styled-components";

export const AlertContainer = styled.section`
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    height: 80%;
    max-height: 340px;
    max-width: 480px;

    border: 1px solid rgba(216,227,254,1.0);
    border-radius: 5px;
    -webkit-box-shadow: 0 0 16px 8px rgba(216,227,254,0.1); 
    -moz-box-shadow:    0 0 16px 8px rgba(216,227,254,0.1);
    box-shadow:         0 0 16px 8px rgba(216,227,254,0.1); 
    background-color: #FDFFFC;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    color: #011627;
    z-index: 9999;
`;
export const AlertHeader = styled.h4``;
export const AlertBody = styled.article`
    padding: 0 2rem 2rem 2rem;
    text-align: center;
`;
export const AlertSubject = styled.span`
    font-weight: 600;
`;