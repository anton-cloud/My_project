import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";

// ======================================
const postData = [
  {
    id: 1,
    message: "Hello, how are you ?",
    likesCount: 15,
  },
  {
    id: 1,
    message: "It's my first post...",
    likesCount: 15,
  },
];
// ======================================

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MyPosts postData={postData} />
    </>
  );
};

export default Profile;
