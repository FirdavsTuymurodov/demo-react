import React from "react";
import style from "./Feed.module.css";

function Feed() {
  return (
    <div className={style.feed_container}>
      <input type="text" placeholder="Share your thoughts" />
      <button type="submit">submit</button>
    </div>
  );
}

export default Feed;
