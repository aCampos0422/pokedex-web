import './style/Header.css'


export default function Header() {

  return (
    <header className="header_s">
      <div className='red'>
        <img className='header_imagelogo' src="/Pokelogo.png" alt="" />
      </div>
      <div className='black'>
        <img className='header_imageball' src='/pokebola.png' alt="" />
      </div>
      <div className='white'></div>    
    </header>
  )
}
