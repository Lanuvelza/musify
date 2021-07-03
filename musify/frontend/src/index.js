import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './contexts/DataLayer';
import reducer, { initialState } from './reducers/reducers';
import { ViewDataLayer } from './contexts/ViewDataLayer';
import viewReducer, { initialViewState } from './reducers/viewReducer';
import { YoutubeDataLayer } from './contexts/YoutubeDataLayer';
import youtubeReducer, { initialYoutubeDataState } from './reducers/youtubeReducer';
import { InstagramDataLayer } from './contexts/InstagramDataLayer';
import instagramReducer, { initialInstagramDataState } from './reducers/instagramReducer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <ViewDataLayer initialState={initialViewState} reducer={viewReducer}>
        <YoutubeDataLayer initialState={initialYoutubeDataState} reducer={youtubeReducer}>
          <InstagramDataLayer initialState={initialInstagramDataState} reducer={instagramReducer}>
            <App />
          </InstagramDataLayer>
        </YoutubeDataLayer>
      </ViewDataLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
