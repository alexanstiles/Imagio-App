import React from "react";
import Home from "./Home";
import Profile from './Profile'; 
import NavBar from './NavBar'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}
