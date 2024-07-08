import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const MasVotada = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (movie) => {
    setLoading(true);
    setError(null);
    setMovies("");
    try {
      const resp = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/votos_titulo/?titulo_de_la_filmaci%C3%B3n=${movie}`
      );

      const info = resp.data;
      setMovies(info.mensaje);
    } catch (error) {
      console.error("Error fetching data", error);
      if (error.response && error.response.status === 404) {
        setError(
          `La película ${movie} no se encuentra en nuestra base de datos`
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
      fetchMovies(query);
    }
  }, [query]);

  const handleMovieSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Más valoraciones
        </h1>
      </div>
      <NavBar onSearch={handleMovieSearch} placeholder="ingrese un título" />
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
      {!error && movies && (
        <p className="font-pop text-white font-bold text-center mt-8">
          {movies}
        </p>
      )}
    </div>
  );
};

export default MasVotada;
