import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const Recomendacion = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = async (movie) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const response = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/recommender/?titulo=${movie}`
      );

      const data = response.data;

      if (typeof data === "string") {
        setError(data);
      } else {
        setMovies(data);
      }
    } catch (error) {
      console.error("Error fetching data", error);

      setError("Error fetching data");
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
      <NavBar
        onSearch={handleRecommendationSearch}
        placeholder="ingrese un título"
      />
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
        {!error && movies.length > 0 && (
          <h1 className="font-pop text-white font-bold text-center mt-8">
            Recomendaciones basadas en {query}:
          </h1>
        )}
        <div className="flex flex-wrap gap-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="w-60 h-auto p-6 rounded-md bg-slate-500"
            >
              <h2 className="font-pop text-white font-semibold text-center hover:text-blue-950">
                {movie}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendacion;
