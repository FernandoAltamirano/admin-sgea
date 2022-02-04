import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { reducer } from "./context/reducer";
import { initialState } from "./context/initialState";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider reducer={reducer} initialState={initialState}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
