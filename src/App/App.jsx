import React from "react";
import { GlobalStyle } from '../Themes'
import { hot } from 'react-hot-loader/root'
import Controls from './Controls'
import Table from './Table'
import appStore from './Store'

const TodoList = () => (
  <React.Fragment>
    <GlobalStyle />
    <h1>Mob-X Table</h1>
    <Controls store={appStore} />
    <Table store={appStore.employeesList} />
  </React.Fragment >
);

export default hot(TodoList);
