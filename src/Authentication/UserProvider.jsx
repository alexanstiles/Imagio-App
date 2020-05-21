import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "./Firebase";

export const UserContext = createContext({ user: null }); // Creates a user field

/**
 * Class component to hold information about the user.
 * This us usually information that is to be perosnal
 * to the user logging in.
 */
class UserProvider extends Component {
  state = {
    user: null,
  }; // Sets initial user state

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    }); // Generates user document once the information is changed
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  } // Sets the context for that user
}

export default UserProvider; // Exports the user field
