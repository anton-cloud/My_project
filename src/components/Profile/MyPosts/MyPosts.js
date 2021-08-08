import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

// ====================================
//мвссив даних винесено в index.html
// ====================================

const MyPosts = ({ postData, addPost }) => {
  debugger;
  let newPostElement = React.createRef();
  let addMyPost = () => {
    debugger;
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.postWrap}>
      <h3 className={s.title}>My posts </h3>
      <div className={s.item}>
        <div>
          <textarea ref={newPostElement}> </textarea>
        </div>
        <div>
          <button onClick={addMyPost}>add</button>
        </div>
      </div>
      <Post postData={postData} />
    </div>
  );
};

export default MyPosts;
