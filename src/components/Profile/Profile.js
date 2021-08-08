import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";

// ======================================
// ======================================

const Profile = ({ postData, addPost }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts postData={postData} addPost={addPost} />
    </>
  );
};

export default Profile;
