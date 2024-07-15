import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom_gradient overflow-hidden">
      <header>
        <div className="flex-shrink-0">
          <Header />
        </div>
      </header>
      <main className="flex-grow mb-8">
        <div className="flex flex-col space-y-4 mt-8 sm:mt-32">
          <div className="flex justify-center">
            <Link to="/dia">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Día
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/mes">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Mes
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/actor">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Actor
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/director">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Director
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            <Link to="/popularidad">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Populares
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/mas_votada">
              <button className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Mayor valoración
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/recomendacion">
              <button className="w-fit h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-1 hover:bg-zinc-950 hover:text-white">
                Recomendaciones
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
