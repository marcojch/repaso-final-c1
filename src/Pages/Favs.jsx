import React from 'react'
import Card from '../Components/Card'
import { useCharContext } from '../Context/Context'

const Favs = () => {
  const favs = localStorage.getItem('favs')
  const parsedFavs = JSON.parse(favs)
  const {state} = useCharContext()

  return (
    <div>
      {parsedFavs.map(fav => <Card icon={'❌'} character={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs