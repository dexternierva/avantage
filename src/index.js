import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./utilities/apolloClient";

import Theme from "./utilities/themes";
import { GlobalStyle } from "./utilities";

import App from './App';

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </ThemeProvider>, 
    document.getElementById('root')
);