import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDentistStates } from "../Components/Context/Context";
import axios from "axios";

const Detail = () => {
  const { state } = useDentistStates();
  const params = useParams();
  const [dentist, setDentist] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchDataID = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setDentist(resp.data);
    } catch (error) {
      console.error("Error al cargar los detalles del dentista:", error);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataID();
  }, [params.id]);

  return (
    <div className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Detalles del Dentista</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : err ? (
        <p>Error al cargar los detalles del dentista. Por favor, intenta nuevamente.</p>
      ) : dentist ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No se encontraron detalles del dentista.</p>
      )}
    </div>
  );
};

export default Detail;
