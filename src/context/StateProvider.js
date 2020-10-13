// data layer setup

import React, { createContext, useContext, useReducer } from 'react';

// data layer
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// for usage in components
export const useStateValue = () => useContext(StateContext)