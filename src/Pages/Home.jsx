import React from 'react'
import Card from '../Components/Card'
import { useCharContext } from '../Context/Context'

const Home = () => {
  const {state} = useCharContext()
  return (
    <div>
      {state.list.map(character => <Card character={character} key={character.id}/>)}
    </div>
  )
}

export default Home