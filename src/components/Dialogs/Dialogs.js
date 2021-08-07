import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
// =========================
let dialogsData = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Bob" },
];

let messagesData = [
  { id: 1, message: "message_1" },
  { id: 2, message: "message_2" },
  { id: 3, message: "message_3" },
];
// =========================
const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className="users">
        <ul className="users-list">
          <DialogsItem dialogsData={dialogsData} />
        </ul>
      </div>
      <div className="messages">
        <ul className="messages-list">
          <MessagesItem messagesData={messagesData} />
        </ul>
      </div>
    </div>
  );
};

export default Dialogs;
