import Card from "../Components/Card";
import { useDentistStates } from "../Components/Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();
  const { theme, favorites } = state;

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <h1>Dentitas favoritos</h1>
      <div className="card-grid">
      {favorites.length === 0 ? (
          <p>No hay favoritos guardados</p>
        ) : (
          favorites.map(dent => <Card key={dent.id} dent={dent} />)
        )}
      </div>
    </div>
  );
};

export default Favs;
