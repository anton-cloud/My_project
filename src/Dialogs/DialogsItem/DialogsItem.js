import React from "react";
import { NavLink } from "react-router-dom";

const DialogsItem = ({ dialogsData }) =>
  dialogsData.map((d) => {
    let path = "/dialogs/" + d.id;
    return (
      <li className="users-item" key={d.id}>
        <NavLink to={path}>{d.name}</NavLink>
      </li>
    );
  });
export default DialogsItem;
