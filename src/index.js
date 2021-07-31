import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      {/*<React.StrictMode>*/}
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        /* updateNewPostText={store.updateNewPostText.bind(store)}
          addMessage={store.addMessage.bind(store)}
          updateNewPostMessage={store.updateNewPostMessage.bind(store)}*/
      />
      {/*</React.StrictMode>*/}
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
