import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// ====================================
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
// ====================================

const MyPosts = () => {
  return (
    <div className={s.postWrap}>
      <h3 className={s.title}>My posts </h3>
      <div className={s.item}>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add</button>
        </div>
      </div>
      <Post postData={postData} />
    </div>
  );
};

export default MyPosts;
