import React from "react";
import Questionario from './features/Questionario'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
    return (
      <Router>
          <Switch>
            <Route path="/about">
              <Questionario />
            </Route>
            <Route path="/users">
              <Questionario />
            </Route>
          </Switch>
      </Router>
    );
  }