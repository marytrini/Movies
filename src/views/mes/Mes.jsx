import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

const Mes = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async (mes) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/cant_mes/?mes=${mes}`
      );

      const data = resp.data;
      setMovies(data.message);
    } catch (error) {
      setError("Data not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getMovies(query);
    }
  }, [query]);

  const handleInputChange = (query) => {
    setQuery(query);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Películas por mes
        </h1>
      </div>
      <NavBar onSearch={handleInputChange} />
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

export default Mes;
