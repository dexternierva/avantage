import React from "react";
import Ticker from "react-ticker";
import styled from "styled-components";

const Tick = styled.div`
    display: flex;
    align-items: center;

    p { margin-right: 4rem; }
`;

const TickImage = styled.div`
    width: 50px;
    margin: 0 1rem;
`;

const MoveStuffAround = function () {
    return (
        <Ticker>
            {({ index }) => (
                <Tick>
                    <TickImage><img src="images/german-flag.png" alt="German Flag" /></TickImage>
                    <p>A-Vantage is Accredited by Germany</p>
                    <TickImage><img src="images/teco-flag.png" alt="TECO Flag" /></TickImage>
                    <p>A-Vantage is Accredited by Taiwan (TECO)</p>
                </Tick>
            )}
        </Ticker>
    );
}

export default MoveStuffAround;