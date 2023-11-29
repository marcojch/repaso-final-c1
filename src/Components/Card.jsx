import React from 'react'
import { Link } from 'react-router-dom'
import { useCharContext } from '../Context/Context'

const Card = ({character, icon}) => {

  const {state, dispatch} = useCharContext()

  const findFav = state.favs.find(fav => fav.id == character.id)

  const addFav = () => {
    if(findFav){
      alert('Ya agregaste ese elemento a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: character})
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  }

  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
      <Link to={'/detail/'+character.id}>
        <h4>{character.name}</h4>
        <img src={character.image} alt="" />
      </Link>
      <button onClick={addFav}>{findFav ? '🌟':'⭐'}</button>

    </div>
  )
}

export default Card