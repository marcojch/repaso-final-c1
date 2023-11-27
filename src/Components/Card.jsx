import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({character}) => {
  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
      <Link to={'/detail/'+character.id}>
        <h4>{character.name}</h4>
        <img src={character.image} alt="" />
      </Link>
      <button>⭐</button>
      
    </div>
  )
}

export default Card