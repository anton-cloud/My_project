import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { subscribe } from "./Redux/state";
import {
  addPost,
  updateNeePostPost,
  updateMessage,
  addMessage,
} from "./Redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        profilePage={state.profilePage}
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        addPost={addPost}
        updateNeePostPost={updateNeePostPost}
        updateMessage={updateMessage}
        addMessage={addMessage}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
