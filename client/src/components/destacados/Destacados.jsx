import React from "react";
import { useDispatch } from "react-redux"
import data from "../../data/info.js";
import AnimeDestacado from "./AnimeDestacado.jsx";
import style from "./Destacados.module.css"

const dataFilter = data.filter(anime => anime.destacado )


function CarouselSports() {

  const dispatch = useDispatch()

  return (
    <div className={style.container}><h1>Recomendaciones</h1>
    <div className={style.destacados}>
        {dataFilter.length !== 0
          ? dataFilter.map((anime, i) => (
                <AnimeDestacado
                  key={i}
                  name={anime.name}
                  studio={anime.studio}
                  img={anime.img}
                  
                />
            ))
          : null}
    </div>
    </div>
  );
}

export default CarouselSports;
