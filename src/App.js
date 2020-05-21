import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/Post/reducer";
import Home from "./Home";
import Profile from './Profile'; 
import NavBar from './NavBar'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </Provider>
  );
}
