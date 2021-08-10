import React from "react";
import {
  addMessageActionCreate,
  updateMessageActionCreate,
} from "../../Redux/dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
// =========================

// =========================
const Dialogs = ({
  dialogsData,
  messagesData,
  updateMessage,
  addMessage,
  dispatch,
}) => {
  let textareaElem = React.createRef();

  const onPostChange = (e) => {
    let text = e.target.value;
    // updateMessage(text);
    dispatch(updateMessageActionCreate(text));
  };

  let onSend = () => {
    // let text = textareaElem.current.value;
    // addMessage();
    dispatch(addMessageActionCreate());
  };

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
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            // ref={textareaElem}
            value={messagesData.newMessage}
          ></textarea>
          <button onClick={onSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
