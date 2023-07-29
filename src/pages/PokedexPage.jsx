import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokeCard"


export default function PokedexPage() {

  const [inputValue, setInputValue]  = useState('')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

  const [ pokemons, getAllPokemons ] = useFetch(url)

  useEffect(()=> {
    getAllPokemons()
  },[])
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())

  }

  const cbFilter = (poke) => poke.name.includes(inputValue)  

  return (
    <div>
      <p><span>Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>  
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ) )
        }
      </div>
    </div>
  )
}
