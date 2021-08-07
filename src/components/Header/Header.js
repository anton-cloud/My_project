import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <img
          className={s.image}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png"
          alt=""
        ></img>
      </header>
    </>
  );
};

export default Header;
