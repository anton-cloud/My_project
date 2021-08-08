import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogsItem.module.css";

const DialogsItem = ({ dialogsData }) =>
  dialogsData.map((d) => {
    let path = "/dialogs/" + d.id;
    return (
      <li className="usersItem" key={d.id}>
        <img className={s.imageItem} src={d.photo} alt=""></img>
        <NavLink className={s.itemName} to={path}>
          {d.name}
        </NavLink>
      </li>
    );
  });
export default DialogsItem;
