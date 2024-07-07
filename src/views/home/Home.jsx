import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-shrink-0">
        <Header />
      </div>
      <div className="flex flex-col space-y-4 mt-20">
        <div className="flex justify-center">
          <Link to="/dia">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Día
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/mes">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Mes
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/actor">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Actor
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/director">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Director
            </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link to="/popularidad">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Populares
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/mas_votada">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Mayor valoración
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/recomendacion">
            <button className="w-40 hover:border-blue-950 hover:border-solid hover:border-2 rounded-lg mr-4 font-pop text-white font-semibold p-1 hover:bg-blue-700 hover:text-black">
              Recomendaciones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
