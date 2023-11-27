import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [char, setChar] = useState({})
  const {id} = useParams()
  const url = 'https://rickandmortyapi.com/api/character/'+id
  useEffect(() => {
    axios(url)
    .then(res => setChar(res.data))
  }, [])

  return (
    <div>
      <h3>{char.name}</h3>
      <img src={char.image} alt="" />
      <h4>{char.location?.name}</h4>
      <h4>{char.status}</h4>
    </div>
  )
}

export default Detail