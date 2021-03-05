import styled from "styled-components";

export const ProgramWrap = styled.div`
    background-color: #F5F8FF;
    border-bottom: 1px solid rgba(216, 227, 254, 0.5);
`;

export const ConditionsList = styled.ul`
    margin: 0 0 2rem 0;
    padding: 0;
    list-style-type: none;
`;

export const ConditionsListItem = styled.li`
    display: flex;
    align-items: center;
    margin-top: .25rem;
    color: #848485;
    font-size: 0.75em;
    font-family: 'Libre Baskerville', serif;
`;

export const BackNavigation = styled.div`
    display: flex;
    text-align: center;
    background: #F5F8FF;

    button {
        color: #047CC7;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2rem;
        padding: .25rem .5rem;
        background: transparent;
        cursor: pointer;
        border: 1px solid #EBEBEB;
        border-radius: 2px;
    }

    button:hover {
        background: #047CC7;
        color: #FFFFFF;
        border-radius: 2px;
    }
`;