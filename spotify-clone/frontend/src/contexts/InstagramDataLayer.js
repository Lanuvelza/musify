import React, { createContext, useContext, useReducer } from 'react'; 

export const InstagramDataLayerContext = createContext();

export const InstagramDataLayer = ({ initialState, reducer, children }) => (
  <InstagramDataLayerContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </InstagramDataLayerContext.Provider>
);

export const useInstagramDataLayerValue = () => useContext(InstagramDataLayerContext);