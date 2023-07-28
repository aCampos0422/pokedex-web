import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeIdPage from './pages/PokeIdPage'
import Page404 from './pages/Page404'


function App() {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/pokedex' element={<PokedexPage/>} />
        <Route path='/pokedex/:id' element={<PokeIdPage/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </div>
  )
}

export default App
