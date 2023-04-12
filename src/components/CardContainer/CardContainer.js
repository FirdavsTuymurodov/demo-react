import React from "react";
import Card from "./components/Card";
import style from "./CardContainer.module.css";

function CardContainer() {
  const date = [
    {
      img: "https://plus.unsplash.com/premium_photo-1673254850680-969be808b314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 1",
    },
    {
      img: "https://images.unsplash.com/photo-1680770600914-c69d380e2405?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 2",
    },
    {
      img: "https://images.unsplash.com/photo-1680849488359-4f8539c00dec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 3",
    },
    {
      img: "https://images.unsplash.com/photo-1680695920053-cb155ad082e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 4",
    },
    {
      img: "https://images.unsplash.com/photo-1680770536739-1120e9b0d7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 5",
    },
    {
      img: "https://images.unsplash.com/photo-1681077412295-a291cd6d30a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60 ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 6",
    },
    {
      img: "https://images.unsplash.com/photo-1680771447988-94c040d9868b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 7",
    },
    {
      img: "https://images.unsplash.com/photo-1680698334862-81a24b4eefbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta.",
      title: "title 8",
    },
  ];
  return (
    <div className={style.cardContainer}>
      {date.map((item) => (
        <Card img={item.img} title={item.title} info={item.desc} />
      ))}
    </div>
  );
}

export default CardContainer;
