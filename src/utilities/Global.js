import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { defaultTheme } from "./themes";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 100%;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${ primaryFont };
        font-size: 1em;
        line-height: 1.5;
        color: ${defaultTheme.headingsColor};
    }

    main {
        padding: 3rem 0;

        @media screen and (min-width: 991px) {
            padding: 6rem 0;
        }
    }

    a:link, a:visited, a:active {
        color: #41B332;
    }

    a:hover {
        color: #108E40;
    }

    ul, ol {
        margin: 0;
        padding: 0;
    }

    ul li,
    ol li {
        list-style-position: inside;
    }

    dl {
        margin: 0;
        padding: 0;
    }

    dl dt {
        font-weight: 600;
        font-style: italic;
    }

    dl dd {
        margin: 0 0 1rem 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1, h2, h3, h4 {
        font-family: ${ primaryFont };
        font-weight: 600;
        color: ${defaultTheme.headingsColor};
    }

    h1 {
        font-size: 2em;
        line-height: 1.25;
    }

    h2 {
        font-size: 1.625em;
        line-height: 1.15384615;
    }

    h3 {
        font-size: 1.375em;
        line-height: 1.13636364;
    }

    h4 {
        font-size: 1.125em;
        line-height: 1.11111111;
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-size: 2.5em;
            line-height: 1.125;
        }
    
        h2 {
            font-size: 2em;
            line-height: 1.25;
        }
    
        h3 {
            font-size: 1.5em;
            line-height: 1.25;
        }
    
        h4 {
            font-size: 1.125em;
            line-height: 1.22222222;
        }
    }

    @media screen and (min-width: 1200px) {
        h1 {
            font-size: 3em;
            line-height: 1.05;
        }
    
        h2 {
            font-size: 2.25em;
            line-height: 1.25;
        }
    
        h3 {
            font-size: 1.75em;
            line-height: 1.25;
        }
    
        h4 {
            font-size: 1.125em;
            line-height: 1.22222222;
        }
    }

    /**
     * GLOBAL FORM STYLES
     * =====================================
     */

    label {
        display: inline-block;
        color: ${defaultTheme.textColor};
        margin-top: 1.5rem;
    }

    input[type=text],
    input[type=email],
    input[type=number],
    input[type=tel],
    select, 
    textarea {
        padding: 1rem 1.5rem;
        background-color: #EFEFF7;
        border-radius: 2px;
        margin-bottom: .25rem;
        outline: none;
        border: none;
        font-size: 1rem;
        border: 1px solid rgba(141,149,158,0.2);
        box-shadow: inset 0px 0px 4px rgba(141,149,158,0.2);
        width: 100%;
    }

    select {
        border: 0;
        padding: 1rem 0;
        color: ${defaultTheme.helperTextColor};
    }

    input[type=radio],
    input[type=checkbox] {
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        padding: 10px;
        display: inline-block
    }

    input[type=checkbox] {
        margin-right: 1rem;
        margin-left: .25rem;
    }

    ::-webkit-input-placeholder { /* Edge */
        color: ${defaultTheme.fourthNeutral};
        font-family: 'Libre Baskerville', serif;
        font-style: italic;
    }
      
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${defaultTheme.fourthNeutral};
        font-family: 'Libre Baskerville', serif;
    }
      
    ::placeholder {
        color: ${defaultTheme.fourthNeutral};
        font-family: 'Libre Baskerville', serif;
    }

    .react-datepicker-wrapper {
        width: 100%;
    }

    /* Remove right margin on Facebook Review Embe, to align center the review */
    .carousel .slide iframe {
        margin: 0 0 40px !important;
    }
`;