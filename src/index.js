import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./Redux/state";
import { addPost } from "./Redux/state";

// ============================
// const postData = [
//   {
//     id: 1,
//     message: "Hello, how are you ?",
//     likesCount: 15,
//   },
//   {
//     id: 2,
//     message: "It's my first post...",
//     likesCount: 15,
//   },
// ];

// let dialogsData = [
//   { id: 1, name: "Anton" },
//   { id: 2, name: "Sasha" },
//   { id: 3, name: "Bob" },
// ];

// let messagesData = [
//   { id: 1, message: "message_1" },
//   { id: 2, message: "message_2" },
//   { id: 3, message: "message_3" },
// ];
// ============================
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
