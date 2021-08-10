import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/state";

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        profilePage={store.getState().profilePage}
        dialogsData={store.getState().dialogsPage.dialogsData}
        messagesData={store.getState().dialogsPage.messagesData}
        // addPost={store.addPost.bind(store)}
        // updateNeePostPost={store.updateNeePostPost.bind(store)}
        dispatch={store.dispatch.bind(store)}
        // updateMessage={store.updateMessage.bind(store)}
        // addMessage={store.addMessage.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
