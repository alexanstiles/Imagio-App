import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/Post/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
    <div style={{ textAlign: 'center' }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
    </Provider>
  );
}

export default App;
