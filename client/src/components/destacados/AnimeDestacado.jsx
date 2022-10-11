import React from "react";
import style from "../destacados/AnimeDestacado.module.css"

function AnimeDestacado({
  name,
  description,
  Rating,
  episode,
  categorie,
  studio,
  img,
}) {
  return (
    <div className={style.container}>
      <h2>{name}</h2>
      <h4>{studio}</h4>
      <img src={img} alt="not found" />
      <h4>{Rating}</h4>
      <h4>{episode}</h4>
      <h4>{categorie}</h4>
      <p>{description}</p>
    </div>
  );
}

export default AnimeDestacado;


