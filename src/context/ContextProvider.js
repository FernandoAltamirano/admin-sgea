import { createContext, useReducer } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
