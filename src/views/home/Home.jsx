import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-shrink-0"></div>
      <div className="flex flex-col space-y-4 mt-20">
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/dia">Día</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/mes">Mes</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/titulo">Título</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/director">Director</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/actor">Actor</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/popularidad">Más populares</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/mas_votadas">Más Votadas</Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
            <Link to="/recomendacion">Recomendaciones</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
