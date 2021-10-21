import React from "react";
import "./style/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/home/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
