import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const Recomendacion = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState({});
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async (movie) => {
    setLoading(true);
    setError(null);
    setMovies({});
    setRecommendation("");
    try {
      const response = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/recommender/?titulo=${movie}`
      );

      const data = response.data;
      setRecommendation(data.message);
      setMovies(data.recommendations);
    } catch (error) {
      console.error("Error fetching data", error);
      if (error.response && error.response.status === 404) {
        setError(
          `La película ${movie} no se encuentra en nuestra base de datos, no es posible obtener recomendaciones`
        );
      } else {
        setError("Error fetching data");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchRecommendations(query);
    }
  }, [query]);

  const handleRecommendationSearch = (query) => {
    setQuery(query);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Recomendaciones
        </h1>
      </div>
      <NavBar onSearch={handleRecommendationSearch} />
      {loading && (
        <p className="font-pop text-white font-bold text-center mt-8">
          Loading...
        </p>
      )}
      {error && (
        <p className="font-pop text-white font-bold text-center mt-8">
          {error}
        </p>
      )}
      <div className="flex flex-col items-center gap-12">
        {!error && recommendation && (
          <p className="font-pop text-white font-bold text-center mt-8">
            {recommendation}
          </p>
        )}

        {Object.keys(movies).length > 0 && (
          <div className="w-60 h-auto p-6 rounded-md bg-slate-500 items-center">
            {Object.entries(movies).map(([key, value]) => (
              <p
                key={key}
                className="font-pop text-white font-bold text-justify hover:text-blue-950 mt-1"
              >
                {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recomendacion;
