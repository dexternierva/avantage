import styled from "styled-components";
import { defaultTheme } from "../../utilities";


export const SectionHeaderContainer = styled.div`
    margin: 3.5rem 0;    
    text-align: center;

    @media screen and ( min-width: 991px ) {
        margin: 5rem 0 4rem 0;
    }
`;

export const PreTitle = styled.p`
    margin: 0 0 .5rem 0;
    font-size: 0.75em;
    color: ${defaultTheme.helperTextColor};
    text-transform: uppercase;
`;

export const Title = styled.h2`
    margin-top: 0;
    color: ${defaultTheme.primaryColor};
`;