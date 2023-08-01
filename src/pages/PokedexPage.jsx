import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokeCard"
import SelectedType from "../components/SelectedType"


export default function PokedexPage() {

  const [inputValue, setInputValue]  = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

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
    <div>
      <p><span>Welcome {trainer}</span>, here you can find your favorite pokemon</p>
      <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>  
      <SelectedType
        setSelectValue={setSelectValue}
        setInputValue={setInputValue}
        selectValue={selectValue}
      />
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
