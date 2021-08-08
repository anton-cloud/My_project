import React from "react";
import s from "./Post.module.css";

const Post = ({ postData }) => {
  return (
    <ul>
      {postData.map((p) => (
        <li className={s.item} key={p.id}>
          <p>USER</p>
          <img
            className={s.image}
            src="https://w7.pngwing.com/pngs/322/323/png-transparent-winnie-the-pooh-sticker-piglet-telegram-others-mammal-vertebrate-fictional-character.png"
            alt=""
          />
          <div>
            <p>{p.message}</p>
            <span>like {p.likesCount}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Post;
