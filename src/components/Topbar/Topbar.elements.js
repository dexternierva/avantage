import styled from "styled-components";
import { FullWidthSection, Row } from "../Layout";
import { defaultTheme } from "../../utilities";

export const Container = styled(FullWidthSection)`
    padding: .5rem 0;
    background: ${defaultTheme.primaryColor};
`;

export const Lefttopbar = styled(Row)`
    color: ${defaultTheme.lightestColor};
    font-size: 0.875em;
`;

export const Righttopbar = styled(Row)`
    display: none;

    @media screen and (min-width: 1121px) {
        display: block;
    }
`;

export const Infotopbar = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const Infotopbaritem = styled.div`
	margin-left: 1.5rem;
    color: ${defaultTheme.lightestColor};
    font-size: 0.875em;
    display: flex;
    align-items: center;
`;

