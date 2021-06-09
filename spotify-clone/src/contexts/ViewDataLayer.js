import React, { createContext, useContext, useReducer } from 'react'; 

export const ViewDataLayerContext = createContext(); 

export const ViewDataLayer = ({ initialState, reducer, children }) => (
  <ViewDataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ViewDataLayerContext.Provider>
); 

export const useViewDataLayerValue = () => useContext(ViewDataLayerContext);