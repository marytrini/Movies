import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

const Actor = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (actor) => {
    setLoading(true);
    setError(null);
    setMovies("");
    try {
      const info = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/get_actor/?nombre_actor=${actor}`
      );
      const data = info.data;
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response && error.response.status === 404) {
        setError(`El actor ${actor} no se encuentra en nuestra base de datos`);
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

  const handleSearch = (query) => {
    setQuery(query);
  };
  return (
    <div className="min-h-screen flex flex-col  overflow-y-clip bg-custom_gradient">
      <header>
        <div className="mt-8 mb-12">
          <h1 className="font-pop text-3xl text-center text-white font-black">
            Actores
          </h1>
        </div>
        <NavBar onSearch={handleSearch} placeholder="ingrese un actor" />
      </header>
      <main className="flex-grow">
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
          <p className="font-pop text-white font-bold text-center sm:text-xs lg:text-base 2xl:text-xl mt-8 mx-12">
            {movies}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Actor;
