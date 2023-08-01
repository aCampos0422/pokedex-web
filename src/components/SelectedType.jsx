import { useEffect } from "react"
import useFetch from "../hooks/useFetch"


export default function SelectedType({setSelectValue, setInputValue, selectValue}) {

  const url = 'https://pokeapi.co/api/v2/type'

  const [pokeType, getAllPokeType] = useFetch(url)

  useEffect(() => {
    getAllPokeType()
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
    setInputValue('')

  }

  return (
   <select value={selectValue} onChange={handleChange}>
    <option value="allPokemons">All Pokemons</option> 
    {
      pokeType?.results.map(type => (
        <option key={type.url} value={type.url}>{type.name}</option> 
      ))
    }
   </select>
  )
}
