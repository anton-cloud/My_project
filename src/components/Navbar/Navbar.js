import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/dialogs" activeClassName={s.active}>
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
  );
};

export default Navbar;
