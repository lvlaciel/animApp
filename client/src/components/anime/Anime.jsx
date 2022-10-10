import React from 'react'

function Anime({name, description, Rating, episode, categorie, studio, img}) {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <img src={img} alt="not found" />
        <h4>{Rating}</h4>
        <h4>{episode}</h4>
        <h4>{categorie}</h4>
        <h4>{studio}</h4>
    </div>
  )
}

export default Anime