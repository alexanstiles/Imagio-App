import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./Authentication/Firebase";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NavBar from "./Container/NavBar";
import UserProvider from "./Authentication/UserProvider";
import CreatePost from './Components/CreatePost'; 

/**
 * A private route that requires user authentication before displaying certian pages.
 * @param {component} param0 the page component to be rendered
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.currentUser ? <Component {...props} /> : <Redirect to="/signin" />
    }
  ></Route>
);

/**
 * Main application that controls user and routes
 */
function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

/**
 * Function to control routes to which pages.
 * Conditionally renders pages based on routes and user information
 */
function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/createPost" component={CreatePost} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App; // Exports the application
