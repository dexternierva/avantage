import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";

import Theme from "./utilities/themes";
import { GlobalStyle } from "./utilities";

import App from './App';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>, 
    document.getElementById('root')
);