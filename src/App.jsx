import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        {/* Falta ruta contact */}
      </Routes>
    </>
  )
}

export default App
