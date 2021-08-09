import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// ====================================
//мвссив даних винесено в index.html
// ====================================

const MyPosts = ({ profilePage, addPost, updateNeePostPost }) => {
  let newPostElement = React.createRef();
  let addMyPost = () => {
    addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNeePostPost(text);
  };

  return (
    <div className={s.postWrap}>
      <h3 className={s.title}>My posts </h3>
      <div className={s.item}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addMyPost}>add</button>
        </div>
      </div>
      <Post postData={profilePage.postData} />
    </div>
  );
};

export default MyPosts;
