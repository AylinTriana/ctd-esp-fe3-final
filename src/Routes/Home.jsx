import Card from '../Components/Card';
import { useDentistStates } from '../Components/Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistStates();
  
  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Dentistas</h1>
      <div className="card-grid">
      
      {state.data.map((dent) => (
        <Card key={dent.id} dent={dent} />
      ))}
      </div>
    </main>
  );
};

export default Home;
