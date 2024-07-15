import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

const Mes = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getMovies = async (mes) => {
    setLoading(true);
    setError(null);
    setMovies("");
    try {
      const resp = await axios.get(
        `https://etl-machine-learning-api-movie.onrender.com/cant_mes/?mes=${mes}`
      );

      const data = resp.data;
      setMovies(data.message);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Error fetching data", error);
        setError(`No existe un mes ${mes} en nuestra base de datos`);
      } else {
        setError("Error fetching data");
      }
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
    <div className="min-h-screen flex flex-col bg-custom_gradient">
      <header>
        <div className="mt-8 mb-12">
          <h1 className="font-pop text-2xl text-center text-white font-black">
            Películas por mes
          </h1>
        </div>
        <NavBar onSearch={handleInputChange} placeholder="ingrese un mes" />
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
          <p className="font-pop text-white font-bold text-center sm:text-xs lg:text-lg 2xl:text-2xl mt-8 mx-12">
            {movies}
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Mes;
