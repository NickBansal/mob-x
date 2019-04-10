import React from "react";
import { GlobalStyle } from './Themes'
import { hot } from 'react-hot-loader/root'

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <h1>Mob-X</h1>
    <p>Hello world!</p>
  </React.Fragment >
);

export default hot(App);
