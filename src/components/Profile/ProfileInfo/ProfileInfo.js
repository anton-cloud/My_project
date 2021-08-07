import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          src="https://wallpapershome.ru/images/pages/pic_h/666.jpg"
          alt=""
        />
      </div>
      <div className={s.profInfoWrap}> ava + desc</div>
    </>
  );
};

export default ProfileInfo;
