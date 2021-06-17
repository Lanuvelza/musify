import React, { createContext, useContext, useReducer } from 'react';

const YoutubeDataLayerContext = createContext(); 

const YoutubeDataLayer = ({ initialState, reducer, children }) => (
  <YoutubeDataLayerContext.Provider value={useReducer(reducer, initialState)} >
    {children}
  </YoutubeDataLayerContext.Provider>
);

export const useYoutubeDataLayerValue = () => useContext(YoutubeDataLayerContext);
