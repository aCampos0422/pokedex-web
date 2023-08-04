import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeId.css'

export default function PokeIdPage() {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon ] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  },[id])

  const base = 150


  return (
    <article className="pokeId_container">
      <div className="pokeId_background">
        <section className="pokeId_info">
          <img className="pokeId_image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <hr />
          <div className="pokeId_name">
            <h1>#{pokemon?.id}</h1>
            <h2>{pokemon?.name}</h2>
          </div>
          <div className="pokeId_caracter">
            <h3 className="pokeId_text">Weight <span>{pokemon?.weight} </span></h3>
            <h3 className="pokeId_text">Height <span>{pokemon?.height} </span></h3>
          </div>
        </section>

        <hr />

        <section className="pokeId_typeSkill">
          <div>
            <h3>Type</h3>
            <ul className="pokeId_type">
              {
                pokemon?.types.map(typeI => (
                  <li className="pokeId_typet" key={typeI.type.url}>
                    {typeI.type.name}
                  </li>
                ))
              }
            </ul>
          </div>
          
          <div>
            <h3>Skills</h3>
            <ul className="pokeId_type" >
              {
                pokemon?.abilities.map(abiInfo => (
                  <li className="pokeId_typet" key={abiInfo.ability.url}>
                    {abiInfo.ability.name}
                  </li>
                ))
              }
            </ul>
          </div>
        </section>

        <section className="pokeId_stats">
          <div>
            <h3>Stats</h3>
            <ul>
              {
                pokemon?.stats.map(infoStat => (
                  <li className="pokeId_statsList" key={infoStat.stat.url}>
                    <h3>{infoStat.stat.name}:</h3>
                    <span>{infoStat.base_stat} / {base} </span> 
                    <div className="pokeId_grafStat"></div>
                    
                  </li>
                ))
              }
            </ul>
          </div>      
        </section>

        <section>
          <h3>Movements</h3>
          <ul>
            {
              pokemon?.moves.map(movePoke => (
                <li key={movePoke.move.url}>
                  <h4>{movePoke.move.name}</h4>
                </li>
              ))
            }
          </ul>

        </section>
      </div>
    </article>
  )
}
