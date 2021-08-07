import React from "react";

const MessagesItem = ({ messagesData }) => {
  return messagesData.map((m) => (
    <li className="messages-item" key={m.id}>
      <p> {m.message} </p>
    </li>
  ));
};

export default MessagesItem;
