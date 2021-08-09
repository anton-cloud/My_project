import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
// console.log(state.dialogsPage.dialogsData);

const Navbar = ({ dialogsData }) => {
  return (
    <div className={s.nav}>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              className={s.link}
              to="/profile"
              activeClassName={s.active}
            >
              Profile
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              className={s.link}
              to="/dialogs"
              activeClassName={s.active}
            >
              Dialogs
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} to="/news" activeClassName={s.active}>
              News
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} to="/music" activeClassName={s.active}>
              Music
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <p className={s.friendsTitle}>Friends</p>
        <ul className={s.friendsList}>
          {dialogsData.map((item) => (
            <li className={s.friendsItem}>
              <img className={s.friendsImg} src={item.photo} alt=""></img>
              <p className={s.friendsName}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
