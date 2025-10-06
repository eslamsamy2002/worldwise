import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import citiesData from "../data/data";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Load initial data (simulate fetch)
  useEffect(() => {
    dispatch({ type: "loading" });
    try {
      dispatch({ type: "cities/loaded", payload: citiesData });
    } catch {
      dispatch({ type: "rejected", payload: "Error loading cities" });
    }
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;
      dispatch({ type: "loading" });

      try {
        const city = cities.find((c) => c.id === Number(id));
        if (!city) throw new Error("City not found");
        dispatch({ type: "city/loaded", payload: city });
      } catch {
        dispatch({ type: "rejected", payload: "Error loading city" });
      }
    },
    [cities, currentCity.id]
  );

  function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const cityWithId = { ...newCity, id: Date.now() };
      dispatch({ type: "city/created", payload: cityWithId });
    } catch {
      dispatch({ type: "rejected", payload: "Error creating city" });
    }
  }

  function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "Error deleting city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
