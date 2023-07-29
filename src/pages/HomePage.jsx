import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"


export default function HomePage() {
 
  const inputTrainer = useRef()

   const dispatch = useDispatch()

   const navigate = useNavigate()
 
  const handelSubmit = e => {
    e.preventDefault()
    // e.target.inputTrainer.value (manera opcional de capturar input)
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>Hi Trainer</h2>
      <p>To start with the app, give me your name trainer 🫡</p>
      <form onSubmit={handelSubmit}>
        <input id='inputTrainer' ref={inputTrainer} type="text" placeholder="Nombre Pokemón" />
        <button>Gotta catch 'em all</button>
      </form>
    </div>
  )
}
