import React from "react";
import { addPostActionCreate, updatePost } from "../../../Redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ profilePage, addPost, updateNeePostPost, dispatch }) => {
  let newPostElement = React.createRef();
  let addMyPost = () => {
    dispatch(addPostActionCreate());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updatePost(text));
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
