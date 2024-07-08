import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Card from "../../components/card/Card";

const Director = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [director, setDirector] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDirector = async (director) => {
    setLoading(true);
    setError(null);
    setDirector("");
    setMovies([]);
    try {
      const response = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/get_director/?director=${director}`
      );
      const data = response.data;

      setDirector(data.mensaje);
      setMovies(data.detalles_peliculas);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Error fetching data", error);
        setError(
          `El director ${director} no se encuentra en nuestra base de datos`
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
      fetchDirector(query);
    }
  }, [query]);
  const handleDirectorSearch = (query) => {
    setQuery(query);
    console.log(query);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-8 mb-12">
        <h1 className="font-pop text-2xl text-center text-white font-black">
          Directores exitosos
        </h1>
      </div>
      <NavBar
        onSearch={handleDirectorSearch}
        placeholder="ingrese un director"
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
      {!error && director && (
        <p className="font-pop text-white font-bold text-center mt-8">
          {director}
        </p>
      )}
      <div className="flex flex-wrap gap-4 justify-center">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Director;
