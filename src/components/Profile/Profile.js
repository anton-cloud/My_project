import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";

// ======================================
// ======================================

const Profile = ({ profilePage, dispatch, addPost, updateNeePostPost }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        profilePage={profilePage}
        dispatch={dispatch}
        // addPost={addPost}
        // updateNeePostPost={updateNeePostPost}
      />
    </>
  );
};

export default Profile;
