import { useDispatch, useSelector } from "react-redux"


export default function HomePage() {

 const trainer = useSelector(reducer => reducer.trainer)

  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>Hi Trainer</h2>
      <p>To start with the app, give me your name trainer 🫡</p>
      <form>
        <input type="text" />
        <button>Gotta catch 'em all</button>
      </form>
    </div>
  )
}
