import React from 'react'
import {Link} from 'react-router-dom'
import { useDentiStates } from "./utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, themeDispatch} = useDentiStates()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type: 'SWITCH_DARK'})
    } else {
      themeDispatch({type:'SWITCH_LIGHT'})
    }
    
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <>
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      </>
    
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme}>{themeState.theme ? '🌘' : '☀️'}</button>
    </nav>
  )
}

export default Navbar