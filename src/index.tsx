import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header, Main } from "./components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Raleway');
	body {
		margin: 0;
		padding: 0;
		font-family: 'Raleway', sans-serif;
	}
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <Route path="/" exact component={Main} />
  </Router>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
