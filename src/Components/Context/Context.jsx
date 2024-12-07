import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../Reducer/Reducer";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

const getParsedFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  } catch {
    return [];
  }
};

const initialState = { theme: localStorage.getItem("theme") || "light", data: [], favorites: getParsedFavorites(), };

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios(url)
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
      })
      .catch((err) => {
        console.log("Error al cargar los datos:", err);
      });
    }, []); 

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      const savedFavs = JSON.parse(localStorage.getItem("favorites")) || []; 

      dispatch({ type: "THEME_TOGGLE", payload: savedTheme });
      dispatch({ type: "LOAD_FAVORITES", payload: savedFavs }); 

      document.body.classList.remove("light", "dark");
      document.body.classList.add(savedTheme);
    }, []);

    const themeToggle = () => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      dispatch({ type: "THEME_TOGGLE", payload: newTheme });
      
      localStorage.setItem("theme", newTheme);  

      document.body.classList.remove("light", "dark");
      document.body.classList.add(newTheme);
    };

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state.favorites]);
  

  return (
    <Context.Provider value={{state, dispatch, themeToggle}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
export const useDentistStates = () => useContext(Context);


