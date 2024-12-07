import { Link } from "react-router-dom";
import { useDentistStates } from "./Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, themeToggle } = useDentistStates();

  return (
    <nav className={state.theme === "dark" ? "dark" : "light"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      <Link to="/">Home</Link>
      <Link to="/favs">Favoritos</Link>
      <Link to="/Contact">Contactanos</Link>
      

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={themeToggle}>🌙</button>
    </nav>
  )
}

export default Navbar;