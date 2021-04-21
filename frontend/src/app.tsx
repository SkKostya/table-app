import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { urls } from "./constants";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={urls.HOME} component={Home}/>
        <Route component={() => <h2>404</h2>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
