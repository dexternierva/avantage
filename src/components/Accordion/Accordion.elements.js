import styled from "styled-components";
import { Row } from "../Layout";

export const AccordionSection = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //position: relative;
    background: #fff;
`;

export const Container = styled.div`
    //background: #F5F8FF;
    //border: 1px solid #D8E3FE;
    border-bottom: 0;
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    //border-bottom: 1px solid #D8E3FE;
    color: #fff;
    text-align: left;
    cursor: pointer;

    h3 {
        padding: 1.5rem 1.5rem 1.5rem 0;

        span {
            font-family: 'Libre Baskerville', serif;
            font-style: italic;
        }
    }

    span {
        margin-right: 1.5rem;
    }
`;

export const Dropdown = styled.div`
    padding: 1rem 0;
    //background: #F5F8FF;
    color: #00ffb9;
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border-bottom: 1px solid #EBEBEB;
    border-top: 1px solid #EBEBEB;
    transition: all 10s ease;
    
    &.inactive {
        transform: scaleY(0);
        display: none;
        transition: all 10s ease;
    }

    &.active {
        transform: scaleY(1);
        display: flex;
    }

    h4 {
        color: #848485;
    }
`;