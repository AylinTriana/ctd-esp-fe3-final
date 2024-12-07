import { Link } from 'react-router-dom';
import { useDentistStates } from "./Context/Context";


const Card = ({ dent }) => {
  const { state, dispatch } = useDentistStates();
  const favorito = state.favorites.some((fav) => fav.id === dent.id);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: favorito ? "REMOVE_FAV": "ADD_FAV", payload: dent})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="Doctor" />
        <Link to={"/Detail/" + dent.id}>
        <h2>{dent.name}</h2>
      </Link>
      <h3>{dent.username}</h3>
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}>{favorito ? "❌" : "⭐"}</button>
    </div>
  );
};

export default Card;







