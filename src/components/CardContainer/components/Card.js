import React from "react";
import style from "./Card.module.css";

function Card({ img, title, info }) {
  return (
    <div className={style.Card}>
      <article className={style.article}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{info}</p>
      </article>
    </div>
  );
}

export default Card;
