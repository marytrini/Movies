import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const Popularidad = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async (movie) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/score_titulo/?movie=${movie}`
      );

      const data = response.data;
      setMovies(data.mensaje);
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (query) {
      getMovies(query);
    }
  }, [query]);

  const handleInput = (query) => {
    setQuery(query);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Más populares
        </h1>
      </div>
      <NavBar onSearch={handleInput} />
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

export default Popularidad;
