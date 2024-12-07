export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };

    case "THEME_TOGGLE":
      return { ...state, theme: action.payload };

    case "LOAD_FAVORITES":
      return { ...state, favorites: action.payload };

    case "ADD_FAV": { const updatedFavs = [...state.favorites, action.payload];
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
        return { ...state, favorites: updatedFavs };
      }

    case "REMOVE_FAV": { const filteredFavs = state.favorites.filter((fav) => fav.id !== action.payload.id)
      return {...state, favorites: filteredFavs}
      }

    default:
      throw new Error("Acción no existente");
  }
};
