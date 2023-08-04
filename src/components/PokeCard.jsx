import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

function PokeCard({url}) {

 const [ pokemon, getSinglePokemon ] = useFetch(url) 

 useEffect(() => {
  getSinglePokemon()

 },[])

 const navigate = useNavigate()
 const handleClick = () => {
  navigate(`/pokedex/${pokemon.id}`)
 }


  return (
    <article className={`pokecard ${pokemon?.types[0].type.name}-border`} onClick={handleClick}>
      <header className={`pokecard_header ${pokemon?.types[0].type.name}-gradient`}>
        <img className="pokecard_image" src={pokemon?.sprites.other['official-artwork'].front_default === null ? "/pokebola.png" : pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="pokecard_body">
        <h3 className={`pokecard_name ${pokemon?.types[0].type.name}-text`}>{pokemon?.name}</h3>
        <ul className="pokecard_types">
          {
            pokemon?.types.map(typeInfo => (
              <li className="pokecard_typename" key={typeInfo.type.url}>
                {typeInfo.type.name}
              </li>
            ))
          }
        </ul>
        <hr className="pokecard_hr" />
        <ul className="pokecard_stats">
          {
          pokemon?.stats.map(statInfo => (
            <li className="pokecard_stat" key={statInfo.stat.url}>
              <h4 className="pokecard_stat_name">{statInfo.stat.name}</h4>
              <span className={`pokecard_stat_value ${pokemon?.types[0].type.name}-text`}>{statInfo.base_stat}</span>
            </li>
          ))
          }
        </ul>
      </section>

    </article>
  )
}

export default PokeCard
