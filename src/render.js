import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./Redux/state";
import { addPost } from "./Redux/state";

export let renderEnireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        postData={state.profilePage.postData}
        dialogsData={state.dialogsPage.dialogsData}
        messagesData={state.dialogsPage.messagesData}
        addPost={addPost}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
