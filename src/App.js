import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "./Authentication/Firebase";
import SignIn from "./Pages/SignIn";
import UserProvider from "./Authentication/UserProvider";

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
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App; // Exports the application
