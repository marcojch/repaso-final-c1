import React from 'react'
import { Link } from 'react-router-dom'
import { useCharContext } from '../Context/Context'

const Navbar = () => {
  const {state} = useCharContext()
  return (
    <div>
      <Link to='/'><h4>Home</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      {/* Falta link contact */}
      <button >Cambiar theme {state.theme ? '☀' : '🌓'}</button>
    </div>
  )
}

export default Navbar