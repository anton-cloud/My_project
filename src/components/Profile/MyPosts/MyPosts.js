import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// ====================================
//мвссив даних винесено в POST
// ====================================

const MyPosts = (postData) => {
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
