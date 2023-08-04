import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokeCard"
import SelectedType from "../components/SelectedType"
import './styles/PokedexPage.css'
import Pagination from "../components/Pagination"



export default function PokedexPage() {
  
  const [inputValue, setInputValue]  = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  // ESTADO PARA RENDERIZAR LA CANTIDAD DE POKEMONES POR PAGINA
  const [pokesPerPage, setPokesPerPage] = useState(20)
  
  // ESTADO DE PAGINA ACTUAL
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * pokesPerPage
  const firstIndex = lastIndex - pokesPerPage




  
  const trainer = useSelector(reducer => reducer.trainer)
  
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1081'
  
  const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)
  
  useEffect(()=> {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    }else{
      getPokemonsByType(selectValue)
    }
  },[selectValue])
  
  
  const inputSearch = useRef()
  
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setSelectValue('allPokemons')
  }
  
  const cbFilter = (poke) => poke.name.includes(inputValue)  

  return (
    <article className="pokedex_globalContainer">
      <div className="pokedex_in">
        <h2 className="pokedex_text">Welcome <span className="pokedex_trainerName">{trainer}</span>, here you can find your favorite pokemon</h2>
        <section className="pokedex_searchAll">
          <div className="pokedex_submit">
            <form onSubmit={handleSubmit}>
              <input className="pokedex_input" ref={inputSearch} type="text" placeholder="Search pokemon" />
              <button className="pokedex_btn">Search</button>
            </form>
          </div>
          <div className="pokedex_select">
            <SelectedType
                setSelectValue={setSelectValue}
                setInputValue={setInputValue}
                selectValue={selectValue}
                />
          </div>
        </section> 

      </div>

      <div className="pokedexCards_container">
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
            )).slice(firstIndex, lastIndex)
          }
      </div>
      <Pagination
        pokesPerPage={pokesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pokemons={pokemons}
      />  
    </article>
  )
}
