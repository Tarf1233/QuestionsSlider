import React from "react";
import Questionario from './features/Questionario'
import Relatorio from './features/pages/SendEmail/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
    return (
      <Router>
          <Switch>
            <Route path="/questionslider">
              <Questionario />
            </Route>
            <Route path="/relatorio">
              <Relatorio />
            </Route>
          </Switch>
      </Router>
    );
  }