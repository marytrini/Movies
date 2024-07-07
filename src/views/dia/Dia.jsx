import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const Dia = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (dia) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/cant_dia/?dia=${dia}`
      );
      const moviesData = response.data;
      setMovies(moviesData.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  const handleSearch = (query) => {
    console.log("película estrenada este día", query);
    setQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Películas por día
        </h1>
      </div>
      <NavBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies && (
        <p className="font-pop text-white font-bold text-center mt-8">
          {movies}
        </p>
      )}
    </div>
  );
};

export default Dia;