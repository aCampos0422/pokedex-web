import './styles/HomePage.css'
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
    <article className='pokeHome_body'>
      <section className='pokeHome_container'>
        <img className='pokeHome_image' src='/Pokelogo.png' alt="" />
        <h2 className='pokeHome_name'>Hi Trainer !</h2>
        <p className='pokeHome_p'>To start with the app, give me your name trainer 🫡</p>
        <form className='pokeHome_form' onSubmit={handelSubmit}>
          <input className='pokeHome_input' id='inputTrainer' ref={inputTrainer} type="text" placeholder="Give me your Name" />
          <button className='pokeHome_btn'>Gotta catch 'em all</button>
        </form>
      </section>
    </article>
  )
}
